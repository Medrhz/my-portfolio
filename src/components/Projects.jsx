import ProjectCad from "./ProjectCad";
export default function Projects() {
  // const projects = [
  //   // {
  //   //   title: "Real-time Dashboard",
  //   //   desc: "React + WebSocket dashboard with charts, alerts, and CSV export.",
  //   //   tech: ["React", "WebSocket", "Recharts", "NodeJS"],
  //   // },
  //   // {
  //   //   title: "E-commerce Platform",
  //   //   desc: "Full-stack Vue + Spring Boot app with shopping cart and payment simulation.",
  //   //   tech: ["Vue", "Spring Boot", "TypeScript"],
  //   // },
  //   {
  //     title: "Système de Gestion de Stock et de Ventes (ERP Léger)",
  //     desc: "Application web complète pour la gestion des opérations commerciales d’un concessionnaire : clients, fournisseurs, ventes, commandes et stock. Intégration d’un tableau de bord interactif (AdminLTE) avec alertes automatiques.",
  //     tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
  //   },
  //   {
  //     title: "SAFAR – Application de Gestion d’Agence de Transport (PFE)",
  //     desc: "Développement d’une application web complète pour la gestion des opérations d’une agence de transport (réservations, chauffeurs, congés, suivi des voyages). Trois espaces distincts : client, chauffeur et administrateur.",
  //     tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "UML"],
  //   },
  //   {
  //     title: "Inventory Management",
  //     desc: "CRUD web app with Spring Boot & Angular, file uploads, and role-based access.",
  //     tech: ["Java", "Spring Boot", "Angular", "MySQL"],
  //   },
  //   {
  //     title: "Gestion d’un Magasin de Produits de Coiffure",
  //     desc: "Application web dédiée à la gestion commerciale d’un magasin de produits de coiffure (vente d’accessoires, produits capillaires, matériel professionnel...).",
  //     tech: ["Spring Boot", "Angular", "TailwindCSS", "MySQL"],
  //   },
  //   {
  //     title: "Institut Supérieur de Management, d’Administration et de Génie Informatique",
  //     desc: "Projets académiques et professionnels réalisés dans le cadre des études à l’Institut ISMAGI.",
  //     tech: ["HTML", "CSS", "JavaScript", "Java", "MySQL"],
  //   },
  //   {
  //     title: "Projets Simples de Formation",
  //     desc: "En plus des projets professionnels, j’ai développé plusieurs mini-projets pour l’apprentissage : petites applications CRUD, tests d’API, intégration front-back et manipulation de bases de données.",
  //     tech: ["Java", "Spring Boot", "PHP", "Laravel", "React", "Angular", "Vue.js", "MySQL"],
  //     link: "https://github.com/Medrhz?tab=repositories",
  //   },
  // ];
  const projects = [
    {
      title: "Stock & Sales Management System (Light ERP)",
      desc: "A full web-based application for managing commercial operations in a dealership — including clients, suppliers, sales, orders, and inventory. Integrated an interactive dashboard (AdminLTE) with automated stock alerts.",
      tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
    },
    {
      title: "SAFAR – Transport Agency Management System (Final Year Project)",
      desc: "Developed a complete web application for managing transport agency operations such as bookings, drivers, leaves, and trip tracking. Includes three distinct spaces: client, driver, and admin.",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "UML"],
    },
    {
      title: "Inventory Management Application",
      desc: "CRUD web application built with Spring Boot and Angular featuring file uploads, role-based access control, and real-time stock updates.",
      tech: ["Java", "Spring Boot", "Angular", "MySQL"],
    },
    {
      title: "Hair Products Store Management",
      desc: "Web-based system for managing the commercial operations of a beauty products store — including sales of accessories, hair products, and professional materials.",
      tech: ["Spring Boot", "Angular", "TailwindCSS", "MySQL"],
    },

    {
      title: "Learning Projects & Mini CRUD Apps",
      desc: "In addition to professional work, I built several small projects for learning purposes — including CRUD apps, API testing, and front–back integration experiments.",
      tech: ["Java", "Spring Boot", "PHP", "Laravel", "React", "Angular", "Vue.js", "MySQL"],
      link: "https://github.com/Medrhz?tab=repositories",
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
