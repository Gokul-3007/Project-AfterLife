import express from 'express';
import demoData from '../seed/demoData.js';

const router = express.Router();
const requests = demoData.collaborations;

router.get('/', (req, res) => {
  res.json({ collaborations: requests });
});

router.post('/', (req, res) => {
  const request = {
    id: `req-${Date.now()}`,
    ...req.body,
    status: 'Pending',
    createdAt: new Date().toISOString(),
  };
  requests.unshift(request);
  res.status(201).json({ message: 'Collaboration request sent.', request });
});

router.put('/:id', (req, res) => {
  const index = requests.findIndex((item) => item.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Request not found' });
  requests[index] = { ...requests[index], ...req.body };
  res.json({ collaboration: requests[index] });
});

export default router;
