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
    date: "Jul 2024 — Presente",
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

export default function Experience() {
  return (
    <section id="experiencia" className="py-16" style={{ backgroundColor: "#fce8ed" }}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center" style={{ color: "#7a1e3e" }}>
          Experiencia Laboral
        </h2>
        <div className="b-section-line">
          <span style={{ color: "#c8903a", fontSize: "0.65rem" }}>✦</span>
        </div>

        <div className="flex flex-col gap-4">
          {jobs.map((job) => (
            <div
              key={job.title + job.date}
              className="rounded-xl px-6 py-5"
              style={{
                backgroundColor: "#fff8fa",
                borderLeft: "4px solid #c8903a",
                boxShadow: "0 1px 8px rgba(122,30,62,0.08)",
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="font-bold text-base" style={{ color: "#7a1e3e" }}>
                    {job.title}
                  </h3>
                  <p className="text-sm italic mt-0.5" style={{ color: "#9a4060" }}>
                    {job.company}
                  </p>
                </div>
                <span className="text-xs italic whitespace-nowrap pt-0.5" style={{ color: "#c8903a" }}>
                  {job.date}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1.5">
                {job.items.map((item) => (
                  <li key={item} className="text-sm leading-relaxed" style={{ color: "#3d1520" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
