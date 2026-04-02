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
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-md" style={{ backgroundColor: "#7a1e3e" }}>
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">
        <a
          href="#presentacion"
          className="text-sm md:text-base tracking-widest truncate italic"
          style={{ fontFamily: "var(--font-playfair)", color: "#fce8ed" }}
        >
          Jorgiahanny Almea Martínez
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-widest uppercase transition-colors"
                style={{ color: "#f5c5d0", fontFamily: "var(--font-playfair)", fontSize: "0.72rem" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#c8903a")}
                onMouseLeave={e => (e.currentTarget.style.color = "#f5c5d0")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{ color: "#f5c5d0" }}
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

      {open && (
        <ul className="md:hidden px-4 pb-4 flex flex-col gap-3" style={{ backgroundColor: "#5e1630" }}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm py-1 tracking-widest uppercase transition-colors"
                style={{ color: "#f5c5d0", fontFamily: "var(--font-playfair)", fontSize: "0.72rem" }}
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
