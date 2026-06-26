import { motion } from "framer-motion";
import {
  BarChart3,
  BriefcaseBusiness,
  CheckSquare,
  Database,
  FileText,
  Gauge,
  Github,
  GitBranch,
  LayoutDashboard,
  Network,
  Sparkles,
  Users,
} from "lucide-react";

// const REPORT_URL = "/Rapport%20PFE.pdf";
const REPORT_URL = "/";
const SOURCE_URL = "PUT_GITHUB_LINK_HERE";

const technologies = [
  "Java 21",
  "Spring Boot 3",
  "Spring Security",
  "JWT",
  "PostgreSQL",
  "Eureka",
  "Spring Cloud Gateway",
  "OpenFeign",
  "React",
  "TypeScript",
  "Material UI",
  "Docker",
];

const features = [
  {
    title: "Gestion des Projets",
    desc: "Création, suivi et pilotage des projets.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Gestion des Tâches",
    desc: "Organisation, affectation et mise à jour des tâches.",
    icon: CheckSquare,
  },
  {
    title: "Gestion des Ressources",
    desc: "Gestion des compétences et disponibilités.",
    icon: Users,
  },
  {
    title: "Suivi de Charge",
    desc: "Détection des ressources sous-chargées ou surchargées.",
    icon: Gauge,
  },
  {
    title: "Assistant d’Affectation",
    desc: "Recommandation de ressources selon skills, disponibilité et workload.",
    icon: Sparkles,
  },
  {
    title: "Dashboard Décisionnel",
    desc: "Visualisation des KPIs et statistiques du projet.",
    icon: LayoutDashboard,
  },
];

const flow = [
  { label: "Frontend React", icon: LayoutDashboard },
  { label: "API Gateway", icon: Network },
  { label: "Microservices", icon: GitBranch },
  { label: "PostgreSQL", icon: Database },
];

const services = [
  "Auth Service",
  "User Service",
  "Project Service",
  "Task Service",
  "Resource Service",
  "Workload Service",
  "Notification Service",
  "Dashboard Service",
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

export default function PFEProject() {
  return (
    <section id="pfe" className="py-28 bg-[#0f172a]/70 backdrop-blur-md border-t border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          variants={fadeUp}
          className="glass rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-[0_0_28px_rgba(99,102,241,0.22)] transition-all duration-300">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-200 text-xs font-medium mb-5">
            <FileText size={14} />
            Projet Académique - PFE Ingénieur
          </div>

          <h2 className="text-3xl font-semibold text-indigo-200 mb-4">Projet de Fin d’Études (PFE)</h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight mb-4">
            Conception et Développement d’une Plateforme de Gestion de Projets et de Ressources avec Suivi de Charge et Aide à la Planification
          </h3>

          <p className="text-sm text-indigo-200 mb-4">Auteur : Mohamed RHZIZA</p>
          <p className="text-slate-400 max-w-4xl mb-6">
            Plateforme web de gestion de projets et de ressources basée sur une architecture microservices. Elle permet la gestion des projets, des tâches, des ressources, le suivi de charge de
            travail et l’aide à la planification.
          </p>

          <div className="flex flex-wrap gap-2 mb-7">
            {technologies.map((technology) => (
              <span key={technology} className="px-3 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-200 font-medium border border-indigo-400/10">
                {technology}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* <a
              disabled
              href={REPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-full flex items-center justify-center gap-2 text-sm font-medium shadow-md hover:opacity-90 transition">
              <FileText size={16} />
              Consulter le rapport PFE
            </a> */}
            {/* <a
              href={SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-slate-200 hover:bg-white/10 px-5 py-2 rounded-full flex items-center justify-center gap-2 text-sm font-medium transition">
              <Github size={16} />
              Voir le code source
            </a> */}
          </div>
        </motion.div>

        <div>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
            className="text-2xl font-semibold text-indigo-200 mb-6">
            Fonctionnalités clés
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ title, desc, icon: Icon }, index) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300">
                <div className="w-11 h-11 rounded-full bg-indigo-500/20 text-indigo-200 flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
                <p className="text-sm text-slate-400">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          variants={fadeUp}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:shadow-[0_0_20px_rgba(147,51,234,0.18)] transition-all duration-300">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_18px_rgba(99,102,241,0.35)]">
              <BarChart3 size={20} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Architecture Microservices</h3>
              <p className="text-sm text-slate-400">Flux applicatif et services métier</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
            <div className="space-y-3">
              {flow.map(({ label, icon: Icon }, index) => (
                <div key={label}>
                  <div className="rounded-2xl bg-[#0f172a]/80 border border-white/10 px-4 py-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-indigo-500/20 text-indigo-200 flex items-center justify-center">
                      <Icon size={18} />
                    </div>
                    <span className="text-sm font-medium text-slate-200">{label}</span>
                  </div>
                  {index < flow.length - 1 && <div className="h-5 w-px bg-indigo-500/40 mx-auto"></div>}
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-3 content-start">
              {services.map((service) => (
                <div key={service} className="rounded-2xl bg-[#0f172a]/70 border border-white/10 px-4 py-3 text-sm text-slate-300">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
