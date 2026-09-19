import express from 'express';
import demoData from '../seed/demoData.js';

const router = express.Router();
const notifications = demoData.notifications;

router.get('/', (req, res) => {
  res.json({ notifications });
});

router.put('/:id/read', (req, res) => {
  const notification = notifications.find((item) => item.id === req.params.id);
  if (!notification) return res.status(404).json({ message: 'Notification not found' });
  notification.read = true;
  res.json({ notification });
});

export default router;
