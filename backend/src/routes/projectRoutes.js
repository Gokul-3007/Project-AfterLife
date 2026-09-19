import express from 'express';
import { demoUsers } from '../utils/demoAuth.js';
import demoData from '../seed/demoData.js';
import aiService from '../services/aiService.js';

const router = express.Router();
const projects = demoData.projects;

router.get('/', (req, res) => {
  res.json({ projects });
});

router.get('/:id', (req, res) => {
  const project = projects.find((item) => item.id === req.params.id);
  if (!project) return res.status(404).json({ message: 'Project not found' });
  res.json({ project });
});

router.post('/', (req, res) => {
  const project = {
    id: `proj-${Date.now()}`,
    ...req.body,
    owner: req.body.owner || 'student-user',
    category: req.body.category || 'General',
    tags: req.body.tags || [],
    technologies: req.body.technologies || [],
    stage: req.body.stage || 'Idea',
    requirements: req.body.requirements || [],
    lifecycle: ['Idea', 'Hackathon', 'Prototype'],
    status: 'ACTIVE',
    team: req.body.team || ['Student Team'],
    createdAt: new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
  };

  const analysis = aiService.analyzeProject(project);
  project.aiAnalysis = analysis;
  project.projectDNA = analysis.projectDNA;
  project.scores = analysis.scores;
  project.lifecycle = ['Idea', 'Hackathon', 'Prototype'];
  projects.unshift(project);

  res.status(201).json({ message: 'Project submitted successfully.', project });
});

router.put('/:id', (req, res) => {
  const index = projects.findIndex((item) => item.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Project not found' });
  projects[index] = { ...projects[index], ...req.body, lastUpdated: new Date().toISOString() };
  res.json({ project: projects[index] });
});

router.delete('/:id', (req, res) => {
  const index = projects.findIndex((item) => item.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Project not found' });
  projects.splice(index, 1);
  res.json({ message: 'Project deleted successfully.' });
});

export default router;
