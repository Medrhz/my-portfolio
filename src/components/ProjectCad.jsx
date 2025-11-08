import { motion } from "framer-motion";
export default function ProjectCad({ project, index }) {
  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition">
      <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-sm text-slate-400 mb-4">{project.desc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t, index) => (
          <span key={t} className="px-2 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-200 font-medium">
            {t}
          </span>
        ))}
      </div>
      <div className="flex justify-between text-sm text-indigo-400">
        <a href="#">🔗 Repo</a>
        <a href="#">🚀 Live Demo</a>
      </div>
      {/* </div> */}
    </motion.div>
  );
}
