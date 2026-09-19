import { useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';

const initialRequests = [
  { project: 'AI Crop Disease Detection', type: 'Mentorship', status: 'Pending' },
  { project: 'Smart Waste Classification', type: 'Technical Review', status: 'Accepted' },
];

export default function MentorDashboard() {
  const [requests, setRequests] = useState(initialRequests);

  const openRequests = useMemo(
    () => requests.filter((request) => request.status === 'Pending').length,
    [requests]
  );

  const handleAccept = (projectName) => {
    setRequests((current) =>
      current.map((request) =>
        request.project === projectName
          ? { ...request, status: 'Accepted' }
          : request
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-stone-800">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-[#7c5cf0]">Mentor Dashboard</p>
          <h1 className="mt-2 text-4xl font-black text-stone-900">Mentor operations overview</h1>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <StatCard title="Projects Mentored" value="18" subtitle="Across 6 domains" accent="cyan" />
          <StatCard title="Open Requests" value={String(openRequests).padStart(2, '0')} subtitle="Requires review" accent="purple" />
          <StatCard title="New Matches" value="12" subtitle="This month" accent="green" />
          <StatCard title="Pilot Readiness" value="86%" subtitle="Strong conversion" accent="amber" />
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
          <h2 className="text-xl font-bold text-stone-900">Incoming Requests</h2>
          <div className="mt-6 space-y-4">
            {requests.map((request) => (
              <div key={`${request.project}-${request.type}`} className="flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <div>
                  <p className="font-medium text-stone-900">{request.project}</p>
                  <p className="text-sm text-stone-600">Type: {request.type}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${request.status === 'Accepted' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {request.status}
                  </span>
                  {request.status === 'Pending' ? (
                    <button
                      onClick={() => handleAccept(request.project)}
                      className="rounded-full bg-gradient-to-r from-[#5d4be5] to-[#7c3aed] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                    >
                      Accept
                    </button>
                  ) : (
                    <button
                      disabled
                      className="cursor-default rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700"
                    >
                      Accepted
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
