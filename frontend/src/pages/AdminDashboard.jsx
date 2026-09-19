import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';

const categoryData = [
  { name: 'Agriculture', value: 4 },
  { name: 'Education', value: 3 },
  { name: 'Healthcare', value: 2 },
  { name: 'Smart Cities', value: 1 },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#f5f1ea] text-stone-800">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Admin Dashboard</p>
          <h1 className="mt-2 text-4xl font-black text-stone-900">Platform oversight and operations</h1>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <StatCard title="Total Users" value="24" subtitle="Across all roles" accent="cyan" />
          <StatCard title="Total Projects" value="10" subtitle="8 active" accent="purple" />
          <StatCard title="Inactive Projects" value="02" subtitle="Need revival" accent="amber" />
          <StatCard title="Requests" value="15" subtitle="Live" accent="green" />
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <div className="glass-card rounded-3xl border border-stone-200 p-6">
            <h2 className="text-xl font-bold text-stone-900">Projects by Category</h2>
            <div className="mt-6 space-y-4">
              {categoryData.map((item) => (
                <div key={item.name}>
                  <div className="mb-1 flex justify-between text-sm text-stone-600"><span>{item.name}</span><span>{item.value}</span></div>
                  <div className="h-2.5 rounded-full bg-stone-200"><div className="h-2.5 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#6d28d9]" style={{ width: `${item.value * 25}%` }} /></div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl border border-stone-200 p-6">
            <h2 className="text-xl font-bold text-stone-900">Admin Actions</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {['Verify projects', 'Verify mentors', 'Verify organizations', 'Manage users', 'View requests', 'Feature projects'].map((action) => (
                <button key={action} className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-left text-sm text-stone-700">{action}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
