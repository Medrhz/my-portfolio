import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * AnimatedToggleButton
 * props:
 *  - labelOn: text when active (default: "On / Active")
 *  - labelOff: text when inactive (default: "Hire Me")
 *  - className: extra tailwind classes
 *  - onClick: callback (receives newState)
 *  - initial: boolean initial state
 */
export default function AnimatedToggleButton({ labelOn = "HIRED ✓", labelOff = "Hire Me", className = "", onClick, initial = false }) {
  const [on, setOn] = useState(initial);

  const handleToggle = (e) => {
    const next = !on;
    setOn(next);
    if (onClick) onClick(next);
  };

  return (
    <motion.button
      aria-pressed={on}
      onClick={handleToggle}
      whileTap={{ scale: 0.98 }}
      className={`relative inline-flex items-center gap-3 px-5 py-2 rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ` + `transition-all ${className}`}
      // keyboard accessible onKeyDown isn't needed because button handles Enter/Space
    >
      {/* Glow background when ON */}
      <span aria-hidden className={`absolute inset-0 rounded-full pointer-events-none transition-opacity ${on ? "opacity-100" : "opacity-0"}`}>
        <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 blur-xl opacity-80 rounded-full animate-ctaGlow"></span>
      </span>

      {/* Outline / base */}
      <span className={`relative flex items-center gap-2 z-10 ${on ? "text-white" : "text-slate-100"}`}>
        <span className={`w-3 h-3 rounded-full flex-shrink-0 transition-all ${on ? "bg-white shadow-[0_0_12px_rgba(255,255,255,0.35)]" : "bg-transparent border border-white/20"}`} />
        <span className="text-sm">{on ? labelOn : labelOff}</span>
      </span>
    </motion.button>
  );
}
