import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin } from "lucide-react";
export default function Hero({ resume, avatar }) {
  return (
    <div>
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center min-h-[90vh] px-6 pt-32">
        {/* <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}> */}
        <motion.div initial={{ opacity: 0, y: 90 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}>
          <p className="text-sm text-indigo-300 mb-2">Hello — I’m</p>
          <h1 className="text-5xl font-bold text-white mb-3">Mohamed Rhziza</h1>
          <h2 className="text-lg text-indigo-200 mb-4 font-medium">Full Stack Engineer (Java • Spring • Angular • React • Vue)</h2>
          <p className="text-indigo-200 text-base mt-3">I design and develop modern websites for businesses and entrepreneurs worldwide.</p>

          <p className="text-slate-400 mb-8 max-w-lg leading-relaxed">
            I’m a full stack engineer specializing in building high-quality web applications with a focus on clean architecture and delightful user experiences.
          </p>
          <div className="flex gap-3">
            <a href={resume} download className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition">
              <Download size={16} /> Download CV
            </a>
            <a href="#contact" className="border border-white/20 text-slate-200 hover:bg-white/10 px-5 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition">
              <Mail size={16} /> Contact
            </a>
          </div>

          <div className="flex items-center gap-5 text-slate-400 mt-8">
            <a href="https://github.com/Medrhz" target="_blank" rel="noreferrer" className="hover:text-white">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mohamed-rhziza-531892257/" target="_blank" rel="noreferrer" className="hover:text-white">
              <Linkedin size={20} />
            </a>
            <span className="hover:text-white text-sm">mohamed.rhziza@gmail.com</span>
          </div>
        </motion.div>

        {/* الصورة */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-b from-blue-500/40 to-purple-500/20 blur-[60px] opacity-30"></div>

            <img src={avatar} alt="Mohamed Rhziza" className="relative w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-white/10 shadow-xl object-cover" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
