import { motion } from "framer-motion";
export default function SolutionCard({ item, i }) {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: i * 0.15,
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
      }}
      className="relative animated-border rounded-2xl p-6 flex flex-col items-center text-center bg-white/5 hover:bg-white/10 transition-all duration-300">
      <div className="mb-4 relative z-10 drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]">{item.icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-indigo-100 relative z-10">{item.title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed relative z-10">{item.desc}</p>
    </motion.div>
  );
}
