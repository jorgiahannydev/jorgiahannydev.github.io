const jobs = [
  {
    title: "Coordinadora Logística",
    company: "NIU Foods",
    date: "Oct 2025 — Presente",
    items: [
      "Registro, seguimiento y control de pedidos mediante herramientas digitales.",
      "Embalaje y verificación de calidad de los envíos antes del despacho.",
      "Coordinación con proveedores logísticos para la gestión y trazabilidad de entregas.",
      "Gestión del punto de entrega y cierre de órdenes en local.",
    ],
  },
  {
    title: "Copero Arrocero PM",
    company: "Niu Sushi",
    date: "Jun 2025 — Oct 2025",
    items: [
      "Alta eficiencia y compromiso sostenido en cada labor asignada.",
      "Apoyo transversal a distintas áreas operativas de la empresa según necesidad.",
      "Cumplimiento riguroso de normas sanitarias, manipulación de alimentos y código interno.",
      "Alto cumplimiento de KPIs establecidos por el área.",
    ],
  },
  {
    title: "Esteticista Integral",
    company: "Salón Patricia — Viña del Mar",
    date: "Jul 2024 — Jun 2025",
    items: [
      "Prestación de servicios estéticos integrales (manicura, pedicura, limpieza facial, tratamientos cosmetológicos, depilación).",
      "Gestión de agenda y base de datos de clientes mediante software especializado.",
      "Fidelización de clientes mediante trato personalizado y calidad de servicio.",
    ],
  },
  {
    title: "Esteticista Integral — Manicurista",
    company: "NailsChic Spa — La Serena",
    date: "Ene 2024 — Jun 2024",
    items: [
      "Prestación de servicios estéticos integrales (manicura, pedicura, limpieza facial, tratamientos cosmetológicos, depilación).",
      "Gestión de agenda y base de datos de clientes mediante software especializado.",
      "Fidelización de clientes mediante trato personalizado y calidad de servicio.",
    ],
  },
  {
    title: "Encargada de Tienda",
    company: "ARTHAS — La Serena",
    date: "Ago 2023 — Dic 2023",
    items: [
      "Venta presencial y a través de plataformas e-commerce.",
      "Ingreso y control de facturas, recepción y despacho de mercadería.",
      "Atención al cliente y soporte postventa.",
    ],
  },
  {
    title: "Recepcionista",
    company: "Inversiones Autodo Almar 2033 — Caracas, Venezuela",
    date: "May 2018 — May 2019",
    items: [
      "Recepción y guía de clientes, coordinación de citas y gestión de agenda de servicios.",
      "Manejo de caja, archivos administrativos y comunicación interna.",
    ],
  },
  {
    title: "Docente de Aula",
    company: "U.E.M Francisco de Miranda",
    date: "Sep 2016 — Abr 2018",
    items: [
      "Planificación y ejecución de actividades pedagógicas en educación inicial y básica.",
    ],
  },
];

import SectionOrnaments from "./SectionOrnaments";

export default function Experience() {
  return (
    <section id="experiencia" className="relative py-24 overflow-hidden" style={{ backgroundColor: "#fdf9f3" }}>
      <SectionOrnaments opacity={0.82} />
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center italic" style={{ fontFamily: "var(--font-newsreader)", color: "#800020" }}>
          Experiencia Laboral
        </h2>
        <p className="text-center b-label mt-3 mb-2">Una trayectoria de logros</p>
        <div className="b-section-line">
          <span style={{ color: "#C5A059", fontSize: "1rem" }}>❦</span>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 ml-2" style={{ borderLeft: "2px solid rgba(142,71,102,0.2)" }}>
          {jobs.map((job, i) => (
            <div key={job.title + job.date} className={`relative ${i < jobs.length - 1 ? "mb-10" : ""}`}>

              {/* Punto en la línea */}
              <div
                className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-4"
                style={{
                  backgroundColor: i % 2 === 0 ? "#800020" : "#C5A059",
                  borderColor: "#fdf9f3",
                  boxShadow: "0 0 0 1px rgba(142,71,102,0.25)",
                }}
              />

              {/* Fecha */}
              <span
                className="block text-sm italic mb-0.5"
                style={{ fontFamily: "var(--font-playfair)", color: "#C5A059" }}
              >
                {job.date}
              </span>

              {/* Título */}
              <h3
                className="font-bold text-base leading-snug"
                style={{ fontFamily: "var(--font-playfair)", color: "#800020" }}
              >
                {job.title}
              </h3>

              {/* Empresa */}
              <p className="text-sm italic mb-3" style={{ color: "#8e4766" }}>
                {job.company}
              </p>

              {/* Descripción */}
              <div
                className="px-5 py-4"
                style={{
                  backgroundColor: "#f1ede7",
                  borderLeft: "3px solid " + (i % 2 === 0 ? "#800020" : "#C5A059"),
                  boxShadow: "0 12px 32px rgba(28,28,24,0.04)",
                  borderRadius: "0 4px 4px 0",
                }}
              >
                <ul className="list-disc list-inside space-y-1">
                  {job.items.map((item) => (
                    <li key={item} className="text-sm leading-relaxed" style={{ color: "#1c1c18" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
