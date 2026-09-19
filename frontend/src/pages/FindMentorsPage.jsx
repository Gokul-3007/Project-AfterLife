import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, MapPin, Sparkles, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import api from '../services/api';

export default function FindMentorsPage() {
  const navigate = useNavigate();
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await api.get('/matches/mentors/proj-1');
        setMentors(response.data.matches || []);
      } catch (error) {
        setMentors([
          { id: 'mentor-1', name: 'Meera Nair', expertise: ['Machine Learning', 'AgriTech'], domains: ['Agriculture', 'Climate'], experience: 8, availability: 'Available', location: 'Bengaluru, India', projectsMentored: 12, match: 94 },
          { id: 'mentor-2', name: 'Sanjay Verma', expertise: ['Computer Vision', 'MLOps'], domains: ['Healthcare', 'Agriculture'], experience: 6, availability: 'Weekends', location: 'Pune, India', projectsMentored: 9, match: 91 },
          { id: 'mentor-3', name: 'Lina Joseph', expertise: ['Product Strategy', 'AI Ethics'], domains: ['Education', 'Community'], experience: 10, availability: 'Available', location: 'Hyderabad, India', projectsMentored: 15, match: 87 },
        ]);
      }
    };
    load();
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-stone-800">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Find Mentors</p>
            <h1 className="mt-2 text-4xl font-black text-stone-900">High-fit mentor matches</h1>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mentors.map((mentor) => (
            <div key={mentor.name} className="glass-card rounded-3xl border border-stone-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#4f46e5] to-[#6d28d9] text-lg font-bold text-white">{mentor.name.charAt(0)}</div>
                  <div>
                    <h3 className="text-xl font-bold">{mentor.name}</h3>
                    <p className="text-sm text-slate-400">{mentor.expertise.join(', ')}</p>
                  </div>
                </div>
                <div className="rounded-full border border-violet-200 bg-violet-100 px-2 py-1 text-sm font-medium text-violet-700">{mentor.match}% Match</div>
              </div>

              <div className="mt-5 space-y-3 text-sm text-stone-600">
                <div className="flex items-center gap-2"><Award className="h-4 w-4 text-violet-700" /> {mentor.domains.join(', ')}</div>
                <div className="flex items-center gap-2"><Star className="h-4 w-4 text-violet-700" /> {mentor.experience}+ years experience</div>
                <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-violet-700" /> {mentor.availability}</div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-violet-700" /> {mentor.location}</div>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50 p-3 text-sm text-stone-600">
                <span>Projects mentored</span>
                <span className="font-semibold text-stone-900">{mentor.projectsMentored}</span>
              </div>

              <div className="mt-6 flex gap-3">
                <button onClick={() => navigate(`/mentors/${mentor.id}`)} className="flex-1 rounded-full border border-stone-200 px-4 py-2 text-sm text-stone-700">View Profile</button>
                <button className="flex-1 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#6d28d9] px-4 py-2 text-sm font-medium text-white">Request Mentorship</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
