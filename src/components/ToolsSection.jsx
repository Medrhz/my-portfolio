import { Wrench, Server, MonitorSmartphone, ArrowLeftRight, GitBranch, Blocks, Network, CloudUpload, FlaskConical } from "lucide-react";
import Tool from "./Tool.jsx";

export default function ToolsSection() {
  const tools = [
    { icon: Server, label: "Backend Development" },
    { icon: MonitorSmartphone, label: "Frontend Development" },
    { icon: ArrowLeftRight, label: "API Design & Integration" },
    { icon: GitBranch, label: "Version Control" },
    { icon: Blocks, label: "Software Architecture" },
    { icon: Network, label: "Microservices Architecture" },
    { icon: CloudUpload, label: "Application Deployment" },
    { icon: FlaskConical, label: "Software Testing" },
  ];

  return (
    <div className="glass min-w-0 p-6 rounded-2xl">
      <h3 className="text-xl font-semibold mb-6 text-indigo-200 flex items-center gap-2">
        <Wrench size={18} aria-hidden="true" className="shrink-0" /> Engineering Expertise
      </h3>

      <div className="grid grid-cols-2 auto-rows-fr gap-4">
        {tools.map((tool) => (
          <Tool key={tool.label} tool={tool} />
        ))}
      </div>
    </div>
  );
}
