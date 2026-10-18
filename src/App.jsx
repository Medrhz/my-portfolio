import { lazy, Suspense, useEffect, useState } from "react";
import avatarImg from "./assets/images/profile-640.webp";
import avatarSmall from "./assets/images/profile-320.webp";
import { updatePageMetadata } from "./seo.js";

import BusinessSolutions from "./components/BusinessSolutions.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackLighit from "./components/BackLighit.jsx";
import Experience from "./components/Experience.jsx";

const RESUME_URL = "/Mohamed_RHZIZA.pdf";
const PFEProject = lazy(() => import("./components/PFEProject.jsx"));

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
  const isPFEPage = currentPath === "/pfe";

  useEffect(() => {
    updatePageMetadata(isPFEPage);
  }, [isPFEPage]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[#1e1b4b] to-[#0f172a] text-slate-100 font-[Inter] overflow-x-hidden">
      <BackLighit />
      <Header resume={RESUME_URL} scrol={scrolled} />

      {isPFEPage ? (
        <Suspense fallback={<main className="mx-auto max-w-6xl px-6 pt-32 pb-20" aria-busy="true"><p role="status">Loading project details…</p></main>}>
          <PFEProject />
        </Suspense>
      ) : (
        <main>
          <Hero avatar={avatarImg} avatarSmall={avatarSmall} />
          <Projects />
          <Experience />
          <Skills />
          <BusinessSolutions />
          <Contact />
        </main>
      )}

      <Footer />
    </div>
  );
}
