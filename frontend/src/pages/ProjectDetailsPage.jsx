import { ArrowRight, Briefcase, Github, Link2, Sparkles } from 'lucide-react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const projectCatalog = [
  {
    id: 'proj-1',
    title: 'AI Crop Disease Detection',
    description: 'A mobile-first vision system to detect crop diseases early and help farmers take preventive action.',
    problemStatement: 'Farmers lose yields when diseases go undetected until too late.',
    solution: 'A lightweight AI pipeline that identifies common crop diseases from visual input and guides intervention steps.',
    technologies: ['Python', 'React', 'TensorFlow', 'MongoDB'],
    stage: 'Prototype',
    team: ['Aarav Sharma', 'Priya Rao', 'Nikhil Sen'],
    supports: ['Agriculture Mentor', 'Dataset', 'Pilot Testing'],
    mentors: ['Meera Nair', 'Sanjay Verma'],
    industryInterest: 'AgriTech Solutions',
    githubUrl: 'https://github.com/demo/crop-disease',
    demoUrl: 'https://demo.example/crop-disease',
  },
  {
    id: 'proj-2',
    title: 'Smart Campus Issue Management',
    description: 'A campus operations dashboard that makes student issue reporting, triage, and resolution faster and more transparent.',
    problemStatement: 'Campus issues are often reported too late and tracked manually across departments.',
    solution: 'A structured reporting and routing platform with a dashboard for facilities and student support teams.',
    technologies: ['React', 'Node', 'PostgreSQL'],
    stage: 'MVP',
    team: ['CampusCrew', 'Aisha Khan', 'Rohan Das'],
    supports: ['Campus Mentor', 'Operations Team', 'Data Access'],
    mentors: ['Lina Joseph', 'Sanjay Verma'],
    industryInterest: 'Smart Campus Partners',
    githubUrl: 'https://github.com/demo/campus-issues',
    demoUrl: 'https://demo.example/campus-issues',
  },
  {
    id: 'proj-3',
    title: 'AI Cyber Attack Early Warning',
    description: 'A predictive security project that helps identify suspicious patterns before they escalate into damaging cyber incidents.',
    problemStatement: 'Teams often react after the breach, leaving limited time to contain damage.',
    solution: 'A monitoring and alerting system that combines anomaly detection and analyst-ready summaries.',
    technologies: ['Python', 'AI', 'Security Analytics'],
    stage: 'Pilot',
    team: ['CyberNex', 'Ishita Rao', 'Deepak Menon'],
    supports: ['Security Mentor', 'Threat Data', 'Pilot Access'],
    mentors: ['Asha Nair', 'Meera Nair'],
    industryInterest: 'Cybersecurity Labs',
    githubUrl: 'https://github.com/demo/cyber-warning',
    demoUrl: 'https://demo.example/cyber-warning',
  },
];

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const project = projectCatalog.find((item) => item.id === id) ?? projectCatalog[0];

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-stone-800">
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-violet-700">Project Details</p>
            <h1 className="mt-2 text-4xl font-black text-stone-900">{project.title}</h1>
          </div>
          <div className="flex gap-3">
            <button className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700">Request Collaboration</button>
            <button className="rounded-full bg-gradient-to-r from-[#4f46e5] to-[#6d28d9] px-4 py-2 text-sm font-medium text-white shadow-[0_12px_20px_rgba(79,70,229,0.2)]">Support Project</button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-6">
            <div className="glass-card rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-[0_18px_35px_rgba(28,25,23,0.04)]">
              <h2 className="text-2xl font-bold text-stone-900">Project Overview</h2>
              <p className="mt-4 text-stone-600">{project.description}</p>
            </div>

            <div className="glass-card rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-[0_18px_35px_rgba(28,25,23,0.04)]">
              <h2 className="text-2xl font-bold text-stone-900">Problem</h2>
              <p className="mt-4 text-stone-600">{project.problemStatement}</p>
            </div>

            <div className="glass-card rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-[0_18px_35px_rgba(28,25,23,0.04)]">
              <h2 className="text-2xl font-bold text-stone-900">Solution</h2>
              <p className="mt-4 text-stone-600">{project.solution}</p>
            </div>

            <div className="glass-card rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-[0_18px_35px_rgba(28,25,23,0.04)]">
              <h2 className="text-2xl font-bold text-stone-900">Technology Stack</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-[0_18px_35px_rgba(28,25,23,0.04)]">
              <h3 className="text-xl font-bold text-stone-900">Project DNA</h3>
              <div className="mt-4 space-y-2 text-sm text-stone-600">
                <div>Domain: Agriculture</div>
                <div>Project Stage: {project.stage}</div>
                <div>Target Users: Farmers</div>
                <div>Impact Area: Rural productivity</div>
              </div>
            </div>

            <div className="glass-card rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-[0_18px_35px_rgba(28,25,23,0.04)]">
              <h3 className="text-xl font-bold text-stone-900">AI Analysis</h3>
              <div className="mt-4 space-y-3 text-sm text-stone-600">
                <div>Innovation: 82</div>
                <div>Impact: 91</div>
                <div>Technical readiness: 74</div>
              </div>
            </div>

            <div className="glass-card rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-[0_18px_35px_rgba(28,25,23,0.04)]">
              <h3 className="text-xl font-bold text-stone-900">Required Support</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.supports.map((item) => <span key={item} className="rounded-full bg-violet-100 px-3 py-1 text-xs text-violet-700">{item}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
