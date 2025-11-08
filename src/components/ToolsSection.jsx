import { Wrench, Github, Cloud, Server, Bug, Settings, Compass, Database, CloudDrizzle } from "lucide-react";
import Tool from "./Tool.jsx";

export default function ToolsSection() {
  const tools = [
    { icon: Github, label: "Git & GitHub" },
    { icon: Cloud, label: "Docker" },
    { icon: Server, label: "RESTful APIs" },
    { icon: Bug, label: "Testing / QA" },
    { icon: Settings, label: "CI/CD Pipelines" },
    { icon: Compass, label: "Agile / Scrum" },
    { icon: Database, label: "MySQL / MongoDB" },
    { icon: CloudDrizzle, label: "HDFS / Big Data" },
  ];

  return (
    <div className="glass p-6 rounded-2xl">
      <h3 className="text-xl font-semibold mb-8 text-indigo-200 flex items-center gap-2">
        <Wrench size={18} /> Tools & Practices
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-10">
        {tools.map((tool, i) => {
          const Icon = tool.icon;
          return <Tool key={i} tool={tool} i={i} />;
        })}
      </div>
    </div>
  );
}

{
  /* <div className="glass p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-6 text-indigo-200 flex items-center gap-2">
              <Wrench size={18} /> Tools & Practices
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Github, label: "Git & GitHub" },
                { icon: Cloud, label: "Docker" },
                { icon: Server, label: "RESTful APIs" },
                { icon: Bug, label: "Testing / QA" },
                { icon: Settings, label: "CI/CD Pipelines" },
                { icon: Compass, label: "Agile / Scrum" },
                { icon: Database, label: "MySQL / MongoDB" },
                { icon: CloudDrizzle, label: "HDFS / Big Data" },
              ].map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 6,
                      delay: i * 0.2,
                    }}
                    whileHover={{
                      x: [0, -2, 2, -1, 1, 0],
                      skewX: [0, 2, -2, 0],
                      transition: { duration: 0.3, repeat: 1 },
                    }}
                    className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 hover:shadow-[0_0_25px_rgba(147,51,234,0.25)] transition-all duration-300">
                    <Icon size={28} className="text-indigo-400 mb-5" />
                    <p className="text-sm text-slate-300 font-medium">{tool.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div> */
}
