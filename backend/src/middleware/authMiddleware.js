import jwt from 'jsonwebtoken';
import demoUsers from '../utils/demoAuth.js';

export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'project-afterlife-secret');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export const authorize = (...roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Access denied' });
  }
  next();
};

export const demoProtect = (req, res, next) => {
  const { email, password } = req.body;
  const user = demoUsers.find((entry) => entry.email === email && entry.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid demo credentials' });
  req.user = { id: user.id, role: user.role, email: user.email, name: user.name };
  next();
};
