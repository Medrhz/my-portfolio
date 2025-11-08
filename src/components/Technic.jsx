import { Icon, Wrench } from "lucide-react";

import { SiAngular, SiCoffeescript, SiJquery, SiLaravel, SiPhp, SiReact, SiSpringboot, SiTailwindcss, SiTypescript, SiVuedotjs } from "react-icons/si";
import TechnicCard from "./TechnicCard.jsx";

export default function Technical() {
  const skills = [
    { name: "Java", level: 90, icon: SiCoffeescript },
    { name: "Spring Boot", level: 88, icon: SiSpringboot },
    { name: "PHP", level: 90, icon: SiPhp },
    { name: "Laravel", level: 88, icon: SiLaravel },
    { name: "Angular", level: 85, icon: SiAngular },
    { name: "React.js", level: 88, icon: SiReact },
    { name: "Vue.js", level: 80, icon: SiVuedotjs },
    { name: "TypeScript", level: 86, icon: SiTypescript },
    { name: "Tailwind CSS", level: 82, icon: SiTailwindcss },
    { name: "JQuery", level: 90, icon: SiJquery },
  ];
  return (
    <div className="glass p-6 rounded-2xl">
      <h3 className="text-xl font-semibold mb-6 text-indigo-200 flex items-center gap-2">
        <Wrench size={18} /> Technical Skills
      </h3>

      {skills.map((skill, i) => {
        return <TechnicCard key={i} skill={skill} i={i} />;
      })}
    </div>
  );
}
