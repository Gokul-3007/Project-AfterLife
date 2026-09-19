import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import aiRoutes from './routes/aiRoutes.js';
import collaborationRoutes from './routes/collaborationRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import matchRoutes from './routes/matchRoutes.js';
import demoData from './seed/demoData.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/project-afterlife';

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(morgan('dev'));

app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'Project Afterlife backend is running.' });
});

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/collaborations', collaborationRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/matches', matchRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Project Afterlife Backend' });
});

const startServer = async () => {
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(MONGO_URI);
      console.log('MongoDB connected');
    }
    app.locals.demoData = demoData;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('MongoDB connection failed, continuing in demo mode:', error.message);
    app.locals.demoData = demoData;
    app.listen(PORT, () => {
      console.log(`Demo mode server running on port ${PORT}`);
    });
  }
};

startServer();

export default app;
