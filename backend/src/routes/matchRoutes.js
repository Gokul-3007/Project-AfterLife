import express from 'express';
import demoData from '../seed/demoData.js';
import { generateMatchExplanation } from '../services/aiService.js';

const router = express.Router();
const projects = demoData.projects;
const mentors = demoData.mentors;
const industries = demoData.industries;

const computeMentorMatch = (project, mentor) => {
  let score = 70;
  if (mentor.domains?.includes(project.category)) score += 15;
  if ((mentor.expertise || []).some((skill) => (project.technologies || []).includes(skill) || (project.requirements || []).includes(skill))) score += 10;
  if (mentor.experience >= 5) score += 5;
  if (mentor.availability === 'Available') score += 3;
  return Math.min(score, 98);
};

const computeIndustryMatch = (project, industry) => {
  let score = 65;
  if (industry.domains?.includes(project.category)) score += 15;
  if ((industry.technologies || []).some((tech) => (project.technologies || []).includes(tech))) score += 10;
  if (project.stage === 'Prototype' || project.stage === 'MVP' || project.stage === 'Pilot') score += 8;
  return Math.min(score, 96);
};

router.get('/mentors/:projectId', (req, res) => {
  const project = projects.find((item) => item.id === req.params.projectId);
  if (!project) return res.status(404).json({ message: 'Project not found' });

  const matches = mentors.map((mentor) => ({
    ...mentor,
    match: computeMentorMatch(project, mentor),
    reasons: generateMatchExplanation(project, mentor),
  }));

  res.json({ matches: matches.sort((a, b) => b.match - a.match) });
});

router.get('/industries/:projectId', (req, res) => {
  const project = projects.find((item) => item.id === req.params.projectId);
  if (!project) return res.status(404).json({ message: 'Project not found' });

  const matches = industries.map((industry) => ({
    ...industry,
    match: computeIndustryMatch(project, industry) 
  }));

  res.json({ matches: matches.sort((a, b) => b.match - a.match) });
});

export default router;
