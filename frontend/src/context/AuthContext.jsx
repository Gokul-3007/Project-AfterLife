import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const demoUserMap = {
  'student@afterlife.demo': { role: 'STUDENT', redirect: '/student' },
  'mentor@afterlife.demo': { role: 'MENTOR', redirect: '/mentor' },
  'industry@afterlife.demo': { role: 'INDUSTRY', redirect: '/industry' },
  'admin@afterlife.demo': { role: 'ADMIN', redirect: '/admin' },
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('afterlife-user');
    return saved ? JSON.parse(saved) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem('afterlife-token') || '');

  useEffect(() => {
    if (user) localStorage.setItem('afterlife-user', JSON.stringify(user));
    else localStorage.removeItem('afterlife-user');
  }, [user]);

  useEffect(() => {
    if (token) localStorage.setItem('afterlife-token', token);
    else localStorage.removeItem('afterlife-token');
  }, [token]);

  const login = async ({ email, password }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, { email, password });
      const userData = response.data.user || response.data;
      const authUser = { ...userData, role: userData.role || demoUserMap[email]?.role || 'STUDENT' };
      setUser(authUser);
      setToken(response.data.token || 'demo-token');
      return { success: true, user: authUser, redirect: authUser.role === 'STUDENT' ? '/student' : authUser.role === 'MENTOR' ? '/mentor' : authUser.role === 'INDUSTRY' ? '/industry' : '/admin' };
    } catch (error) {
      const fallback = demoUserMap[email];
      if (fallback && password === 'Demo@123') {
        const userData = {
          id: 'demo-user',
          name: email.includes('student') ? 'Aarav Sharma' : email.includes('mentor') ? 'Meera Nair' : email.includes('industry') ? 'Rohan Mehta' : 'Ananya Kulkarni',
          email,
          role: fallback.role,
          organization: email.includes('student') ? 'NIT Jaipur' : 'Afterlife Foundation',
        };
        setUser(userData);
        setToken('demo-token');
        return { success: true, user: userData, redirect: fallback.redirect };
      }
      return { success: false, message: error.response?.data?.message || 'Login failed' };
    }
  };

  const register = async (payload) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, payload);
      const userData = response.data.user || response.data;
      setUser(userData);
      setToken(response.data.token || 'demo-token');
      return { success: true, user: userData, redirect: userData.role === 'STUDENT' ? '/student' : userData.role === 'MENTOR' ? '/mentor' : userData.role === 'INDUSTRY' ? '/industry' : '/admin' };
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Registration failed' };
    }
  };

  const logout = () => {
    setUser(null);
    setToken('');
    localStorage.removeItem('afterlife-user');
    localStorage.removeItem('afterlife-token');
  };

  const value = useMemo(() => ({ user, token, setUser, login, register, logout, isAuthenticated: !!user }), [user, token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
