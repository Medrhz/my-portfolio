import { ArrowUp, Github, Linkedin } from "lucide-react";

const navigationLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];
const focusStyle = "focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 motion-reduce:transition-none";
const iconStyle = `inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-300 ${focusStyle}`;

export default function Footer() {
  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return (
    <footer className="relative border-t border-white/10 bg-slate-900 pt-8 pb-6 text-sm text-slate-400 backdrop-blur-none">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              {/* <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-semibold text-white">MR</span> */}
              <img src="/icons/logo.png" width={44} height={44} decoding="async" alt="" aria-hidden="true" className="h-11 w-11 shrink-0 object-contain" />

              <div>
                <p className="font-semibold text-white">Mohamed Rhziza</p>
                <p className="text-xs text-slate-400">Software Engineer</p>
              </div>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">Building modern, reliable, and scalable software solutions.</p>
          </div>
          <div className="min-w-0 md:justify-self-end">
            <h2 className="text-sm font-semibold text-slate-200">Explore</h2>
            <nav aria-label="Footer navigation" className="mt-1 flex flex-wrap gap-x-5">
              {navigationLinks.map((link) => (
                <a key={link.label} href={link.href} className={`inline-flex min-h-11 items-center rounded-sm text-slate-300 transition-colors hover:text-indigo-300 ${focusStyle}`}>
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-2 flex items-center gap-3">
              <a href="https://github.com/Medrhz" target="_blank" rel="noopener noreferrer" aria-label="Mohamed Rhziza on GitHub" className={iconStyle}>
                <Github size={20} aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-rhziza-531892257/" target="_blank" rel="noopener noreferrer" aria-label="Mohamed Rhziza on LinkedIn" className={iconStyle}>
                <Linkedin size={20} aria-hidden="true" />
              </a>
              <button type="button" onClick={backToTop} aria-label="Back to top" title="Back to top" className={iconStyle}>
                <ArrowUp size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-400">© {new Date().getFullYear()} Mohamed Rhziza. All rights reserved.</p>
          <p className="text-slate-400">Salé, Morocco</p>
        </div>
      </div>
    </footer>
  );
}
