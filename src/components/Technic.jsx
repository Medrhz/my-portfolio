import { Wrench } from "lucide-react";

import { SiCoffeescript, SiJquery, SiLaravel, SiPhp, SiReact, SiSpringboot, SiTailwindcss, SiTypescript, SiVuedotjs } from "react-icons/si";
import TechnicCard from "./TechnicCard.jsx";

const skills = [
  { name: "Java", icon: SiCoffeescript },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "PHP", icon: SiPhp },
  { name: "Laravel", icon: SiLaravel },
  { name: "React.js", icon: SiReact },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "jQuery", icon: SiJquery },
];

export default function Technical() {
  return (
    <div className="glass min-w-0 p-6 rounded-2xl">
      <h3 className="text-xl font-semibold mb-6 text-indigo-200 flex items-center gap-2">
        <Wrench size={18} aria-hidden="true" /> Tech Stack
      </h3>

      <ul aria-label="Technology stack" className="grid auto-rows-fr grid-cols-1 min-[320px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <TechnicCard key={skill.name} skill={skill} />
        ))}
      </ul>
    </div>
  );
}
