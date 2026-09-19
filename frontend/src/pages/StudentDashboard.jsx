import { Activity, ArrowRight, Briefcase, FolderKanban, Lightbulb, MessageSquare, Sparkles, TrendingUp, Users } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

export default function StudentDashboard() {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get('/projects');
        const allProjects = response.data?.projects || [];
        const currentUserId = user?.id || user?.email || 'student-user';

        const studentProjects = allProjects.filter((project) => {
          const ownerMatch = project.owner === currentUserId || project.owner === 'student-user' || project.owner === 'demo-user';
          const teamMatch = Array.isArray(project.team) && project.team.some((member) => member.toLowerCase().includes((user?.name || 'Aarav Sharma').toLowerCase()));
          return ownerMatch || teamMatch;
        });

        setProjects(studentProjects);
      } catch (error) {
        console.error('Failed to load student projects:', error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [user]);

  const stats = useMemo(() => [
    { title: 'Total Projects', value: String(projects.length || 0).padStart(2, '0'), subtitle: 'Submitted by you', accent: 'cyan' },
    { title: 'Active Projects', value: String(Math.max(projects.length - 1, 0)).padStart(2, '0'), subtitle: 'In motion', accent: 'purple' },
    { title: 'Mentors Connected', value: '06', subtitle: '2 new requests', accent: 'green' },
    { title: 'Industry Interest', value: '89%', subtitle: '5 opportunities', accent: 'amber' },
  ], [projects.length]);

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-stone-800">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-violet-700">Student Dashboard</p>
            <h1 className="mt-2 text-4xl font-black text-stone-900">Project momentum</h1>
          </div>
          <Link to="/submit-project" className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 font-semibold text-white shadow-[0_8px_18px_rgba(28,25,23,0.12)]">
            Submit Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => <StatCard key={stat.title} {...stat} />)}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <div className="space-y-6">
            <div className="glass-card rounded-3xl border border-stone-200 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-stone-900">Project Health</h2>
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">Healthy</span>
              </div>
              <div className="mt-6 space-y-5">
                {[{ label: 'Innovation', value: 82 }, { label: 'Impact', value: 91 }, { label: 'Technical Readiness', value: 74 }].map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex justify-between text-sm text-stone-600"><span>{item.label}</span><span>{item.value}</span></div>
                    <div className="h-2.5 rounded-full bg-stone-200">
                      <div className="h-2.5 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#6d28d9]" style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-3xl border border-stone-200 p-6">
              <h2 className="text-xl font-bold text-stone-900">Recent Activity</h2>
              <div className="mt-5 space-y-4">
                {[
                  'AI analysis completed for AI Crop Disease Detection',
                  'Mentor Meera Nair requested a project review call',
                  'AgriTech Solutions expressed interest in pilot collaboration',
                ].map((event) => (
                  <div key={event} className="flex gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-violet-500" />
                    <p className="text-stone-700">{event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-3xl border border-stone-200 p-6">
              <h2 className="text-xl font-bold text-stone-900">Recommended Opportunities</h2>
              <div className="mt-5 space-y-4">
                {[
                  { title: 'Agriculture mentor match', action: 'View mentor' },
                  { title: 'Pilot test with AgriTech Solutions', action: 'Request pilot' },
                  { title: 'Documentation refresh', action: 'Update' },
                ].map((item) => (
                  <div key={item.title} className="flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <div>
                      <p className="font-medium text-stone-900">{item.title}</p>
                      <p className="text-xs text-stone-500">Recommended for progression</p>
                    </div>
                    <button className="text-sm text-violet-700">{item.action}</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-3xl border border-stone-200 p-6">
              <h2 className="text-xl font-bold text-stone-900">My Projects</h2>
              <div className="mt-5 space-y-4">
                {loading ? (
                  <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-stone-600">Loading projects...</div>
                ) : projects.length > 0 ? (
                  projects.map((project) => (
                    <div key={project.id || project.title} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-medium text-stone-900">{project.title}</p>
                        <span className="rounded-full bg-violet-100 px-2 py-1 text-xs text-violet-700">{project.stage || 'Idea'}</span>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-sm text-stone-600">
                        <span>Category: {project.category || 'General'}</span>
                        <span>Match: {project.aiAnalysis?.scores?.industryFit || 'New'}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-4 text-stone-600">
                    No projects submitted yet. Submit your first project to see it here.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
