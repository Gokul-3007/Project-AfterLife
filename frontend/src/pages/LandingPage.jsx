import { ArrowRight, Bot, Briefcase, Building2, CheckCircle2, Compass, Gauge, GraduationCap, Lightbulb, Rocket, Sparkles, Users, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const features = [
  { icon: Bot, title: 'AI Project Analysis', desc: 'Turn prototype concepts into actionable growth pathways.' },
  { icon: Users, title: 'Smart Matching', desc: 'Connect to mentors, institutions, and industry partners.' },
  { icon: Workflow, title: 'Project Lifecycle', desc: 'Track your innovation from pitch to pilot to impact.' },
  { icon: Rocket, title: 'Revive & Scale', desc: 'Bring dead projects back to life with structured support.' },
];

const stats = [
  { label: 'Projects revived', value: '8.4K+' },
  { label: 'Mentor matches', value: '96%' },
  { label: 'Industry interest', value: '3.2x' },
  { label: 'Impact pilots', value: '420' },
];

const lifecycle = ['Idea', 'Hackathon', 'Prototype', 'Mentorship', 'MVP', 'Pilot', 'Deployment', 'Impact'];

const projects = [
  { title: 'AI Crop Disease Detection', category: 'Agriculture', stage: 'Prototype', impact: 'High' },
  { title: 'Smart Campus Issue Management', category: 'Education', stage: 'MVP', impact: 'Medium' },
  { title: 'AI Cyber Attack Early Warning', category: 'Security', stage: 'Pilot', impact: 'High' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f5f1ea] text-stone-800">
      <Navbar />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-60" />
          <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 md:pt-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-[0.95rem] text-stone-700 shadow-sm">
                  <Sparkles className="h-4 w-4 text-violet-500" /> Every hackathon project deserves a second chance.
                </div>
                <h1 className="max-w-[620px] text-[4rem] font-black leading-[0.92] tracking-[-0.06em] text-stone-900 md:text-[5.2rem]">
                  Turn Hackathon
                  <span className="mt-2 block">Projects Into</span>
                  <span className="mt-2 block bg-gradient-to-r from-[#4f46e5] via-[#6d28d9] to-[#d97706] bg-clip-text text-transparent">Real-World Impact</span>
                </h1>
                <p className="mt-6 max-w-[620px] text-[1.08rem] leading-8 text-stone-600">
                  An AI-powered ecosystem that connects student innovation with mentors, industries, institutions, communities, and opportunities.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/submit-project" className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 font-semibold text-white shadow-[0_12px_24px_rgba(28,25,23,0.12)] transition hover:bg-stone-800">
                    Submit Your Project <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/explore" className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 font-semibold text-stone-800 shadow-sm">
                    Explore Projects
                  </Link>
                </div>
                <div className="mt-10 flex flex-wrap gap-6 text-[0.95rem] text-stone-600">
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> AI analysis</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Mentor matching</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Industry access</div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[28px] border border-stone-200 bg-white/80 p-5 shadow-[0_20px_60px_rgba(28,25,23,0.06)] backdrop-blur-sm">
                  <div className="flex items-center justify-between text-sm text-stone-600">
                    <span className="font-medium text-stone-800">Project Lifecycle</span>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[0.7rem] font-medium text-emerald-700">Live</span>
                  </div>
                  <div className="mt-8 space-y-3">
                    {[
                      'Student',
                      'Project',
                      'AI Analysis',
                      'Smart Matching',
                      'Mentor / Industry',
                      'Collaboration',
                      'Impact',
                    ].map((item, index) => (
                      <div key={item} className="flex items-center gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-xs font-bold text-stone-700">{index + 1}</div>
                        <div className="flex-1 rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[22px] border border-stone-200 bg-white/85 p-6 text-center shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
                <div className="text-4xl font-black tracking-tight text-stone-900">{stat.value}</div>
                <div className="mt-2 text-sm text-stone-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-24">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">Problem</p>
            <h2 className="mt-4 text-4xl font-bold text-stone-900">Great ideas often stall after the final demo.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="glass-card rounded-3xl border border-stone-200 bg-white/85 p-6">
              <Lightbulb className="h-10 w-10 text-violet-700" />
              <h3 className="mt-5 text-xl font-bold text-stone-900">No follow-through</h3>
              <p className="mt-3 text-stone-600">Most projects lose momentum after evaluation because teams lack mentorship, validation, or a path to pilot.</p>
            </div>
            <div className="glass-card rounded-3xl border border-stone-200 bg-white/85 p-6">
              <Compass className="h-10 w-10 text-violet-700" />
              <h3 className="mt-5 text-xl font-bold text-stone-900">Disconnected networks</h3>
              <p className="mt-3 text-stone-600">Students rarely find the right institutions, companies, or communities to help scale their work.</p>
            </div>
            <div className="glass-card rounded-3xl border border-stone-200 bg-white/85 p-6">
              <Gauge className="h-10 w-10 text-emerald-700" />
              <h3 className="mt-5 text-xl font-bold text-stone-900">No impact pipeline</h3>
              <p className="mt-3 text-stone-600">Without a structured transition, innovative prototypes never reach pilot, deployment, or public benefit.</p>
            </div>
          </div>
        </section>

        <section className="border-y border-stone-200 bg-white/60">
          <div className="mx-auto max-w-7xl px-4 py-24">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">Solution</p>
              <h2 className="mt-4 text-4xl font-bold text-stone-900">From prototype to possibility.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="glass-card rounded-3xl border border-stone-200 bg-white/85 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-amber-100 text-violet-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-stone-900">{title}</h3>
                  <p className="mt-3 text-stone-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-24">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">How It Works</p>
            <h2 className="mt-4 text-4xl font-bold text-stone-900">A guided path from hackathon to impact</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              ['Submit project', 'Students create structured project profiles and define needs.'],
              ['AI analysis', 'The platform creates project DNA and action-oriented recommendations.'],
              ['Smart matching', 'Mentors, institutions, and industries are identified based on fit.'],
              ['Launch beyond the hackathon', 'Teams move into collaboration, mentorship, and pilot opportunities.'],
            ].map(([title, desc], index) => (
              <div key={title} className="glass-card rounded-3xl border border-stone-200 bg-white/85 p-6">
                <div className="mb-4 text-3xl font-black text-violet-700">0{index + 1}</div>
                <h3 className="text-xl font-bold text-stone-900">{title}</h3>
                <p className="mt-3 text-stone-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-24">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Project Lifecycle</p>
            <h2 className="mt-4 text-4xl font-bold text-stone-900">The path that keeps ideas alive</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {lifecycle.map((item, idx) => (
              <div key={item} className="flex items-center gap-3">
                <div className={`rounded-full px-4 py-2 text-sm font-medium ${idx === 3 ? 'bg-gradient-to-r from-violet-600 to-violet-500 text-white' : 'border border-stone-300 bg-stone-50 text-stone-700'}`}>
                  {item}
                </div>
                {idx < lifecycle.length - 1 && <ArrowRight className="h-4 w-4 text-stone-500" />}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-24">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">Featured Projects</p>
            <h2 className="mt-4 text-4xl font-bold text-stone-900">Promising ideas ready for their next chapter</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="glass-card rounded-3xl border border-stone-200 bg-white/85 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-violet-100 px-2.5 py-1 text-xs font-medium text-violet-700">{project.category}</span>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">{project.stage}</span>
                </div>
                <h3 className="text-2xl font-bold text-stone-900">{project.title}</h3>
                <p className="mt-3 text-stone-600">Impact area: {project.impact}</p>
                <div className="mt-5 flex justify-between text-sm text-stone-600">
                  <span>Mentor status</span>
                  <span className="font-semibold text-emerald-700">Matched</span>
                </div>
                <div className="mt-5 flex justify-between text-sm text-stone-600">
                  <span>Industry interest</span>
                  <span className="font-semibold text-violet-700">High</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-24">
          <div className="rounded-3xl border border-violet-200 bg-gradient-to-r from-violet-50 via-[#fffdf9] to-amber-50 px-8 py-10 text-center shadow-[0_12px_28px_rgba(79,70,229,0.06)]">
            <p className="text-sm uppercase tracking-[0.2em] text-violet-700">Call to Action</p>
            <h2 className="mt-4 text-4xl font-bold text-stone-900">Build the future beyond the hackathon.</h2>
            <div className="mt-8 flex justify-center">
              <Link to="/submit-project" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 px-6 py-3 font-semibold text-white">
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xl font-black text-white">PROJECT AFTERLIFE</div>
            <p className="mt-2 text-slate-400">Don't let great ideas die after the hackathon.</p>
          </div>
          <div className="flex gap-6 text-sm text-slate-400">
            <Link to="/explore">Projects</Link>
            <Link to="/mentors">Mentors</Link>
            <Link to="/collaborations">Collaboration</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
