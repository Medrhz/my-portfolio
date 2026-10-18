import { useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";

const navigationLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];
const focusStyle = "focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-900 motion-reduce:transition-none";

export default function Header({ resume, scrol }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);

  function handleKeyDown(event) {
    if (event.key === "Escape" && menuOpen) {
      setMenuOpen(false);
      menuButton.current?.focus();
    }
  }

  return (
    <header
      onKeyDown={handleKeyDown}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-2xl border transition-colors duration-300 motion-reduce:transition-none ${scrol ? "bg-[#0f172a]/90 backdrop-blur-xl border-white/10 shadow-lg shadow-indigo-500/10" : "bg-[#0f172a]/80 backdrop-blur-sm border-white/5 shadow-md shadow-indigo-500/5"}`}>
      <div className="flex min-h-[76px] items-center justify-between gap-3 px-4 sm:px-6">
        <a href="/" className={`flex min-w-0 items-center gap-3 rounded-lg ${focusStyle}`}>
          {/* <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-semibold text-white">MR</span> */}
          <img src="/icons/navbar-logo.svg" alt="" aria-hidden="true" className="h-11 w-11 shrink-0 object-contain" />
          <span className="min-w-0">
            <span className="block text-sm font-semibold leading-snug text-white">Mohamed Rhziza</span>
            <span className="block text-xs leading-relaxed text-slate-400">Software Engineer</span>
          </span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
          {navigationLinks.map((link) => (
            <a key={link.label} href={link.href} className={`rounded-lg py-2 hover:text-white ${focusStyle}`}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={resume}
            download
            aria-label="Download Mohamed Rhziza's CV"
            className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-3 text-sm font-medium text-white hover:opacity-90 sm:px-5 ${focusStyle}`}>
            <Download size={16} aria-hidden="true" />
            <span className="hidden sm:inline">Download CV</span>
          </a>
          <button
            ref={menuButton}
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-slate-200 hover:bg-white/10 lg:hidden ${focusStyle}`}>
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!menuOpen} className="border-t border-white/10 px-4 py-3 lg:hidden">
        <div className="grid grid-cols-2 gap-1">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white ${focusStyle}`}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
