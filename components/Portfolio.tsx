import Image from "next/image";

type Project = {
  img: string;
  alt: string;
  title: string;
  description: string;
  tags: string[];
  demo?: string;
  code?: string;
  placeholder?: string;
};

const techProjects: Project[] = [
  {
    img: "/img/codigo.png",
    alt: "Premium Dental — sitio web de clínica dental",
    title: "Premium Dental",
    description:
      "Sitio web para clínica dental con diseño profesional, secciones de servicios, equipo y contacto.",
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/jorgiahannydev/premiumdental",
  },
  {
    img: "",
    alt: "Hito 8 React",
    title: "Hito 8 — React",
    description:
      "Proyecto final del módulo React del Bootcamp Desafío Latam. Aplicación con componentes, estado y rutas.",
    tags: ["React", "JavaScript", "CSS"],
    code: "https://github.com/jorgiahannydev/HITO-8-REACT",
    placeholder: "React",
  },
  {
    img: "",
    alt: "My E-commerce",
    title: "My E-commerce",
    description:
      "Tienda online con catálogo de productos, diseño visual y estructura de e-commerce.",
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/jorgiahannydev/My-e-comerce",
    placeholder: "E-commerce",
  },
  {
    img: "/img/codigo.png",
    alt: "CV Web Personal",
    title: "CV Web Personal",
    description:
      "Sitio web de currículum vitae con diseño responsive, secciones interactivas y navegación por anclas.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    demo: "https://jorgiahannydev.github.io",
    code: "https://github.com/jorgiahannydev/jorgiahannydev.github.io",
  },
  {
    img: "",
    alt: "Desafío V JavaScript",
    title: "Desafío V — JavaScript",
    description: "Ejercicio avanzado de JavaScript vanilla del Bootcamp Desafío Latam.",
    tags: ["JavaScript", "HTML", "CSS"],
    code: "https://github.com/jorgiahannydev/Desaf-o-V-Js",
    placeholder: "JavaScript",
  },
];

const workPhotos = [
  {
    img: "/img/escuela.jpg",
    alt: "Docencia — Unidad Educativa Francisco de Miranda",
    title: "Unidad Educativa Francisco de Miranda",
    description: "Actividad escolar con niños de educación básica.",
  },
  {
    img: "/img/spa.png",
    alt: "Estética — NailsChic Spa, La Serena",
    title: "NailsChic Spa — La Serena",
    description: "Realización de servicios estéticos integrales.",
  },
  {
    img: "/img/FACIAL.png",
    alt: "Proyecto facial — Göler Beauty & co.",
    title: "Göler Beauty & co.",
    description: "Proyecto de perfeccionamiento en estética facial y corporal.",
  },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col">
      {p.img ? (
        <div className="relative h-44 w-full">
          <Image src={p.img} alt={p.alt} fill className="object-cover" />
        </div>
      ) : (
        <div className="h-44 bg-gradient-to-br from-slate-700 to-pink-400 flex items-center justify-center">
          <span className="text-white font-bold text-xl tracking-wide">{p.placeholder}</span>
        </div>
      )}
      <div className="p-4 flex flex-col flex-1">
        <h4 className="font-bold text-slate-800 mb-1">{p.title}</h4>
        <p className="text-gray-500 text-sm mb-3 flex-1">{p.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {p.tags.map((t) => (
            <span
              key={t}
              className="text-xs bg-pink-50 text-pink-500 border border-pink-200 px-2.5 py-0.5 rounded-full font-medium"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap">
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-pink-400 hover:bg-pink-500 text-white font-semibold px-3 py-1.5 rounded-lg transition-colors"
            >
              Ver demo
            </a>
          )}
          {p.code && (
            <a
              href={p.code}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-slate-800 hover:bg-slate-700 text-white font-semibold px-3 py-1.5 rounded-lg transition-colors"
            >
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
    <section id="portafolio" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-2">
          Portafolio
        </h2>
        <div className="w-12 h-1 bg-pink-300 rounded mx-auto mb-10" />

        <h3 className="text-base font-semibold text-slate-600 mb-4">Proyectos de Desarrollo Web</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {techProjects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        <h3 className="text-base font-semibold text-slate-600 mb-4">Trayectoria Profesional</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {workPhotos.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-44 w-full">
                <Image src={p.img} alt={p.alt} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-slate-800 text-sm mb-1">{p.title}</h4>
                <p className="text-gray-500 text-xs">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
