import { useEffect, useState } from 'react';
import { BrainCircuit, Sparkles } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import api from '../services/api';

const mockProject = {
  id: 'proj-1',
  title: 'AI Crop Disease Detection',
  category: 'Agriculture',
  technologies: ['Python', 'React', 'Machine Learning'],
  stage: 'Prototype',
  problemStatement: 'Farmers lose yield because diseases are detected too late.',
  requirements: ['Technical Mentor', 'Dataset', 'Pilot Testing'],
};

export default function AIAnalysisPage() {
  const location = useLocation();
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const projectIdFromQuery = params.get('projectId');
    const projectId = projectIdFromQuery || localStorage.getItem('afterlife-last-project-id') || mockProject.id;

    const fetchAnalysis = async () => {
      try {
        const response = await api.post(`/ai/analyze-project/${projectId}`);
        setAnalysis(response.data.analysis);
      } catch (error) {
        setAnalysis({
          summary: 'AI-generated prototype indicators show clear market and social potential with some validation gaps.',
          scores: {
            innovation: 82,
            impact: 91,
            technicalReadiness: 74,
            scalability: 79,
            industryFit: 86,
          },
          reasons: {
            innovation: 'The project combines computer vision with agricultural disease detection and targets a practical use case.',
            impact: 'It addresses a direct need for farmers with clear productivity benefits.',
            technicalReadiness: 'The stack is feasible, but dataset gathering and pilot validation are still essential.',
            scalability: 'The concept can expand across geographies and crop categories with proper validation.',
            industryFit: 'This problem area aligns strongly with agriculture technology and public-interest deployment opportunities.'
          },
          projectDNA: {
            domain: 'Agriculture',
            stage: 'Prototype',
            targetUsers: ['Farmers', 'Agriculture officers'],
            technologies: ['Python', 'React', 'Machine Learning'],
            requiredSkills: ['Computer Vision', 'ML', 'Field validation'],
            requiredResources: ['Agriculture dataset', 'Pilot testing'],
            potentialPartners: ['AgriTech Companies', 'Agricultural Institutions'],
          }
        });
      }
    };
    fetchAnalysis();
  }, [location.search]);

  if (!analysis) return <div className="min-h-screen bg-[#f5f1ea]" />;

  const scoreList = [
    { label: 'Innovation', value: analysis.scores.innovation, reason: analysis.reasons.innovation },
    { label: 'Impact', value: analysis.scores.impact, reason: analysis.reasons.impact },
    { label: 'Technical Readiness', value: analysis.scores.technicalReadiness, reason: analysis.reasons.technicalReadiness },
    { label: 'Scalability', value: analysis.scores.scalability, reason: analysis.reasons.scalability },
    { label: 'Industry Relevance', value: analysis.scores.industryFit, reason: analysis.reasons.industryFit },
  ];

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-stone-800">
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4f46e5] to-[#6d28d9]">
            <BrainCircuit className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-violet-700">AI Analysis</p>
            <h1 className="text-4xl font-black text-stone-900">AI Project Analysis</h1>
          </div>
        </div>

        <div className="glass-card rounded-3xl border border-stone-200 p-6 md:p-8">
          <p className="text-lg text-stone-700">{analysis.summary}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500">What is the domain</div>
              <div className="mt-2 text-base font-semibold text-stone-900">{analysis.projectDNA?.domain || 'Not specified'}</div>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500">Technology used</div>
              <div className="mt-2 text-base font-semibold text-stone-900">{Array.isArray(analysis.projectDNA?.technologies) ? analysis.projectDNA.technologies.join(', ') : analysis.projectDNA?.technologies || 'Not specified'}</div>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500">Target Users</div>
              <div className="mt-2 text-base font-semibold text-stone-900">{Array.isArray(analysis.projectDNA?.targetUsers) ? analysis.projectDNA.targetUsers.join(', ') : analysis.projectDNA?.targetUsers || 'Not specified'}</div>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500">Current stage of the project</div>
              <div className="mt-2 text-base font-semibold text-stone-900">{analysis.projectDNA?.stage || 'Not specified'}</div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {scoreList.map((item) => (
              <div key={item.label} className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-lg font-semibold text-stone-900">{item.label}</span>
                  <span className="text-xl font-black text-violet-700">{item.value}</span>
                </div>
                <div className="mb-3 h-2.5 rounded-full bg-stone-200">
                  <div className="h-2.5 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#6d28d9]" style={{ width: `${item.value}%` }} />
                </div>
                <p className="text-sm text-stone-600">Reason: {item.reason}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 glass-card rounded-3xl border border-stone-200 p-6 md:p-8">
          <div className="mb-6 flex items-center gap-2 text-violet-700">
            <Sparkles className="h-5 w-5" />
            <h2 className="text-2xl font-bold text-stone-900">PROJECT DNA</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {Object.entries(analysis.projectDNA).map(([key, value]) => (
              <div key={key} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-stone-500">{key}</div>
                <div className="mt-2 text-base font-semibold text-stone-900">
                  {Array.isArray(value) ? value.join(', ') : value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
