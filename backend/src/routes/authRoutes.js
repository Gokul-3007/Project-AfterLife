import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import demoUsers, { createToken } from '../utils/demoAuth.js';

const router = express.Router();

const generateToken = (user) => jwt.sign({ id: user.id, email: user.email, role: user.role, name: user.name }, process.env.JWT_SECRET || 'project-afterlife-secret', { expiresIn: '7d' });

router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role, organization, skills, domain, location, bio } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'Name, email, password and role are required.' });
    }

    const userExists = demoUsers.some((user) => user.email.toLowerCase() === email.toLowerCase());
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      id: `user-${Date.now()}`,
      name,
      email,
      password: hashedPassword,
      role: role.toUpperCase(),
      organization: organization || 'Independent',
      skills: skills || [],
      domains: domain ? [domain] : [],
      location: location || 'Remote',
      bio: bio || ''
    };

    demoUsers.push(user);
    const token = generateToken(user);
    res.status(201).json({ token, user: { ...user, password: undefined } });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = demoUsers.find((entry) => entry.email.toLowerCase() === String(email).toLowerCase());

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const validPassword = password === user.password || await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const payload = createToken(user);
    res.json(payload);
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
});

router.get('/me', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'project-afterlife-secret');
    const user = demoUsers.find((entry) => entry.email === decoded.email);
    res.json({ user });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

export default router;
