import { motion } from "framer-motion";
export default function TechnicCard({ skill, i }) {
  const Icon = skill.icon;
  return (
    <motion.div key={i} initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 3, ease: "easeOut" }} viewport={{ once: true }}>
      <div key={i} className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/5 rounded-md border border-white/10">
              <Icon className="text-indigo-400" size={18} />
            </div>
            <span className="text-slate-200 text-sm font-medium">{skill.name}</span>
          </div>
          <span className="text-sm text-slate-400">{skill.level}%</span>
        </div>

        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-700" style={{ width: `${skill.level}%` }}></div>
        </div>
      </div>
    </motion.div>
  );
}
