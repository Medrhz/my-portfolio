import { SiAngular, SiCoffeescript, SiJquery, SiLaravel, SiPhp, SiReact, SiSpringboot, SiTailwindcss, SiTypescript, SiVuedotjs } from "react-icons/si";
import Technical from "./Technic";
import ToolsSection from "./ToolsSection";

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#0f172a]/60 backdrop-blur-md border-t border-white/10">
      <h2 className="text-3xl font-semibold text-center mb-14 text-white">Skills & Tools</h2>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/*  Technical Skills */}
        <Technical />
        {/* Tools & Practices */}
        <ToolsSection />
      </div>
    </section>
  );
}
