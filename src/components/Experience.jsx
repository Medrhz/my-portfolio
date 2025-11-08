import { motion } from "framer-motion";
import EductionSection from "./EductionSection";

function Experience() {
  // const experienceData = [
  //   {
  //     title: "Enseignant d’informatique & Robotique",
  //     place: "Institut Al Wafaa, Salé — 2024 – 2025",
  //     desc: "Préparation et animation des cours d’informatique, initiation à la robotique éducative et élaboration de supports pédagogiques adaptés.",
  //   },
  //   {
  //     title: "Développeur Web Full-Stack Freelance",
  //     place: "Auto-formation & Réalisations réelles — Depuis 2023",
  //     desc: "Réalisation de projets personnalisés : conception front-end & back-end, intégration d’APIs, e-commerce, et dashboards interactifs.",
  //   },
  //   {
  //     title: "Enseignant en Développement Informatique",
  //     place: "Institut Polyvalence, Salé — Depuis 2023",
  //     desc: "Enseignement des langages : C, Java, Python, PHP, SQL, HTML/CSS/JS. Projets collaboratifs et supports pédagogiques interactifs.",
  //   },
  //   {
  //     title: "Création de sites e-commerce (Freelancer)",
  //     place: "Salé — 2022 – 2023",
  //     desc: "Développement de boutiques en ligne via CMS, intégration de paiements simulés, et personnalisation UX.",
  //   },
  // ];

  // const educationData = [
  //   { title: "Cycle Ingénieur d’État — Développement Informatique", place: "ISMAGI, Rabat — Depuis 2024" },
  //   { title: "Licence Professionnelle — Développement Web & Mobile", place: "ISMAGI, Rabat — 2023 – 2024" },
  //   { title: "Technicien Spécialisé en Développement Informatique", place: "Pro-Systems, Rabat — 2021 – 2023" },
  //   { title: "Technicien en Contrôle Qualité Automobile", place: "ISMA, Salé — 2017 – 2019" },
  // ];

  const experienceData = [
    {
      title: "Computer Science & Robotics Instructor",
      place: "Al Wafaa Institute, Salé — 2024 – 2025",
      desc: "Prepared and delivered computer science courses, introduced students to educational robotics, and created customized teaching materials.",
    },
    {
      title: "Programming Instructor",
      place: "Polyvalence Institute, Salé — Since 2023",
      desc: "Taught programming languages such as C, Java, Python, PHP, SQL, HTML, CSS, and JavaScript. Led collaborative projects and created interactive teaching resources.",
    },
    {
      title: "Full-Stack Web Developer (Freelance)",
      place: "Self-taught & Real-world Projects — Since 2023",
      desc: "Developed custom web solutions including front-end and back-end design, API integrations, e-commerce platforms, and interactive dashboards.",
    },

    {
      title: "Freelance E-commerce Developer",
      place: "Salé — 2022 – 2023",
      desc: "Built online stores using CMS platforms, integrated simulated payment systems, and customized user experiences.",
    },
  ];
  const educationData = [
    { title: "Engineering Cycle — Software Development", place: "ISMAGI, Rabat — Since 2024" },
    { title: "Professional Bachelor's Degree — Web & Mobile Development", place: "ISMAGI, Rabat — 2023 – 2024" },
    { title: "Advanced Technician Diploma — Software Development", place: "Pro-Systems, Rabat — 2021 – 2023" },
    { title: "Technician Diploma — Automotive Quality Control", place: "ISMA, Salé — 2017 – 2019" },
  ];

  return (
    <section id="experience" className="py-28 bg-[#0f172a]/80 backdrop-blur-md border-t border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-12 text-center text-indigo-200">Experience & Education</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* EXPERIENCE SIDE */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-indigo-300 flex items-center gap-2">💼 Professional Experience</h3>

            <div className="relative pl-6 border-l border-indigo-500/30 space-y-8">
              {experienceData.map((exp, i) => (
                <div key={i} className="relative">
                  {/* النقطة: تظهر كلها مرة وحدة */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6, boxShadow: "0 0 0 rgba(0,0,0,0)" }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.5 }} // نفس delay لكل النقاط
                    viewport={{ once: true }}
                    className="absolute -left-[30px] top-1 w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_10px_rgba(147,51,234,0.6)]"></motion.div>
                  {/* النصوص: يظهرو وحدة بوحدة كل 0.5s */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 + i * 0.6 }} viewport={{ once: true }} className="pl-6">
                    <h4 className="font-medium text-white">{exp.title}</h4>
                    <p className="text-sm text-indigo-200">{exp.place}</p>
                    <p className="text-sm text-slate-400 mt-2">{exp.desc}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION SIDE */}
          <EductionSection educationData={educationData} />
        </div>
      </div>
    </section>
  );
}

// function Experience() {
//   return (
//     <div>
//       {/* EXPERIENCE & EDUCATION SECTION */}
//       <section id="experience" className="py-28 bg-[#0f172a]/80 backdrop-blur-md border-t border-white/10 text-white">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-3xl font-semibold mb-12 text-center text-indigo-200">Experience & Education</h2>

//           <div className="grid md:grid-cols-2 gap-10">
//             {/* EXPERIENCE SIDE */}
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300">
//               <h3 className="text-xl font-semibold mb-6 text-indigo-300 flex items-center gap-2">💼 Professional Experience</h3>

