import { motion } from "framer-motion";

export default function Tool({ tool, i }) {
  const Icon = tool.icon;
  return (
    <motion.div
      key={i}
      initial={{ y: -100, opacity: 0, rotate: -5 }}
      whileInView={{ y: 0, opacity: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 10,
        delay: i * 0.15,
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.1,
        y: -5,
        boxShadow: "0 10px 25px rgba(147,51,234,0.4)",
      }}
      className="relative flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-xl p-5 text-center cursor-pointer hover:bg-white/10 transition-all duration-300">
      {/* تأثير الضوء عند “الهبوط” */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: [0, 1.3, 1], opacity: [0, 1, 0.4] }}
        transition={{ delay: 0.2 + i * 0.15, duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-2xl"></motion.div>
      <Icon size={28} className="text-indigo-400 mb-4 z-10 drop-shadow-[0_0_6px_rgba(99,102,241,0.6)]" />
      <p className="text-sm text-slate-300 font-medium z-10">{tool.label}</p>
    </motion.div>
  );
}
