"use client";

import { useState } from "react";
import Image from "next/image";

type Project = {
  img: string; alt: string; title: string; description: string;
  category: string; tags: string[]; demo?: string; code?: string; placeholder?: string;
};

const projects: Project[] = [
  {
    img: "/img/codigo.png", alt: "Premium Dental",
    title: "Premium Dental", category: "HTML · CSS · JS",
    description: "Sitio web para clínica dental con diseño profesional, secciones de servicios, equipo y contacto.",
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/jorgiahannydev/premiumdental",
  },
  {
    img: "", alt: "Hito 8 React", title: "Hito 8 — React", category: "React",
    description: "Proyecto final del módulo React del Bootcamp Desafío Latam. Aplicación con componentes, estado y rutas.",
    tags: ["React", "JavaScript", "CSS"],
    code: "https://github.com/jorgiahannydev/HITO-8-REACT",
    placeholder: "React",
  },
  {
    img: "", alt: "My E-commerce", title: "My E-commerce", category: "E-commerce",
    description: "Tienda online con catálogo de productos, diseño visual y estructura de e-commerce.",
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/jorgiahannydev/My-e-comerce",
    placeholder: "E-commerce",
  },
  {
    img: "/img/codigo.png", alt: "CV Web Personal", title: "CV Web Personal", category: "Next.js · Tailwind",
    description: "CV interactivo con diseño responsive, estética editorial Bridgerton, secciones animadas.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    demo: "https://jorgiahannydev.github.io",
    code: "https://github.com/jorgiahannydev/jorgiahannydev.github.io",
  },
  {
    img: "", alt: "Desafío V JavaScript", title: "Desafío V — JavaScript", category: "JavaScript",
    description: "Ejercicio avanzado de JavaScript vanilla del Bootcamp Desafío Latam.",
    tags: ["JavaScript", "HTML", "CSS"],
    code: "https://github.com/jorgiahannydev/Desaf-o-V-Js",
    placeholder: "JavaScript",
  },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <div
      className="group relative overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: "#f5efe6",
        border: "1px solid rgba(200,144,58,0.18)",
        boxShadow: "0 2px 10px rgba(122,30,62,0.07)",
      }}
    >
      {/* Icono botánico superpuesto al hover */}
      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-15 transition-opacity duration-500 text-3xl pointer-events-none"
        style={{ color: "#3d0a1e" }}>
        ❧
      </div>

      {/* Imagen portrait */}
      {p.img ? (
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src={p.img} alt={p.alt} fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      ) : (
        <div
          className="aspect-[3/4] flex items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(160deg, #3d0a1e 0%, #b8891f 100%)" }}
        >
          <span
            className="font-bold text-2xl tracking-widest italic group-hover:scale-105 transition-transform duration-500 inline-block"
            style={{ fontFamily: "var(--font-newsreader)", color: "#f5efe6" }}
          >
            {p.placeholder}
          </span>
        </div>
      )}

      {/* Info */}
      <div className="p-6 text-center space-y-3 flex flex-col flex-1">
        <span className="b-label text-[0.65rem]">{p.category}</span>
        <h4
          className="font-semibold text-xl italic leading-snug"
          style={{ fontFamily: "var(--font-newsreader)", color: "#3d0a1e" }}
        >
          {p.title}
        </h4>
        <p className="text-sm leading-relaxed flex-1" style={{ color: "#3a2428", fontFamily: "var(--font-lora)" }}>
          {p.description}
        </p>

        {/* Links estilo Stitch: itálico con subrayado */}
        <div className="flex justify-center gap-4 pt-2">
          {p.demo && (
            <a
              href={p.demo} target="_blank" rel="noopener noreferrer"
              className="italic border-b pb-0.5"
              style={{ fontFamily: "var(--font-newsreader)", color: "#af2b3e", borderColor: "rgba(175,43,62,0.3)", fontSize: "0.9rem" }}
            >
              Ver en vivo
            </a>
          )}
          {p.code && (
            <a
              href={p.code} target="_blank" rel="noopener noreferrer"
              className="italic border-b pb-0.5"
              style={{ fontFamily: "var(--font-newsreader)", color: "#af2b3e", borderColor: "rgba(175,43,62,0.3)", fontSize: "0.9rem" }}
            >
              Ver código
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioCarousel() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(projects.length / perPage);
  const visible = projects.slice(page * perPage, page * perPage + perPage);

  return (
    <div>
      {/* Encabezado con flechas — layout idéntico a Stitch */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <h2
            className="text-4xl md:text-5xl font-bold italic"
            style={{ fontFamily: "var(--font-newsreader)", color: "#3d0a1e" }}
          >
            Galería de Obras
          </h2>
          <p
            className="mt-3 italic"
            style={{ fontFamily: "var(--font-lora)", color: "#3a2428", fontSize: "0.95rem" }}
          >
            Proyectos que definen el estilo y la técnica moderna.
          </p>
        </div>

        {/* Flechas de navegación */}
        <div className="flex gap-3 flex-shrink-0">
          <button
            className="carousel-arrow"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            className="carousel-arrow"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            aria-label="Siguiente"
          >
            →
          </button>
        </div>
      </div>

      {/* Grid de tarjetas — 3 columnas desktop, 1 móvil */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 min-h-[400px]">
        {visible.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>

      {/* Indicadores de página */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className="transition-all duration-200"
            style={{
              width: i === page ? "1.5rem" : "0.5rem",
              height: "0.5rem",
              borderRadius: "9999px",
              backgroundColor: i === page ? "#b8891f" : "rgba(200,144,58,0.3)",
            }}
            aria-label={`Página ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
