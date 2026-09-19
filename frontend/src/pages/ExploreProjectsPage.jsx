import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Search } from 'lucide-react';
import Navbar from '../components/Navbar';

const projects = [
  { id: 'proj-1', title: 'AI Crop Disease Detection', category: 'Agriculture', technologies: ['Python', 'ML'], stage: 'Prototype', impact: 'High', team: 'Aarav & team', mentor: 'Matched', industry: 'Interested' },
  { id: 'proj-2', title: 'Smart Campus Issue Management', category: 'Education', technologies: ['React', 'Node'], stage: 'MVP', impact: 'Medium', team: 'CampusCrew', mentor: 'Pending', industry: 'Watching' },
  { id: 'proj-3', title: 'AI Cyber Attack Early Warning', category: 'Security', technologies: ['Python', 'AI'], stage: 'Pilot', impact: 'High', team: 'CyberNex', mentor: 'Matched', industry: 'High interest' },
];

export default function ExploreProjectsPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [likeCounts, setLikeCounts] = useState({});

  const filtered = projects.filter((project) => project.title.toLowerCase().includes(search.toLowerCase()));

  const handleLike = (projectId) => {
    setLikeCounts((current) => ({
      ...current,
      [projectId]: (current[projectId] ?? 0) + 1,
    }));
  };

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-stone-800">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Explore Projects</p>
          <h1 className="mt-2 text-4xl font-black text-stone-900">Discover high-potential innovation</h1>
        </div>

        <div className="mb-8 flex items-center gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-3">
          <Search className="h-5 w-5 text-stone-500" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by project name or keyword" className="w-full bg-transparent text-stone-900 outline-none placeholder:text-stone-500" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => (
            <div key={project.title} className="glass-card rounded-3xl border border-stone-200 p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-violet-100 px-2.5 py-1 text-xs font-medium text-violet-700">{project.category}</span>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">{project.stage}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleLike(project.id)}
                  aria-label={`Like ${project.title}`}
                  className={`flex items-center gap-2 rounded-full border px-2.5 py-1.5 text-sm transition ${
                    (likeCounts[project.id] ?? 0) > 0
                      ? 'border-rose-200 bg-rose-50 text-rose-600'
                      : 'border-stone-200 bg-white text-stone-500 hover:text-rose-500'
                  }`}
                >
                  <Heart className={`h-4 w-4 ${(likeCounts[project.id] ?? 0) > 0 ? 'fill-current' : ''}`} />
                  <span>{likeCounts[project.id] ?? 0}</span>
                </button>
              </div>

              <h2 className="mt-5 text-2xl font-bold text-stone-900">{project.title}</h2>
              <p className="mt-3 text-stone-600">Technologies: {project.technologies.join(', ')}</p>
              <p className="mt-3 text-stone-600">Impact area: {project.impact}</p>
              <div className="mt-4 space-y-2 text-sm text-stone-600">
                <div>Team: {project.team}</div>
                <div>Mentor status: {project.mentor}</div>
                <div>Industry interest: {project.industry}</div>
              </div>
              <button onClick={() => navigate(`/projects/${project.id}`)} className="mt-6 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#6d28d9] px-4 py-2 text-sm font-medium text-white">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
