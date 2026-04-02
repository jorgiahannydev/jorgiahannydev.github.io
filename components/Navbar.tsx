"use client";
import { useState } from "react";

const links = [
  { href: "#presentacion", label: "Inicio" },
  { href: "#sobre-mi",     label: "Trayectoria" },
  { href: "#skills",       label: "Habilidades" },
  { href: "#experiencia",  label: "Experiencia" },
  { href: "#portafolio",   label: "Obras" },
  { href: "#educacion",    label: "Educación" },
  { href: "#contacto",     label: "Correspondencia" },
];

const navStyle: React.CSSProperties = {
  backgroundColor: "rgba(245, 239, 230, 0.93)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  borderBottom: "1px solid rgba(61, 10, 30, 0.18)",
  boxShadow: "0 1px 12px rgba(61,10,30,0.06)",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 header-border pb-8" style={navStyle}>
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">
        <a
          href="#presentacion"
          className="text-sm md:text-base tracking-widest truncate italic"
          style={{ fontFamily: "var(--font-newsreader)", color: "#3d0a1e" }}
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
                style={{ color: "#7a2040", fontFamily: "var(--font-newsreader)", fontSize: "0.72rem" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#b8891f")}
                onMouseLeave={e => (e.currentTarget.style.color = "#7a2040")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{ color: "#3d0a1e" }}
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
        <ul
          className="md:hidden px-4 pb-4 flex flex-col gap-3"
          style={{
            backgroundColor: "rgba(253, 249, 243, 0.97)",
            borderTop: "1px solid rgba(200, 144, 58, 0.2)",
          }}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm py-1 tracking-widest uppercase transition-colors"
                style={{ color: "#7a2040", fontFamily: "var(--font-newsreader)", fontSize: "0.72rem" }}
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
