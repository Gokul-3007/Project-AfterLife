import express from 'express';
import demoData from '../seed/demoData.js';
import aiService from '../services/aiService.js';

const router = express.Router();
const projects = demoData.projects;

router.post('/analyze-project/:id', (req, res) => {
  const project = projects.find((item) => item.id === req.params.id);
  if (!project) return res.status(404).json({ message: 'Project not found' });

  const result = aiService.analyzeProject(project);
  project.aiAnalysis = result;
  project.projectDNA = result.projectDNA;
  project.scores = result.scores;
  res.json({ message: 'Project analyzed successfully.', analysis: result });
});

router.get('/project-dna/:id', (req, res) => {
  const project = projects.find((item) => item.id === req.params.id);
  if (!project) return res.status(404).json({ message: 'Project not found' });

  const result = aiService.generateProjectDNA(project);
  res.json({ projectDNA: result });
});

export default router;
