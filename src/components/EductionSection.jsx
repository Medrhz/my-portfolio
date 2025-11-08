import React from "react";
import { motion } from "framer-motion";
import { Code2, Laptop, Layers } from "lucide-react";
export default function EductionSection({ educationData }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(147,51,234,0.2)] transition-all duration-300">
      <h3 className="text-xl font-semibold mb-6 text-indigo-300 flex items-center gap-2">🎓 Academic Background</h3>

      <div className="relative pl-6 border-l border-purple-500/30 space-y-8">
        {educationData.map((edu, i) => (
          <div key={i} className="relative">
            {/* Animated Point */}

            <motion.div
              initial={{ opacity: 0, scale: 0.6, boxShadow: "0 0 0 rgba(0,0,0,0)" }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: i * 0.5, // كل نقطة كتتشعل ب delay
              }}
              viewport={{ once: true }}
              animate={{
                boxShadow: ["0 0 0 rgba(99,102,241,0)", "0 0 12px rgba(99,102,241,0.6)", "0 0 20px rgba(147,51,234,0.8)"],
              }}
              className="absolute -left-[30px] top-1 w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></motion.div>
            {/* Content */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 + i * 0.5 }} viewport={{ once: true }} className="pl-6">
              <div className="pl-6">
                <h4 className="font-medium text-white">{edu.title}</h4>
                <p className="text-sm text-indigo-200">{edu.place}</p>
              </div>
            </motion.div>
          </div>
        ))}

        {/* BONUS: Formations complémentaires */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 2.5 }} viewport={{ once: true }} className="pl-6">
          {/* <div className="pl-6 mt-8"> */}
          {/* <h4 className="font-medium text-white">Formations Complémentaires</h4>
          <ul className="text-sm text-slate-400 mt-2 space-y-2">
            <li>✅ Formation Full-Stack — Centre MAHARATE, Rabat (2022 – 2023)</li>
            <li>✅ Responsive Web Design — freeCodeCamp (2022)</li>
            <li>✅ Composants de l’ordinateur — Plateforme EDRAAK (2022)</li>
          </ul> */}
          <h4 className="font-medium text-white">Additional Training</h4>
          <ul className="text-sm text-slate-400 mt-4 space-y-3">
            <li className="flex items-center gap-3">
              <Code2 className="text-indigo-400" size={16} />
              <span>
                <span className="text-white font-medium">Full-Stack Development</span> — MAHARATE Center, Rabat
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Layers className="text-indigo-400" size={16} />
              <span>
                <span className="text-white font-medium">JavaScript Algorithms & Data Structures</span> — freeCodeCamp
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Laptop className="text-indigo-400" size={16} />
              <span>
                <span className="text-white font-medium">Responsive Web Design</span> — freeCodeCamp
              </span>
            </li>
          </ul>
          {/* </div> */}
        </motion.div>
      </div>
    </div>
  );
}
