import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';

const initialOpportunities = [
  { id: 'proj-1', company: 'AgriTech Solutions', project: 'AI Crop Disease Detection', match: '89%', reviewed: false },
  { id: 'proj-2', company: 'UrbanCare Labs', project: 'Smart Campus Issue Management', match: '76%', reviewed: false },
];

export default function IndustryDashboard() {
  const navigate = useNavigate();
  const [opportunities, setOpportunities] = useState(initialOpportunities);

  const handleReview = (item) => {
    setOpportunities((current) =>
      current.map((entry) =>
        entry.id === item.id ? { ...entry, reviewed: true } : entry
      )
    );

    navigate(`/projects/${item.id}`);
  };

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-stone-800">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-[#7c5cf0]">Industry Dashboard</p>
          <h1 className="mt-2 text-4xl font-black text-stone-900">Partnership and pilot pipeline</h1>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <StatCard title="Open Pilots" value="08" subtitle="Across sectors" accent="cyan" />
          <StatCard title="Partner Match" value="89%" subtitle="Strong fit" accent="purple" />
          <StatCard title="Requests" value="12" subtitle="In review" accent="green" />
          <StatCard title="Active Labs" value="06" subtitle="Field-ready" accent="amber" />
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
          <h2 className="text-xl font-bold text-stone-900">High-potential project matches</h2>
          <div className="mt-6 space-y-4">
            {opportunities.map((item) => (
              <div key={item.company} className="flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <div>
                  <p className="font-medium text-stone-900">{item.company}</p>
                  <p className="text-sm text-stone-600">Project: {item.project}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700">{item.match}</span>
                  <button
                    onClick={() => handleReview(item)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      item.reviewed
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-gradient-to-r from-[#5d4be5] to-[#7c3aed] text-white hover:opacity-90'
                    }`}
                  >
                    {item.reviewed ? 'Reviewed' : 'Review'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
