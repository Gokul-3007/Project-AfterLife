import { Bell, Check, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';

const notifications = [
  { title: 'Your project has been analyzed.', detail: 'AI project analysis is ready for AI Crop Disease Detection.', time: '2h ago', unread: true },
  { title: 'You have a new mentor match.', detail: 'Meera Nair is available to review your prototype.', time: '5h ago', unread: true },
  { title: 'Industry XYZ is interested in your project.', detail: 'AgriTech Solutions wants to discuss pilot collaboration.', time: '1 day ago', unread: false },
  { title: 'Your mentorship request was accepted.', detail: 'Meera Nair accepted the mentorship request.', time: '2 days ago', unread: false },
];

export default function NotificationPage() {
  return (
    <div className="min-h-screen bg-[#f5f1ea] text-stone-800">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-violet-700">Notifications</p>
            <h1 className="mt-2 text-4xl font-black text-stone-900">Your updates</h1>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-400 text-stone-900 shadow-[0_12px_18px_rgba(217,119,6,0.18)]">
            <Bell className="h-5 w-5" />
          </div>
        </div>

        <div className="space-y-4">
          {notifications.map((item) => (
            <div key={item.title} className={`glass-card rounded-3xl border p-5 ${item.unread ? 'border-amber-200 bg-[#f7f3ee]' : 'border-stone-200 bg-stone-50'}`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4">
                  <div className={`mt-1 flex h-11 w-11 items-center justify-center rounded-2xl ${item.unread ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                    {item.unread ? <Bell className="h-5 w-5" /> : <Check className="h-5 w-5" />}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-stone-900">{item.title}</h2>
                    <p className="mt-1 text-sm text-stone-600">{item.detail}</p>
                  </div>
                </div>
                <span className="text-xs text-stone-500">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
