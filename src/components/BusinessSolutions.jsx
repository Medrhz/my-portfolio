import { motion } from "framer-motion";
import { Building2, BarChart3, ShoppingBag, Briefcase, LayoutDashboard, Handshake } from "lucide-react";
import "../styles/animatedBorder.css";
import SolutionCard from "./SolutionCard";

export default function BusinessSolutions() {
  const services = [
    {
      icon: <Building2 size={40} className="text-indigo-400" />,
      title: "Business Websites",
      desc: "Custom company websites with SEO optimization and responsive design.",
    },
    {
      icon: <BarChart3 size={40} className="text-purple-400" />,
      title: "Landing Pages",
      desc: "High-converting landing pages for your campaigns and products.",
    },
    {
      icon: <ShoppingBag size={40} className="text-pink-400" />,
      title: "E-commerce Stores",
      desc: "Full online stores with payment systems, dashboards, and management tools.",
    },
    {
      icon: <Briefcase size={40} className="text-blue-400" />,
      title: "Personal Portfolios",
      desc: "Professional portfolios that make your personal brand stand out.",
    },
    {
      icon: <LayoutDashboard size={40} className="text-cyan-400" />,
      title: "Dashboards & Web Apps",
      desc: "Interactive dashboards and management apps for your business data.",
    },
    {
      icon: <Handshake size={40} className="text-emerald-400" />,
      title: "Freelance Consulting",
      desc: "Need a custom solution or web strategy? Let’s talk and make it real.",
    },
  ];

  return (
    <section id="solutions" className="relative py-28 bg-gradient-to-b from-[#0f172a]/70 to-[#1e1b4b]/80 border-t border-white/10 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-3xl font-semibold mb-6 text-indigo-200">
          Web Solutions for Businesses
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-400 max-w-2xl mx-auto mb-14">
          I help brands and startups grow by creating fast, modern, and visually stunning websites. Whether you need a portfolio, e-commerce, or a full web app — I’ll build it for you from scratch.
        </motion.p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {services.map((item, i) => (
            <SolutionCard key={i} item={item} i={i} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} viewport={{ once: true }} className="mt-14">
          <motion.a
            whileHover={{
              scale: 1.08,
              textShadow: "0px 0px 8px rgba(255,255,255,0.9)",
              boxShadow: "0 0 25px rgba(147,51,234,0.6)",
            }}
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 rounded-full font-medium text-white shadow-lg hover:opacity-90 transition-all duration-300"
            href="#contact">
            Let’s Build Your Website 🚀
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
