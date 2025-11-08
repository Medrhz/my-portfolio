import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="py-10 text-center text-slate-400 text-sm border-t border-white/10">© {new Date().getFullYear()} Mohamed Rhziza — Built with ❤️ using React & Tailwind</footer>
    </div>
  );
}
