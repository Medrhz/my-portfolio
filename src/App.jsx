import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import avatarImg from "./assets/images/avatar.jpg";
// import Freelance from "./components/Freelance";

import BusinessSolutions from "./components/BusinessSolutions.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackLighit from "./components/BackLighit.jsx";
import Experience from "./components/Experience.jsx";
const RESUME_URL = "/CV_2025-11-08_Mohamed_RHZIZA (1).pdf";
// const AVATAR = "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop";
const AVATAR = avatarImg;

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[#1e1b4b] to-[#0f172a] text-slate-100 font-[Inter] overflow-x-hidden">
      {/* background light*/}
      <BackLighit />
      {/* HEADER */}
      <Header resume={RESUME_URL} scrol={scrolled} />
      {/* HERO */}
      <Hero resume={RESUME_URL} avatar={AVATAR} />
      {/* PROJECTS */} <Projects />
      {/* EXPERIENCE & EDUCATION */}
      <Experience />
      {/* SKILLS & TOOLS */}
      <Skills />
      {/* FREELANCE SERVICES SECTION */}
      {/* MARKETING / FREELANCE SHOWCASE SECTION */}
      <BusinessSolutions />
      {/* CONTACT */}
      {/* CONTACT SECTION */}
      <Contact />
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
