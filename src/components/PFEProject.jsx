import { useEffect } from "react";
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
  Lightbulb,
  ListChecks,
  LockKeyhole,
  Network,
  PanelsTopLeft,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const REPORT_URL = "/Rapport%20PFE.pdf";
const SOURCE_URL = "PUT_GITHUB_LINK_HERE";
const META_DESCRIPTION =
  "Plateforme de gestion de projets et de ressources avec suivi de charge et aide Ã  la planification, dÃ©veloppÃ©e avec Spring Boot, React, PostgreSQL, Docker et une architecture microservices.";

const technologies = ["Java 21", "Spring Boot 3", "Spring Security", "JWT", "PostgreSQL", "Eureka", "Spring Cloud Gateway", "OpenFeign", "React", "TypeScript", "Material UI", "Docker"];

const problems = [
  "Informations dispersÃ©es entre plusieurs outils.",
  "Suivi difficile de lâ€™avancement des projets et des tÃ¢ches.",
  "Charge de travail mal rÃ©partie entre les ressources.",
  "Affectation subjective des tÃ¢ches sans vision claire des compÃ©tences et disponibilitÃ©s.",
];

const solutionPoints = [
  "Centralisation de la gestion des projets et des tÃ¢ches.",
  "Suivi des ressources, compÃ©tences et disponibilitÃ©s.",
  "Monitoring de la charge de travail pour dÃ©tecter les surcharges.",
  "Aide Ã  la dÃ©cision pour amÃ©liorer la planification et lâ€™affectation.",
];

const features = [
  {
    title: "Gestion des Projets",
    desc: "CrÃ©ation, suivi et pilotage des projets.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Gestion des TÃ¢ches",
    desc: "Organisation, affectation et mise Ã  jour des tÃ¢ches.",
    icon: CheckSquare,
  },
  {
    title: "Gestion des Ressources",
    desc: "Gestion des compÃ©tences et disponibilitÃ©s.",
    icon: Users,
  },
  {
    title: "Suivi de Charge",
    desc: "DÃ©tection des ressources sous-chargÃ©es ou surchargÃ©es.",
    icon: Gauge,
  },
  {
    title: "Assistant dâ€™Affectation",
    desc: "Recommandation selon les skills, la disponibilitÃ© et le workload.",
    icon: Sparkles,
  },
  {
    title: "Dashboard DÃ©cisionnel",
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

const services = ["Auth Service", "User Service", "Project Service", "Task Service", "Resource Service", "Workload Service", "Notification Service", "Dashboard Service"];

const previews = [
  { title: "Login", desc: "Authentification sÃ©curisÃ©e et accÃ¨s par rÃ´le.", icon: LockKeyhole },
  { title: "Dashboard", desc: "Vue synthÃ©tique des indicateurs projet.", icon: LayoutDashboard },
  { title: "Projects", desc: "Pilotage des projets et de leur progression.", icon: BriefcaseBusiness },
  { title: "Tasks", desc: "Organisation et mise Ã  jour des tÃ¢ches.", icon: ListChecks },
  { title: "Workload", desc: "Suivi des charges et disponibilitÃ© des ressources.", icon: Gauge },
  { title: "Recommendation", desc: "Aide Ã  lâ€™affectation selon les contraintes mÃ©tier.", icon: Sparkles },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({ id, eyebrow, title, description }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }} variants={fadeUp} className="mb-6">
      {eyebrow && <p className="text-sm text-indigo-300 mb-2">{eyebrow}</p>}
      <h2 id={id} className="text-2xl md:text-3xl font-semibold text-indigo-200">
        {title}
      </h2>
      {description && <p className="text-sm text-slate-400 max-w-3xl mt-3">{description}</p>}
    </motion.div>
  );
}

