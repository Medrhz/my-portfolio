import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";

const focusStyle = "focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-900 motion-reduce:transition-none";

export default function Hero({ avatar, avatarSmall }) {
  return (
    <section aria-labelledby="hero-heading" className="mx-auto grid max-w-6xl items-center gap-y-0 px-6 pb-16 pt-36 sm:pb-20 sm:pt-40 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:gap-x-8 lg:gap-x-16 lg:pb-24 lg:pt-44">
      <div className="min-w-0 md:col-start-1 md:row-start-1">
        <p className="mb-3 text-sm font-medium tracking-wide text-indigo-300">Hello, I'm</p>
        <h1 id="hero-heading" className="mb-5 text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white">Mohamed Rhziza</h1>
        <h2 className="mb-5 text-lg font-medium leading-relaxed text-slate-200 lg:text-xl">
          Software Engineer <span className="text-indigo-300">|</span> Full Stack Developer
        </h2>
        <p className="max-w-lg text-base font-medium leading-relaxed text-slate-200">
          I design and develop modern software solutions that help businesses and organizations solve real-world problems.
        </p>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-400">
          My approach focuses on thoughtful engineering, clean architecture, and building reliable applications that deliver meaningful user experiences.
        </p>
      </div>
      <div className="mt-6 flex justify-center md:mt-0 md:col-start-2 md:row-start-1 md:row-span-3">
        <img src={avatar} srcSet={`${avatarSmall} 320w, ${avatar} 640w`} sizes="(min-width: 1024px) 300px, (min-width: 768px) 256px, 180px" fetchPriority="high" decoding="async" alt="Professional portrait of Mohamed Rhziza" width={300} height={300} className="aspect-square h-auto w-[180px] max-w-full rounded-full border border-purple-400/30 object-cover object-center shadow-xl shadow-slate-950/20 md:w-64 lg:w-[300px]" />
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-3 md:mt-8 md:justify-start md:col-start-1 md:row-start-2">
        <a href="#projects" className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 text-sm font-medium text-white hover:opacity-90 ${focusStyle}`}>
          View Projects <ArrowRight size={16} aria-hidden="true" />
        </a>
        <a href="#contact" className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 ${focusStyle}`}>
          <Mail size={16} aria-hidden="true" /> Contact Me
        </a>
      </div>
      <div className="mt-4 flex items-center justify-center gap-3 text-slate-400 md:mt-6 md:justify-start md:col-start-1 md:row-start-3">
        <a href="https://github.com/Medrhz" target="_blank" rel="noopener noreferrer" aria-label="Mohamed Rhziza on GitHub" className={`inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-white/5 hover:text-white ${focusStyle}`}><Github size={20} aria-hidden="true" /></a>
        <a href="https://www.linkedin.com/in/mohamed-rhziza-531892257/" target="_blank" rel="noopener noreferrer" aria-label="Mohamed Rhziza on LinkedIn" className={`inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-white/5 hover:text-white ${focusStyle}`}><Linkedin size={20} aria-hidden="true" /></a>
        <a href="mailto:mohamed.rhziza@gmail.com" aria-label="Email Mohamed Rhziza" className={`inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-white/5 hover:text-white ${focusStyle}`}><Mail size={20} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
