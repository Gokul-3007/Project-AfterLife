import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import api from '../services/api';

const initialState = {
  title: 'AI Crop Disease Detection',
  problemStatement: 'Farmers struggle to detect crop diseases before it damages entire fields.',
  solution: 'Our platform uses computer vision to identify diseases from mobile images and recommend next actions.',
  category: 'Agriculture',
  tags: 'AI, Agriculture, Computer Vision',
  technologies: 'Python, React, TensorFlow, MongoDB',
  stage: 'Prototype',
  githubUrl: 'https://github.com/demo/crop-disease',
  demoUrl: 'https://demo.example/crop-disease',
  videoUrl: '',
  requirements: 'Technical Mentor, Dataset, Pilot Testing',
  team: 'Aarav Sharma, Priya Rao, Nikhil Sen',
};

export default function ProjectSubmissionPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        tags: form.tags.split(',').map((item) => item.trim()).filter(Boolean),
        technologies: form.technologies.split(',').map((item) => item.trim()).filter(Boolean),
        requirements: form.requirements.split(',').map((item) => item.trim()).filter(Boolean),
        team: form.team.split(',').map((item) => item.trim()).filter(Boolean),
        owner: 'student-user',
      };

      const response = await api.post('/projects', payload);
      const submittedProjectId = response.data?.project?.id;
      if (submittedProjectId) {
        localStorage.setItem('afterlife-last-project-id', submittedProjectId);
      }
      setMessage(response.data.message || 'Project submitted successfully.');
      setError('');
      setTimeout(() => navigate('/ai-analysis'), 800);
    } catch (err) {
      setError(err.response?.data?.message || 'Submission failed');
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-stone-800">
      <Navbar />
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-violet-700">Project Submission</p>
          <h1 className="mt-3 text-4xl font-black text-stone-900">Submit your idea to begin the revival journey</h1>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-3xl border border-stone-200 bg-white/80 p-6 md:p-8 shadow-[0_20px_50px_rgba(28,25,23,0.06)]">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="md:col-span-2">
              <span className="mb-2 block text-sm text-stone-600">Project Title</span>
              <input name="title" value={form.title} onChange={handleChange} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none ring-0" />
            </label>
            <label className="md:col-span-2">
              <span className="mb-2 block text-sm text-stone-600">Problem Statement</span>
              <textarea name="problemStatement" value={form.problemStatement} onChange={handleChange} rows={3} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none ring-0" />
            </label>
            <label className="md:col-span-2">
              <span className="mb-2 block text-sm text-stone-600">Solution Description</span>
              <textarea name="solution" value={form.solution} onChange={handleChange} rows={3} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none ring-0" />
            </label>
            <label>
              <span className="mb-2 block text-sm text-stone-600">Category</span>
              <input name="category" value={form.category} onChange={handleChange} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none ring-0" />
            </label>
            <label>
              <span className="mb-2 block text-sm text-stone-600">Project Stage</span>
              <select name="stage" value={form.stage} onChange={handleChange} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none ring-0">
                <option>Idea</option>
                <option>Prototype</option>
                <option>MVP</option>
                <option>Pilot</option>
                <option>Deployed</option>
              </select>
            </label>
            <label className="md:col-span-2">
              <span className="mb-2 block text-sm text-stone-600">Tags</span>
              <input name="tags" value={form.tags} onChange={handleChange} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none ring-0" />
            </label>
            <label className="md:col-span-2">
              <span className="mb-2 block text-sm text-stone-600">Technologies</span>
              <input name="technologies" value={form.technologies} onChange={handleChange} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none ring-0" />
            </label>
            <label>
              <span className="mb-2 block text-sm text-stone-600">GitHub URL</span>
              <input name="githubUrl" value={form.githubUrl} onChange={handleChange} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none ring-0" />
            </label>
            <label>
              <span className="mb-2 block text-sm text-stone-600">Demo URL</span>
              <input name="demoUrl" value={form.demoUrl} onChange={handleChange} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none ring-0" />
            </label>
            <label>
              <span className="mb-2 block text-sm text-stone-600">Video URL</span>
              <input name="videoUrl" value={form.videoUrl} onChange={handleChange} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none ring-0" />
            </label>
            <label>
              <span className="mb-2 block text-sm text-stone-600">Requirements</span>
              <input name="requirements" value={form.requirements} onChange={handleChange} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none ring-0" />
            </label>
            <label className="md:col-span-2">
              <span className="mb-2 block text-sm text-stone-600">Team Members</span>
              <input name="team" value={form.team} onChange={handleChange} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none ring-0" />
            </label>
          </div>

          {message && <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-emerald-200">{message}</div>}
          {error && <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-200">{error}</div>}

          <div className="mt-8 flex justify-end gap-3">
            <button type="button" onClick={() => navigate('/student')} className="rounded-full border border-stone-200 bg-white px-5 py-3 text-stone-700">Cancel</button>
            <button type="submit" className="rounded-full bg-gradient-to-r from-[#4f46e5] to-[#6d28d9] px-5 py-3 font-semibold text-white shadow-[0_12px_20px_rgba(79,70,229,0.22)]">Submit Project</button>
          </div>
        </form>
      </div>
    </div>
  );
}
