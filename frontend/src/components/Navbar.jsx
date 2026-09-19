import { Search, Bell, MessageCircle, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const dashboardLink = user ? (
    user.role === 'STUDENT' ? '/student' : user.role === 'MENTOR' ? '/mentor' : user.role === 'INDUSTRY' ? '/industry' : '/admin'
  ) : '/';

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-[#fffdf9]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3 text-xl font-bold tracking-[0.08em] text-stone-900">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f46e5] via-[#6d28d9] to-[#d97706] shadow-[0_8px_18px_rgba(79,70,229,0.12)]">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-[1.7rem] font-black tracking-tight">PROJECT AFTERLIFE</span>
        </Link>

        <nav className="hidden items-center gap-6 text-[0.95rem] text-stone-700 md:flex">
          <Link to="/" className="transition hover:text-stone-900">Home</Link>
          <Link to="/explore" className="transition hover:text-stone-900">Explore Projects</Link>
          <Link to="/mentors" className="transition hover:text-stone-900">Find Mentors</Link>
          <Link to="/collaborations" className="transition hover:text-stone-900">Collaboration</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-stone-200 bg-stone-50 p-2.5 text-stone-700 md:inline-flex hover:border-stone-300 hover:text-stone-900">
            <Search className="h-4 w-4" />
          </button>
          <Link to="/notifications" className="inline-flex rounded-full border border-stone-200 bg-stone-50 p-2.5 text-stone-700 hover:border-stone-300 hover:text-stone-900">
            <span className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-amber-400 ring-2 ring-[#fffdf9]" />
            </span>
          </Link>
          <Link to="/messages" className="inline-flex rounded-full border border-stone-200 bg-stone-50 p-2.5 text-stone-700 hover:border-stone-300 hover:text-stone-900">
            <MessageCircle className="h-4 w-4" />
          </Link>
          {user ? (
            <>
              <Link to={dashboardLink} className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-medium text-stone-800 hover:border-stone-300 hover:text-stone-900">
                {user.name}
              </Link>
              <button onClick={handleLogout} className="rounded-full bg-gradient-to-r from-[#4f46e5] to-[#6d28d9] px-4 py-2 text-sm font-medium text-white shadow-[0_8px_18px_rgba(79,70,229,0.14)]">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 hover:border-stone-300 hover:text-stone-900">Login</Link>
              <Link to="/login" className="rounded-full bg-gradient-to-r from-[#4f46e5] to-[#6d28d9] px-4 py-2 text-sm font-medium text-white shadow-[0_8px_18px_rgba(79,70,229,0.14)]">Submit Your Project</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
