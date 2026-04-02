"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#presentacion", label: "Inicio" },
  { href: "#sobre-mi",     label: "Trayectoria" },
  { href: "#skills",       label: "Habilidades" },
  { href: "#experiencia",  label: "Experiencia" },
  { href: "#portafolio",   label: "Obras" },
  { href: "#educacion",    label: "Educación" },
  { href: "#contacto",     label: "Correspondencia" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [active, setActive]   = useState("#presentacion");
  const [scrolled, setScrolled] = useState(false);

  /* ── Active section via IntersectionObserver ── */
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 header-border pb-6 transition-shadow duration-300"
      style={{
        backgroundColor: "rgba(253, 249, 243, 0.95)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(128,0,32,0.12)",
        boxShadow: scrolled
          ? "0 4px 24px rgba(28,28,24,0.10)"
          : "0 1px 8px rgba(28,28,24,0.04)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[72px]">

        {/* Logo / nombre */}
        <a
          href="#presentacion"
          className="italic shrink-0"
          style={{
            fontFamily: "var(--font-newsreader)",
            color: "#800020",
            fontSize: "clamp(0.85rem, 2vw, 1rem)",
            letterSpacing: "0.06em",
          }}
        >
          Jorgiahanny Almea
        </a>

        {/* Separador vertical */}
        <div
          className="hidden lg:block h-5 w-px mx-6 shrink-0"
          style={{ backgroundColor: "rgba(197,160,89,0.35)" }}
        />

        {/* Links desktop */}
        <ul className="hidden lg:flex items-center gap-7 flex-1">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  className="block py-1 transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-newsreader)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: isActive ? "#C5A059" : "#8e4766",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#C5A059")}
                  onMouseLeave={e => (e.currentTarget.style.color = isActive ? "#C5A059" : "#8e4766")}
                >
                  {l.label}
                  {/* Underline activo */}
                  <span
                    className="absolute bottom-0 left-0 h-px transition-all duration-300"
                    style={{
                      backgroundColor: "#C5A059",
                      width: isActive ? "100%" : "0%",
                    }}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA — Contrátame */}
        <a
          href="#contacto"
          className="hidden lg:inline-block shrink-0 ml-4"
          style={{
            fontFamily: "var(--font-newsreader)",
            fontSize: "0.68rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#fdf9f3",
            backgroundColor: "#800020",
            border: "1px solid rgba(197,160,89,0.5)",
            padding: "0.45rem 1.2rem",
            borderRadius: "4px",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.82")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Contrátame
        </a>

        {/* Mobile/tablet toggle */}
        <button
          className="lg:hidden p-1"
          style={{ color: "#800020" }}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile/tablet menu */}
      {open && (
        <div
          className="lg:hidden px-6 py-4 flex flex-col gap-1"
          style={{
            backgroundColor: "rgba(253, 249, 243, 0.98)",
            borderTop: "1px solid rgba(197,160,89,0.2)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2.5 border-b transition-colors"
              style={{
                fontFamily: "var(--font-newsreader)",
                fontSize: "0.78rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: active === l.href ? "#C5A059" : "#8e4766",
                borderColor: "rgba(197,160,89,0.12)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-3 text-center py-2.5"
            style={{
              fontFamily: "var(--font-newsreader)",
              fontSize: "0.72rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#fdf9f3",
              backgroundColor: "#800020",
              border: "1px solid rgba(197,160,89,0.4)",
              borderRadius: "4px",
            }}
          >
            Contrátame
          </a>
        </div>
      )}
    </nav>
  );
}
