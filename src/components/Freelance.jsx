import React from "react";

export default function Freelance() {
  return (
    <div>
      {
        <section id="services" className="py-28 bg-[#0f172a]/70 backdrop-blur-md border-t border-white/10 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-10 text-indigo-200">Freelance Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-14">
              I offer full-stack web development services — from modern, responsive front-end designs to scalable back-end APIs and database systems. Let’s turn your ideas into reality.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Front-End Development",
                  desc: "Building responsive, dynamic interfaces with React, Angular, Vue, and Tailwind CSS.",
                  icon: "🎨",
                },
                {
                  title: "Back-End Development",
                  desc: "Developing robust REST APIs and microservices with Java, Spring Boot, and Node.js.",
                  icon: "⚙️",
                },
                {
                  title: "Freelance & Consulting",
                  desc: "Helping startups and teams with architecture, code reviews, and scalable design.",
                  icon: "🚀",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300 flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-indigo-100">{service.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a href="#contact" className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2 rounded-full font-medium text-white hover:opacity-90 transition">
                Let’s Work Together
              </a>
            </div>
          </div>
        </section>
      }
    </div>
  );
}