//               <div className="relative pl-6 border-l border-indigo-500/30 space-y-8">
//                 <div>
//                   <h4 className="font-medium text-white">Enseignant d’informatique & Robotique</h4>
//                   <p className="text-sm text-indigo-200">Institut Al Wafaa, Salé — 2024 – 2025</p>
//                   <p className="text-sm text-slate-400 mt-2">Préparation et animation des cours d’informatique, initiation à la robotique éducative et élaboration de supports pédagogiques adaptés.</p>
//                 </div>

//                 <div>
//                   <h4 className="font-medium text-white">Développeur Web Full-Stack Freelance</h4>
//                   <p className="text-sm text-indigo-200">Auto-formation & Réalisations réelles — Depuis 2023</p>
//                   <p className="text-sm text-slate-400 mt-2">
//                     Réalisation de projets personnalisés pour des clients : conception complète front-end et back-end, intégration d’APIs, e-commerce, et dashboards interactifs.
//                   </p>
//                 </div>

//                 <div>
//                   <h4 className="font-medium text-white">Enseignant en Développement Informatique</h4>
//                   <p className="text-sm text-indigo-200">Institut Polyvalence, Salé — Depuis 2023</p>
//                   <p className="text-sm text-slate-400 mt-2">
//                     Enseignement des langages et frameworks : <span className="text-indigo-300 font-medium">C, Java, Python, PHP, SQL, HTML/CSS/JS</span>. Mise en place de projets collaboratifs et
//                     supports pédagogiques interactifs.
//                   </p>
//                 </div>

//                 <div>
//                   <h4 className="font-medium text-white">Création de sites e-commerce (Freelancer)</h4>
//                   <p className="text-sm text-indigo-200">Salé — 2022 – 2023</p>
//                   <p className="text-sm text-slate-400 mt-2">
//                     Développement de boutiques en ligne via CMS, intégration de systèmes de paiement simulés, et personnalisation d’expériences utilisateur.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* EDUCATION SIDE */}
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(147,51,234,0.2)] transition-all duration-300">
//               <h3 className="text-xl font-semibold mb-6 text-indigo-300 flex items-center gap-2">🎓 Academic Background</h3>

//               <div className="relative pl-6 border-l border-purple-500/30 space-y-8">
//                 <div>
//                   <h4 className="font-medium text-white">Cycle Ingénieur d’État — Développement Informatique</h4>
//                   <p className="text-sm text-indigo-200">ISMAGI, Rabat — Depuis 2024</p>
//                 </div>

//                 <div>
//                   <h4 className="font-medium text-white">Licence Professionnelle — Développement Web & Mobile</h4>
//                   <p className="text-sm text-indigo-200">ISMAGI, Rabat — 2023 – 2024</p>
//                 </div>

//                 <div>
//                   <h4 className="font-medium text-white">Technicien Spécialisé en Développement Informatique</h4>
//                   <p className="text-sm text-indigo-200">Pro-Systems, Rabat — 2021 – 2023</p>
//                 </div>

//                 <div>
//                   <h4 className="font-medium text-white">Technicien en Contrôle Qualité Automobile</h4>
//                   <p className="text-sm text-indigo-200">ISMA, Salé — 2017 – 2019</p>
//                 </div>

//                 <div>
//                   <h4 className="font-medium text-white">Formations Complémentaires</h4>
//                   <ul className="text-sm text-slate-400 mt-2 space-y-2">
//                     <li>✅ Formation Full-Stack — Centre MAHARATE, Rabat (2022 – 2023)</li>
//                     <li>✅ Responsive Web Design — freeCodeCamp (2022)</li>
//                     <li>✅ Composants de l’ordinateur — Plateforme EDRAAK (2022)</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

{
  /* <section id="experience" className="py-28 bg-[#0f172a]/80 backdrop-blur-md border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="glass p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-6 text-indigo-200 flex items-center gap-2">
              <Briefcase size={18} /> Experience
            </h3>
            <div className="space-y-6 border-l border-indigo-600/40 pl-6">
              <div>
                <h4 className="font-medium text-white">Senior Developer</h4>
                <p className="text-sm text-slate-400">2023 — Present</p>
                <p className="text-sm text-slate-400 mt-2">Working with Spring Boot and React on scalable platforms.</p>
              </div>
              <div>
                <h4 className="font-medium text-white">Web Developer</h4>
                <p className="text-sm text-slate-400">2021 — 2023</p>
                <p className="text-sm text-slate-400 mt-2">Built interactive dashboards and APIs for analytics tools.</p>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-6 text-indigo-200 flex items-center gap-2">
              <GraduationCap size={18} /> Education
            </h3>
            <div className="space-y-6 border-l border-indigo-600/40 pl-6">
              <div>
                <h4 className="font-medium text-white">Bachelor in Computer Science</h4>
                <p className="text-sm text-slate-400">2018 — 2022</p>
                <p className="text-sm text-slate-400 mt-2">Focused on software engineering & data systems.</p>
              </div>
              <div>
                <h4 className="font-medium text-white">High School – Math & Science</h4>
                <p className="text-sm text-slate-400">2016 — 2018</p>
                <p className="text-sm text-slate-400 mt-2">Developed analytical and teamwork skills.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */
}

export default Experience;
