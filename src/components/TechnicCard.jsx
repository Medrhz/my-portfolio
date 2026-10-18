export default function TechnicCard({ skill }) {
  const Icon = skill.icon;

  return (
    <li className="flex min-h-[104px] lg:min-h-[140px] min-w-0 flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-slate-900/60 px-3 py-4 lg:py-6 text-center transition-colors duration-200 hover:border-indigo-400/30 hover:bg-slate-800/70 motion-reduce:transition-none">
      <Icon size={28} aria-hidden="true" className="shrink-0 text-indigo-400" />
      <span className="w-full break-words text-sm font-medium leading-snug text-slate-200">{skill.name}</span>
    </li>
  );
}
