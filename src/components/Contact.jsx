import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div>
      <section id="contact" className="py-28 bg-[#0f172a]/70 backdrop-blur-md border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="glass p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-indigo-200 flex items-center gap-2">
              <Send size={18} /> Send me a message
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:you@example.com?subject=${encodeURIComponent("Portfolio Contact")}`;
              }}
              className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-white/10 text-white rounded-md border border-white/20 focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-white/10 text-white rounded-md border border-white/20 focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-2 bg-white/10 text-white rounded-md border border-white/20 focus:ring-2 focus:ring-indigo-500 outline-none h-32 resize-none"
                required></textarea>
              <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 py-2 rounded-md font-medium hover:opacity-90 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="glass p-6 rounded-2xl flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-indigo-200 mb-6 flex items-center gap-2">
              <Mail size={18} /> Get in touch
            </h3>
            <ul className="space-y-5 text-slate-300 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="text-indigo-400" size={18} /> you@example.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="text-indigo-400" size={18} /> Oujda, Morocco
              </li>
            </ul>

            <div className="mt-8 flex gap-6">
              <a href="https://linkedin.com/in/your" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition">
                <Linkedin className="text-indigo-400 hover:text-white transition" size={22} />
              </a>
              <a href="https://github.com/your" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition">
                <Github className="text-indigo-400 hover:text-white transition" size={22} />
              </a>
              <a href="mailto:you@example.com" className="p-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition">
                <Mail className="text-indigo-400 hover:text-white transition" size={22} />
              </a>
            </div>

            <p className="mt-10 text-indigo-300 text-sm italic">Always open to freelance and collaboration opportunities 🚀</p>
          </div>
        </div>
      </section>
    </div>
  );
}

{
  /* <section id="contact" className="py-28 bg-[#0f172a]/70 backdrop-blur-md border-t border-white/10">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
    <div className="glass p-6 rounded-2xl">
      <h3 className="text-xl font-semibold mb-4 text-indigo-200 flex items-center gap-2">
        <Send size={18} /> Send me a message
      </h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = `mailto:mohamed.rhziza@gmail.com?subject=${encodeURIComponent("Portfolio Contact")}`;
        }}
        className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 bg-white/10 text-white rounded-md border border-white/20 focus:ring-2 focus:ring-indigo-500 outline-none" required />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 bg-white/10 text-white rounded-md border border-white/20 focus:ring-2 focus:ring-indigo-500 outline-none" required />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 bg-white/10 text-white rounded-md border border-white/20 focus:ring-2 focus:ring-indigo-500 outline-none h-32 resize-none"
          required></textarea>
        <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 py-2 rounded-md font-medium hover:opacity-90 transition">
          Send Message
        </button>
      </form>
    </div>

    <div className="glass p-6 rounded-2xl flex flex-col justify-center">
      <h3 className="text-xl font-semibold text-indigo-200 mb-6 flex items-center gap-2">
        <Mail size={18} /> Get in touch
      </h3>
      <ul className="space-y-4 text-slate-400 text-sm">
        <li>
          📧 <span className="text-white">mohamed.rhziza@gmail.com</span>
        </li>
        <li>
          <MapPin size={14} className="inline mr-1" /> Rabat, Morocco
        </li>
      </ul>
      <div className="mt-6 flex gap-4 text-indigo-300">
        <a href="#" className="hover:text-white">
          💼 LinkedIn
        </a>
        <a href="#" className="hover:text-white">
          🧑‍💻 GitHub
        </a>
        <a href="mailto:mohamed.rhziza@gmail.com" className="hover:text-white">
          ✉️ Email
        </a>
      </div>
    </div>
  </div>
</section>; */
}
