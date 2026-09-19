import { Award, Briefcase, MapPin, Sparkles, Star } from 'lucide-react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const mentorCatalog = [
  {
    id: 'mentor-1',
    name: 'Meera Nair',
    expertise: ['Machine Learning', 'AgriTech'],
    domains: ['Agriculture', 'Climate'],
    experience: 8,
    availability: 'Available',
    location: 'Bengaluru, India',
    projectsMentored: 12,
    match: 94,
    bio: 'Meera helps early-stage product teams turn research ideas into practical, field-ready prototypes with clear validation milestones.',
    focus: ['Crop intelligence', 'Field validation', 'Prototype strategy'],
  },
  {
    id: 'mentor-2',
    name: 'Sanjay Verma',
    expertise: ['Computer Vision', 'MLOps'],
    domains: ['Healthcare', 'Agriculture'],
    experience: 6,
    availability: 'Weekends',
    location: 'Pune, India',
    projectsMentored: 9,
    match: 90,
    bio: 'Sanjay works closely with teams building AI systems that need strong technical foundations, deployment discipline, and evidence-driven iteration.',
    focus: ['Model deployment', 'Data pipelines', 'Product experiments'],
  },
  {
    id: 'mentor-3',
    name: 'Lina Joseph',
    expertise: ['Product Strategy', 'AI Ethics'],
    domains: ['Education', 'Community'],
    experience: 10,
    availability: 'Available',
    location: 'Hyderabad, India',
    projectsMentored: 15,
    match: 78,
    bio: 'Lina supports founders who need to align technical innovation with real-world user value, inclusion, and impact-driven product decisions.',
    focus: ['Problem framing', 'AI ethics', 'User-first product design'],
  },
];

export default function MentorDetailsPage() {
  const { id } = useParams();
  const mentor = mentorCatalog.find((item) => item.id === id) ?? mentorCatalog[0];

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-stone-800">
      <Navbar />
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-violet-700">Mentor Profile</p>
            <h1 className="mt-2 text-4xl font-black text-stone-900">{mentor.name}</h1>
          </div>
          <button className="rounded-full bg-gradient-to-r from-[#4f46e5] to-[#6d28d9] px-5 py-3 font-medium text-white shadow-[0_12px_20px_rgba(79,70,229,0.2)]">
            Request Mentorship
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-stone-200 bg-white/85 p-6 shadow-[0_18px_35px_rgba(28,25,23,0.04)]">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#4f46e5] to-[#6d28d9] text-2xl font-bold text-white">
                  {mentor.name.charAt(0)}
                </div>
                <div>
                  <div className="text-2xl font-bold text-stone-900">{mentor.name}</div>
                  <div className="mt-1 text-sm text-stone-600">{mentor.expertise.join(', ')}</div>
                </div>
              </div>

              <p className="mt-6 text-stone-600">{mentor.bio}</p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white/85 p-6 shadow-[0_18px_35px_rgba(28,25,23,0.04)]">
              <h2 className="text-2xl font-bold text-stone-900">Focus areas</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {mentor.focus.map((item) => (
                  <span key={item} className="rounded-full bg-violet-100 px-3 py-1 text-sm text-violet-700">{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-stone-200 bg-white/85 p-6 shadow-[0_18px_35px_rgba(28,25,23,0.04)]">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold text-stone-900">Profile</h3>
                <span className="rounded-full border border-violet-200 bg-violet-100 px-2 py-1 text-sm font-medium text-violet-700">{mentor.match}% Match</span>
              </div>

              <div className="space-y-3 text-sm text-stone-600">
                <div className="flex items-center gap-2"><Award className="h-4 w-4 text-violet-700" /> {mentor.domains.join(', ')}</div>
                <div className="flex items-center gap-2"><Star className="h-4 w-4 text-violet-700" /> {mentor.experience}+ years experience</div>
                <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-violet-700" /> {mentor.availability}</div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-violet-700" /> {mentor.location}</div>
                <div className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-violet-700" /> {mentor.projectsMentored} projects mentored</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
