"use client";
import { useState } from "react";

const links = [
  { href: "#presentacion", label: "Presentación" },
  { href: "#skills", label: "Skills" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#educacion", label: "Educación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-800 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#presentacion" className="text-white font-semibold text-sm md:text-base truncate">
          Jorgiahanny Almea Martínez
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-slate-300 hover:text-pink-300 text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-slate-900 px-4 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-slate-300 hover:text-pink-300 text-sm font-medium py-1 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
