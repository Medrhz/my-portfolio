import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import QRCodeGenerator from "./QRCodeGenerator";

const focusStyle = "focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 motion-reduce:transition-none";
const inputStyle = "mt-2 min-h-11 w-full rounded-md border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500 outline-none";

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const subject = values.get("subject").trim() || "Portfolio Contact";
    const body = `Name: ${values.get("name")}\nEmail: ${values.get("email")}\n\n${values.get("message")}`;
    window.location.href = `mailto:mohamed.rhziza@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 sm:py-24 bg-[#0f172a]/70 backdrop-blur-md border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 id="contact-heading" className="text-3xl font-semibold text-white">Let's Connect</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-400">Have a project or opportunity in mind? I'd love to hear from you.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          <div className="glass min-w-0 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-6 text-indigo-200 flex items-center gap-2">
              <Send size={18} aria-hidden="true" className="shrink-0" /> Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="text-sm font-medium text-slate-200">Your Name <span className="text-slate-400">(required)</span></label>
                <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" className={inputStyle} required />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm font-medium text-slate-200">Your Email <span className="text-slate-400">(required)</span></label>
                <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={inputStyle} required />
              </div>
              <div>
                <label htmlFor="contact-subject" className="text-sm font-medium text-slate-200">Subject <span className="text-slate-400">(optional)</span></label>
                <input id="contact-subject" name="subject" type="text" placeholder="What would you like to discuss?" className={inputStyle} />
              </div>
              <div>
                <label htmlFor="contact-message" className="text-sm font-medium text-slate-200">Your Message <span className="text-slate-400">(required)</span></label>
                <textarea id="contact-message" name="message" placeholder="Tell me about your project or opportunity" rows={4} className={`${inputStyle} min-h-28 resize-y`} required />
              </div>
              <button type="submit" className={`flex min-h-11 w-full items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2.5 rounded-md text-sm font-medium text-white hover:opacity-90 transition-opacity ${focusStyle}`}>
                <Send size={16} aria-hidden="true" /> Send Message
              </button>
              <p className="text-xs leading-relaxed text-slate-400">Opens your email app with your message ready to send.</p>
            </form>
          </div>

          <div className="glass min-w-0 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-6 text-indigo-200 flex items-center gap-2">
              <Mail size={18} aria-hidden="true" className="shrink-0" /> Get in Touch
            </h3>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 shrink-0 text-indigo-400" size={18} aria-hidden="true" />
                <a href="mailto:mohamed.rhziza@gmail.com" className={`min-w-0 break-words rounded-sm hover:text-white ${focusStyle}`}>mohamed.rhziza@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="shrink-0 text-indigo-400" size={18} aria-hidden="true" /> Salé, Morocco
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/mohamed-rhziza-531892257/" target="_blank" rel="noopener noreferrer" aria-label="Mohamed Rhziza on LinkedIn" className={`inline-flex min-h-11 items-center gap-2 px-3 bg-white/5 rounded-full border border-white/10 text-sm text-slate-200 hover:bg-white/10 ${focusStyle}`}>
                <Linkedin className="text-indigo-400" size={20} aria-hidden="true" /> LinkedIn
              </a>
              <a href="https://github.com/Medrhz" target="_blank" rel="noopener noreferrer" aria-label="Mohamed Rhziza on GitHub" className={`inline-flex min-h-11 items-center gap-2 px-3 bg-white/5 rounded-full border border-white/10 text-sm text-slate-200 hover:bg-white/10 ${focusStyle}`}>
                <Github className="text-indigo-400" size={20} aria-hidden="true" /> GitHub
              </a>
            </div>
            <p className="mt-6 text-slate-400 text-sm leading-relaxed">Open to software engineering opportunities, freelance projects, and meaningful collaborations.</p>
            <QRCodeGenerator url="https://my-portfolio-wrrh.vercel.app/" size={132} />
          </div>
        </div>
      </div>
    </section>
  );
}
