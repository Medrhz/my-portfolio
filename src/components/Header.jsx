import { Download } from "lucide-react";

export default function Header({ resume, scrol }) {
  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl 
    transition-all duration-500 ease-in-out 
    ${scrol ? "bg-[#0f172a]/70 backdrop-blur-xl border border-white/10 shadow-lg shadow-indigo-500/10" : "bg-[#0f172a]/40 backdrop-blur-sm border border-white/5 shadow-md shadow-indigo-500/5"}
    rounded-2xl`}>
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}

        <div className="relative flex items-center gap-3">
          {/* Outer glow (halo effect) */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 blur-md opacity-40"></div>

          {/* Logo circle */}
          <div className="relative w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-semibold text-sm shadow-[0_2px_8px_rgba(99,102,241,0.4)]">
            MR
          </div>

          {/* Text beside logo */}
          <div className="relative z-10">
            <h1 className="text-sm font-semibold text-white">Mohamed Rhziza</h1>
            <p className="text-xs text-slate-400">Full Stack Engineer</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {["Projects", "Experience", "Skills", "Contact"].map((section) => (
            <a key={section} href={`#${section.toLowerCase()}`} className="hover:text-white transition-colors duration-300">
              {section}
            </a>
          ))}
        </nav>

        {/* CV Button */}
        <a
          href={resume}
          download
          className="hidden sm:flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1.5 rounded-full shadow-md hover:opacity-90 transition">
          <Download size={14} /> Download CV
        </a>
      </div>
    </header>
  );
}

{
  /* <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0f172a]/70 backdrop-blur-xl border-b border-white/10" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center font-bold text-white shadow-md">SR</div>
            <div>
              <h1 className="text-sm font-semibold">Mohamed Rhziza</h1>
              <p className="text-xs text-slate-400">Full Stack Engineer</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            {["Projects", "Experience", "Skills", "Contact"].map((section) => (
              <a key={section} href={`#${section.toLowerCase()}`} className="hover:text-white transition">
                {section}
              </a>
            ))}
            <a
              href={RESUME_URL}
              download
              className="ml-4 bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1.5 rounded-full text-white flex items-center gap-2 text-xs font-medium transition hover:scale-[1.03]">
              <Download size={14} /> CV
            </a>
          </nav>
        </div>
      </header> */
}
