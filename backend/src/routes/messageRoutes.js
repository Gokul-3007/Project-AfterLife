import express from 'express';
import demoData from '../seed/demoData.js';

const router = express.Router();
const messages = demoData.messages;

router.get('/:conversationId', (req, res) => {
  const conversationMessages = messages.filter((msg) => msg.conversationId === req.params.conversationId);
  res.json({ messages: conversationMessages });
});

router.post('/', (req, res) => {
  const newMessage = {
    id: `msg-${Date.now()}`,
    ...req.body,
    createdAt: new Date().toISOString(),
  };
  messages.push(newMessage);
  res.status(201).json({ message: newMessage });
});

export default router;
