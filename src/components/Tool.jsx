export default function Tool({ tool }) {
  const Icon = tool.icon;

  return (
    <div className="flex min-h-[110px] min-w-0 flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center transition-colors duration-200 hover:border-indigo-400/30 hover:bg-white/10 motion-reduce:transition-none">
      <Icon size={28} strokeWidth={2} aria-hidden="true" className="shrink-0 text-indigo-400" />
      <p className="w-full break-words text-sm leading-snug text-slate-300 font-medium">{tool.label}</p>
    </div>
  );
}