export default function PFEProject() {
  useEffect(() => {
    document.title = "Projet PFE - Mohamed RHZIZA";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", META_DESCRIPTION);
  }, []);

  return (
    <main className="pt-28 pb-20 bg-[#0f172a]/70 backdrop-blur-md text-white">
      <section className="max-w-6xl mx-auto px-6 space-y-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          variants={fadeUp}
          className="glass rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-[0_0_28px_rgba(99,102,241,0.22)] transition-all duration-300">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-200 text-xs font-medium mb-5">
            <FileText size={14} aria-hidden="true" />
            Projet AcadÃ©mique - PFE IngÃ©nieur
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Conception et DÃ©veloppement dâ€™une Plateforme de Gestion de Projets et de Ressources avec Suivi de Charge et Aide Ã  la Planification
          </h1>

          <p className="text-sm text-indigo-200 mb-4">Auteur : Mohamed RHZIZA</p>
          <p className="text-slate-400 max-w-4xl mb-6">
            Plateforme web de gestion de projets et de ressources basÃ©e sur une architecture microservices. Elle permet la gestion des projets, des tÃ¢ches, des ressources, le suivi de charge de
            travail et lâ€™aide Ã  la planification.
          </p>

          <div className="flex flex-wrap gap-2 mb-7">
            {technologies.map((technology) => (
              <span key={technology} className="px-3 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-200 font-medium border border-indigo-400/10">
                {technology}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={REPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-full flex items-center justify-center gap-2 text-sm font-medium shadow-md hover:opacity-90 transition">
              <FileText size={16} aria-hidden="true" />
              Consulter le rapport PFE
            </a>
            {/* <a
              href={SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-slate-200 hover:bg-white/10 px-5 py-2 rounded-full flex items-center justify-center gap-2 text-sm font-medium transition">
              <Github size={16} aria-hidden="true" />
              Voir le code source
            </a> */}
          </div>
        </motion.div>

        <section aria-labelledby="pfe-problem">
          <SectionHeading
            eyebrow="Contexte"
            title="ProblÃ©matique"
            description="Le projet rÃ©pond aux limites rencontrÃ©es dans la coordination des projets, des Ã©quipes et des charges de travail."
          />
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <motion.div
                key={problem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                variants={fadeUp}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:shadow-[0_0_20px_rgba(99,102,241,0.18)] transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-9 h-9 shrink-0 rounded-full bg-indigo-500/20 text-indigo-200 flex items-center justify-center">
                    <Target size={18} aria-hidden="true" />
                  </div>
                  <p className="text-sm text-slate-400">{problem}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section aria-labelledby="pfe-solution">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            variants={fadeUp}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:shadow-[0_0_20px_rgba(147,51,234,0.2)] transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-indigo-500/20 text-indigo-200 flex items-center justify-center">
                <Lightbulb size={20} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm text-indigo-300">Approche</p>
                <h2 id="pfe-solution" className="text-2xl font-semibold text-white">
                  Solution proposÃ©e
                </h2>
              </div>
            </div>

            <p className="text-slate-400 max-w-4xl mb-6">
              La plateforme centralise la gestion des projets, des tÃ¢ches, lâ€™allocation des ressources, le suivi de charge et lâ€™aide Ã  la dÃ©cision afin de rendre la planification plus claire,
              mesurable et collaborative.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {solutionPoints.map((point) => (
                <div key={point} className="rounded-2xl bg-[#0f172a]/70 border border-white/10 px-4 py-3 text-sm text-slate-300">
                  {point}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section aria-labelledby="pfe-features">
          <SectionHeading eyebrow="Fonctionnel" title="FonctionnalitÃ©s clÃ©s" description="Les modules principaux couvrent le cycle de vie du projet, des tÃ¢ches et des ressources." />
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
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-400">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section aria-labelledby="pfe-architecture">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            variants={fadeUp}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:shadow-[0_0_20px_rgba(147,51,234,0.18)] transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_18px_rgba(99,102,241,0.35)]">
                <BarChart3 size={20} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm text-indigo-300">Technique</p>
                <h2 id="pfe-architecture" className="text-2xl font-semibold text-white">
                  Architecture technique
                </h2>
                <p className="text-sm text-slate-400">Frontend React â†’ API Gateway â†’ Microservices â†’ PostgreSQL</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
              <div className="space-y-3">
                {flow.map(({ label, icon: Icon }, index) => (
                  <div key={label}>
                    <div className="rounded-2xl bg-[#0f172a]/80 border border-white/10 px-4 py-4 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-indigo-500/20 text-indigo-200 flex items-center justify-center">
                        <Icon size={18} aria-hidden="true" />
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
        </section>

        <section aria-labelledby="pfe-preview">
          <SectionHeading eyebrow="RÃ©alisation" title="Implementation Preview" description="AperÃ§u des principales interfaces prÃ©vues pour prÃ©senter la rÃ©alisation du projet." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previews.map(({ title, desc, icon: Icon }, index) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="relative min-h-52 overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/80 p-5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-purple-600/20"></div>
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-indigo-200 mb-2">Interface</p>
                      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                      <p className="text-sm text-slate-400">{desc}</p>
                    </div>
                    <div className="w-10 h-10 shrink-0 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-indigo-200">
                      <Icon size={18} aria-hidden="true" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-8" aria-label={`${title} interface placeholder`}>
                    <span className="h-14 rounded-xl bg-white/10 border border-white/10"></span>
                    <span className="h-14 rounded-xl bg-indigo-500/20 border border-indigo-400/10"></span>
                    <span className="h-14 rounded-xl bg-white/10 border border-white/10"></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section aria-labelledby="pfe-report">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            variants={fadeUp}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5 hover:shadow-[0_0_20px_rgba(147,51,234,0.2)] transition-all duration-300">
            <div>
              <p className="text-sm text-indigo-300 mb-2">Document acadÃ©mique</p>
              <h2 id="pfe-report" className="text-2xl font-semibold text-white mb-3">
                Rapport AcadÃ©mique
              </h2>
              <p className="text-sm text-slate-400 max-w-3xl">
                Consulter le rapport complet du projet comprenant lâ€™analyse, la conception, lâ€™architecture, la rÃ©alisation et les tests de validation.
              </p>
            </div>
            <a
              href={REPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-full flex items-center justify-center gap-2 text-sm font-medium shadow-md hover:opacity-90 transition whitespace-nowrap">
              <FileText size={16} aria-hidden="true" />
              Consulter le rapport PFE
            </a>
          </motion.div>
        </section>
      </section>
    </main>
  );
}
