import express from 'express';
import demoData from '../seed/demoData.js';

const router = express.Router();
const projects = demoData.projects;
const notifications = demoData.notifications;

router.get('/stats', (req, res) => {
  res.json({
    totalUsers: 24,
    totalProjects: projects.length,
    activeProjects: 8,
    inactiveProjects: 2,
    mentors: 5,
    industries: 5,
    collaborationRequests: demoData.collaborations.length,
    projectsRevived: 7,
    projectGrowth: [12, 14, 19, 24, 30, 41],
    categoryBreakdown: {
      Agriculture: 4,
      Education: 3,
      Healthcare: 2,
      'Smart Cities': 1,
    },
    stageBreakdown: {
      Idea: 2,
      Prototype: 4,
      MVP: 3,
      Pilot: 1,
    }
  });
});

router.get('/projects', (req, res) => {
  res.json({ projects });
});

router.get('/users', (req, res) => {
  res.json({ users: demoData.users });
});

export default router;
