import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, LockKeyhole, Mail, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const demoAccounts = [
  { email: 'student@afterlife.demo', role: 'STUDENT' },
  { email: 'mentor@afterlife.demo', role: 'MENTOR' },
  { email: 'industry@afterlife.demo', role: 'INDUSTRY' },
  { email: 'admin@afterlife.demo', role: 'ADMIN' },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({
    name: '',
    email: 'student@afterlife.demo',
    password: 'Demo@123',
    role: 'STUDENT',
    organization: '',
    skills: '',
    domain: '',
    location: '',
    bio: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (mode === 'login') {
      const result = await login({ email: form.email, password: form.password });
      if (!result.success) {
        setError(result.message);
        return;
      }
      navigate(result.redirect || '/student');
      return;
    }

    if (!form.name || !form.email || !form.password) {
      setError('Please complete the required fields.');
      return;
    }

    const result = await register({
      name: form.name,
      email: form.email,
      password: form.password,
      role: form.role,
      organization: form.organization,
      skills: form.skills.split(',').map((item) => item.trim()).filter(Boolean),
      domain: form.domain,
      location: form.location,
      bio: form.bio,
    });

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate(result.redirect || '/student');
  };

  return (
    <div className="min-h-screen bg-[#f5f1ea] px-4 py-12 text-stone-800">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-stone-200 bg-white/90 shadow-[0_20px_55px_rgba(28,25,23,0.06)]">
        <div className="grid min-h-[760px] md:grid-cols-2">
          <div className="relative hidden overflow-hidden bg-gradient-to-br from-violet-100 via-stone-100 to-amber-50 p-10 md:flex md:flex-col md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700">
                <Sparkles className="h-4 w-4" /> Project Afterlife
              </div>
              <h1 className="mt-8 text-4xl font-black leading-tight text-stone-900">From hackathon prototype to real-world possibility.</h1>
            </div>
            <div className="rounded-3xl border border-stone-200 bg-white/80 p-6 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Demo accounts</p>
              <div className="mt-6 space-y-3">
                {demoAccounts.map((account) => (
                  <button
                    key={account.email}
                    type="button"
                    onClick={() => setForm((prev) => ({ ...prev, email: account.email, role: account.role, password: 'Demo@123' }))}
                    className="flex w-full items-center justify-between rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-left text-sm"
                  >
                    <div>
                      <div className="font-medium text-stone-900">{account.email}</div>
                      <div className="text-stone-500">{account.role}</div>
                    </div>
                    <div className="text-violet-700">Use</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center p-8 md:p-12">
            <div className="w-full max-w-md">
              <div className="mb-8 flex rounded-full border border-stone-200 bg-stone-100 p-1 text-sm">
                <button type="button" onClick={() => setMode('login')} className={`flex-1 rounded-full px-3 py-2 ${mode === 'login' ? 'bg-gradient-to-r from-[#4f46e5] to-[#6d28d9] text-white' : 'text-stone-600'}`}>
                  Login
                </button>
                <button type="button" onClick={() => setMode('register')} className={`flex-1 rounded-full px-3 py-2 ${mode === 'register' ? 'bg-gradient-to-r from-[#4f46e5] to-[#6d28d9] text-white' : 'text-stone-600'}`}>
                  Register
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === 'register' && (
                  <div className="space-y-4">
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3" />
                    <select name="role" value={form.role} onChange={handleChange} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3">
                      <option value="STUDENT">Student</option>
                      <option value="MENTOR">Mentor</option>
                      <option value="INDUSTRY">Industry</option>
                      <option value="ADMIN">Admin</option>
                    </select>
                    <input name="organization" value={form.organization} onChange={handleChange} placeholder="Organization" className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3" />
                    <input name="skills" value={form.skills} onChange={handleChange} placeholder="Skills (comma separated)" className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3" />
                    <input name="domain" value={form.domain} onChange={handleChange} placeholder="Domain" className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3" />
                    <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3" />
                    <textarea name="bio" value={form.bio} onChange={handleChange} rows={3} placeholder="Bio" className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3" />
                  </div>
                )}

                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm text-stone-600"><Mail className="h-4 w-4" /> Email</span>
                  <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3" />
                </label>

                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm text-stone-600"><LockKeyhole className="h-4 w-4" /> Password</span>
                  <div className="relative">
                    <input type={showPassword ? 'text' : 'password'} name="password" value={form.password} onChange={handleChange} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 pr-12" />
                    <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500">
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </label>

                {error && <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</div>}

                <button type="submit" className="w-full rounded-2xl bg-gradient-to-r from-[#4f46e5] to-[#6d28d9] px-4 py-3 font-semibold text-white">
                  {mode === 'login' ? 'Login' : 'Create account'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
