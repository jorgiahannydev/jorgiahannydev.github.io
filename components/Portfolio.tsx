import Image from "next/image";
import PortfolioCarousel from "./PortfolioCarousel";

const workPhotos = [
  { img: "/img/escuela.jpg", alt: "Docencia",  title: "U.E. Francisco de Miranda", description: "Actividad escolar con niños de educación básica." },
  { img: "/img/spa.png",     alt: "NailsChic", title: "NailsChic Spa — La Serena", description: "Realización de servicios estéticos integrales." },
  { img: "/img/FACIAL.png",  alt: "Göler",     title: "Göler Beauty & co.",        description: "Perfeccionamiento en estética facial y corporal." },
];

import SectionOrnaments from "./SectionOrnaments";

export default function Portfolio() {
  return (
    <section id="portafolio" className="relative py-24 overflow-hidden" style={{ backgroundColor: "#ede5d8" }}>
      <SectionOrnaments opacity={0.82} />
      <div className="max-w-5xl mx-auto px-6">

        {/* Carrusel con flechas (componente cliente) */}
        <PortfolioCarousel />

        {/* Divisor ❦ */}
        <div className="b-section-line my-14">
          <span style={{ color: "#b8891f", fontSize: "1rem" }}>❦</span>
        </div>

        {/* Trayectoria profesional — grid estático */}
        <p className="b-label mb-6">❧ &nbsp; Trayectoria Profesional</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {workPhotos.map((p) => (
            <div
              key={p.title}
              className="group overflow-hidden hover:-translate-y-1 transition-all duration-300"
              style={{
                backgroundColor: "#f5efe6",
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
                <h4
                  className="font-semibold text-sm mb-1 italic"
                  style={{ fontFamily: "var(--font-newsreader)", color: "#3d0a1e" }}
                >
                  {p.title}
                </h4>
                <p className="text-sm" style={{ color: "#3a2428", fontFamily: "var(--font-lora)" }}>
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
