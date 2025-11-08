import ProjectCad from "./ProjectCad";
export default function Projects() {
  const projects = [
    {
      title: "Inventory Management",
      desc: "CRUD web app with Spring Boot & Angular, file uploads, and role-based access.",
      tech: ["Java", "Spring Boot", "Angular", "MySQL"],
    },
    {
      title: "Real-time Dashboard",
      desc: "React + WebSocket dashboard with charts, alerts, and CSV export.",
      tech: ["React", "WebSocket", "Recharts", "NodeJS"],
    },
    {
      title: "E-commerce Platform",
      desc: "Full-stack Vue + Spring Boot app with shopping cart and payment simulation.",
      tech: ["Vue", "Spring Boot", "TypeScript"],
    },
  ];
  return (
    <div>
      <section id="projects" className="py-28 bg-[#0f172a]/60 backdrop-blur-md">
        <h2 className="text-3xl font-semibold text-center mb-14 text-white">Selected Projects</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
          {projects.map((p, i) => (
            <ProjectCad key={i} index={i} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
