export default function BackLighit() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[160px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[160px]" />
    </div>
  );
}
