import { useState } from 'react';
import Navbar from '../components/Navbar';

const initialRequests = [
  { from: 'AI Crop Disease Detection', to: 'AgriTech Mentor', type: 'Mentorship', status: 'Pending' },
  { from: 'Smart Campus Issue Management', to: 'SmartCity Labs', type: 'Industry Collaboration', status: 'Accepted' },
];

export default function CollaborationPage() {
  const [requests, setRequests] = useState(initialRequests);

  const handleDecision = (requestFrom, nextStatus) => {
    setRequests((current) =>
      current.map((request) =>
        request.from === requestFrom ? { ...request, status: nextStatus } : request
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-stone-800">
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-[#7c5cf0]">Collaboration Requests</p>
          <h1 className="mt-2 text-4xl font-black text-stone-900">Mentorship and partnership flow</h1>
        </div>

        <div className="space-y-5">
          {requests.map((item) => (
            <div key={`${item.from}-${item.to}`} className="flex flex-col gap-4 rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-stone-500">Request</div>
                <p className="mt-2 text-xl font-bold text-stone-900">From: {item.from}</p>
                <p className="text-stone-600">To: {item.to}</p>
                <p className="text-stone-600">Type: {item.type}</p>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${
                    item.status === 'Accepted'
                      ? 'bg-emerald-100 text-emerald-700'
                      : item.status === 'Rejected'
                        ? 'bg-rose-100 text-rose-700'
                        : 'bg-amber-100 text-amber-700'
                  }`}
                >
                  {item.status}
                </span>

                <button
                  onClick={() => handleDecision(item.from, 'Accepted')}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    item.status === 'Accepted'
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'border border-stone-200 bg-white text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  {item.status === 'Accepted' ? 'Accepted' : 'Accept'}
                </button>

                <button
                  onClick={() => handleDecision(item.from, 'Rejected')}
                  className={`rounded-full px-4 py-2 text-sm font-medium text-white transition ${
                    item.status === 'Rejected'
                      ? 'bg-rose-500'
                      : 'bg-gradient-to-r from-[#5d4be5] to-[#7c3aed] hover:opacity-90'
                  }`}
                >
                  {item.status === 'Rejected' ? 'Rejected' : 'Reject'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
