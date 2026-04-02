import Image from "next/image";

type Project = {
  img: string; alt: string; title: string; description: string;
  tags: string[]; demo?: string; code?: string; placeholder?: string;
};

const techProjects: Project[] = [
  {
    img: "/img/codigo.png", alt: "Premium Dental",
    title: "Premium Dental",
    description: "Sitio web para clínica dental con diseño profesional, secciones de servicios, equipo y contacto.",
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/jorgiahannydev/premiumdental",
  },
  {
    img: "", alt: "Hito 8 React", title: "Hito 8 — React",
    description: "Proyecto final del módulo React del Bootcamp Desafío Latam. Aplicación con componentes, estado y rutas.",
    tags: ["React", "JavaScript", "CSS"],
    code: "https://github.com/jorgiahannydev/HITO-8-REACT",
    placeholder: "React",
  },
  {
    img: "", alt: "My E-commerce", title: "My E-commerce",
    description: "Tienda online con catálogo de productos, diseño visual y estructura de e-commerce.",
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/jorgiahannydev/My-e-comerce",
    placeholder: "E-commerce",
  },
  {
    img: "/img/codigo.png", alt: "CV Web Personal", title: "CV Web Personal",
    description: "Sitio web de currículum vitae con diseño responsive, secciones interactivas y navegación por anclas.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    demo: "https://jorgiahannydev.github.io",
    code: "https://github.com/jorgiahannydev/jorgiahannydev.github.io",
  },
  {
    img: "", alt: "Desafío V JavaScript", title: "Desafío V — JavaScript",
    description: "Ejercicio avanzado de JavaScript vanilla del Bootcamp Desafío Latam.",
    tags: ["JavaScript", "HTML", "CSS"],
    code: "https://github.com/jorgiahannydev/Desaf-o-V-Js",
    placeholder: "JavaScript",
  },
];

const workPhotos = [
  { img: "/img/escuela.jpg", alt: "Docencia",  title: "U.E. Francisco de Miranda", description: "Actividad escolar con niños de educación básica." },
  { img: "/img/spa.png",     alt: "NailsChic", title: "NailsChic Spa — La Serena", description: "Realización de servicios estéticos integrales." },
  { img: "/img/FACIAL.png",  alt: "Göler",     title: "Göler Beauty & co.",        description: "Perfeccionamiento en estética facial y corporal." },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <div
      className="group relative overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-300"
      style={{
        backgroundColor: "#fdf9f3",
        border: "1px solid rgba(200,144,58,0.22)",
        boxShadow: "0 2px 10px rgba(122,30,62,0.07)",
      }}
    >
      {/* Icono botánico decorativo superpuesto */}
      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 text-3xl pointer-events-none"
        style={{ color: "#7a1e3e" }}>
        ❧
      </div>

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
          style={{ background: "linear-gradient(160deg, #7a1e3e 0%, #c8903a 100%)" }}
        >
          <span
            className="font-bold text-2xl tracking-widest italic group-hover:scale-105 transition-transform duration-500 inline-block"
            style={{ fontFamily: "var(--font-newsreader)", color: "#fdf9f3" }}
          >
            {p.placeholder}
          </span>
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        <span className="b-label text-[0.65rem] mb-1">{p.tags[0]}</span>
        <h4
          className="font-semibold mb-2 text-base italic"
          style={{ fontFamily: "var(--font-newsreader)", color: "#7a1e3e" }}
        >
          {p.title}
        </h4>
        <p className="text-sm leading-relaxed mb-3 flex-1" style={{ color: "#3d1520" }}>{p.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {p.tags.map((t) => (
            <span key={t} className="text-xs px-2.5 py-0.5 font-medium"
              style={{ border: "1px solid rgba(200,144,58,0.5)", color: "#a06820", backgroundColor: "#fef9f0" }}>
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap">
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noopener noreferrer"
              className="text-xs font-semibold px-3 py-1.5 transition-opacity hover:opacity-75"
              style={{ backgroundColor: "#7a1e3e", color: "#fdf9f3" }}>
              Ver demo
            </a>
          )}
          {p.code && (
            <a href={p.code} target="_blank" rel="noopener noreferrer"
              className="text-xs font-semibold px-3 py-1.5 transition-colors hover:bg-[rgba(122,30,62,0.06)]"
              style={{ border: "1px solid #7a1e3e", color: "#7a1e3e" }}>
              Ver código
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-24" style={{ backgroundColor: "#f7f3ed" }}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center italic" style={{ fontFamily: "var(--font-newsreader)", color: "#7a1e3e" }}>Portafolio</h2>
        <div className="b-section-line">
          <span style={{ color: "#c8903a", fontSize: "1rem" }}>❦</span>
        </div>

        <p className="b-label mb-5">❧ &nbsp; Proyectos de Desarrollo Web</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {techProjects.map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>

        <p className="b-label mb-5">❧ &nbsp; Trayectoria Profesional</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {workPhotos.map((p) => (
            <div
              key={p.title}
              className="group overflow-hidden hover:-translate-y-1 transition-all duration-300"
              style={{
                backgroundColor: "#fdf9f3",
                border: "1px solid rgba(200,144,58,0.22)",
                boxShadow: "0 2px 10px rgba(122,30,62,0.07)",
              }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={p.img} alt={p.alt} fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-sm mb-1 italic" style={{ fontFamily: "var(--font-newsreader)", color: "#7a1e3e" }}>{p.title}</h4>
                <p className="text-sm" style={{ color: "#3d1520" }}>{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
