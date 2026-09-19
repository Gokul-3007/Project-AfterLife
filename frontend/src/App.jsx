import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/StudentDashboard';
import MentorDashboard from './pages/MentorDashboard';
import IndustryDashboard from './pages/IndustryDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import ExploreProjectsPage from './pages/ExploreProjectsPage';
import FindMentorsPage from './pages/FindMentorsPage';
import CollaborationPage from './pages/CollaborationPage';
import MessagingPage from './pages/MessagingPage';
import NotificationPage from './pages/NotificationPage';
import ProjectSubmissionPage from './pages/ProjectSubmissionPage';
import AIAnalysisPage from './pages/AIAnalysisPage';
import MentorDetailsPage from './pages/MentorDetailsPage';
import AuthProvider, { useAuth } from './context/AuthContext';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/explore" element={<ExploreProjectsPage />} />
      <Route path="/projects/:id" element={<ProjectDetailsPage />} />
      <Route path="/mentors/:id" element={<MentorDetailsPage />} />
      <Route path="/mentors" element={<FindMentorsPage />} />
      <Route path="/collaborations" element={<CollaborationPage />} />
      <Route path="/messages" element={<MessagingPage />} />
      <Route path="/notifications" element={<NotificationPage />} />
      <Route
        path="/student"
        element={
          <ProtectedRoute allowedRoles={['STUDENT']}>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/mentor"
        element={
          <ProtectedRoute allowedRoles={['MENTOR']}>
            <MentorDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/industry"
        element={
          <ProtectedRoute allowedRoles={['INDUSTRY']}>
            <IndustryDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={['ADMIN']}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/submit-project" element={<ProjectSubmissionPage />} />
      <Route path="/ai-analysis" element={<AIAnalysisPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
