export default function StatCard({ title, value, subtitle, accent = 'cyan' }) {
  const colorMap = {
    cyan: 'bg-white/80 text-stone-800 border-stone-200 shadow-[0_8px_24px_rgba(0,0,0,0.03)]',
    purple: 'bg-white/80 text-stone-800 border-stone-200 shadow-[0_8px_24px_rgba(0,0,0,0.03)]',
    green: 'bg-white/80 text-stone-800 border-stone-200 shadow-[0_8px_24px_rgba(0,0,0,0.03)]',
    amber: 'bg-white/80 text-stone-800 border-stone-200 shadow-[0_8px_24px_rgba(0,0,0,0.03)]',
  };

  return (
    <div className={`rounded-2xl border p-5 ${colorMap[accent]}`}>
      <p className="text-sm font-medium text-stone-500">{title}</p>
      <div className="mt-3 text-3xl font-black tracking-tight text-stone-900">{value}</div>
      {subtitle && <p className="mt-2 text-xs text-stone-500">{subtitle}</p>}
    </div>
  );
}
