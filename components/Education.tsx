const items = [
  { title: "Full Stack Developer",                                                           institution: "Plataforma Desafío Latam",                                date: "2025 — 2026 (en curso)" },
  { title: "Cosmetología y Estética Integral",                                               institution: "Bliss Spa",                                               date: "2022 — 2024" },
  { title: "Proyecto de perfeccionamiento — Estética Facial y Corporal",                    institution: "Göler Beauty & co.",                                      date: "Ene 2024" },
  { title: "Excel Avanzado",                                                                 institution: "Crenn Consultores",                                       date: "2022" },
  { title: "Técnico Superior Universitario en Educación — mención Lengua y Literatura",     institution: "Instituto Pedagógico de Miranda José Manuel Siso Martínez", date: "2013 — 2018" },
  { title: "Técnico Medio en Química Industrial",                                            institution: "U.E.E.N Luis Beltrán Prieto Figueroa",                    date: "2011 — 2013" },
];

export default function Education() {
  return (
    <section id="educacion" className="py-24" style={{ backgroundColor: "#fdf9f3" }}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center italic" style={{ fontFamily: "var(--font-newsreader)", color: "#7a1e3e" }}>
          Educación
        </h2>
        <div className="b-section-line">
          <span style={{ color: "#c8903a", fontSize: "1rem" }}>❦</span>
        </div>

        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
              style={{
                backgroundColor: "#fef9f3",
                borderLeft: "4px solid #c8903a",
                boxShadow: "0 1px 8px rgba(122,30,62,0.07)",
              }}
            >
              <div>
                <h3
                  className="font-semibold text-sm leading-snug italic"
                  style={{ fontFamily: "var(--font-newsreader)", color: "#7a1e3e" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm mt-0.5" style={{ color: "#9a4060", fontFamily: "var(--font-lora)" }}>
                  {item.institution}
                </p>
              </div>
              <span
                className="text-xs italic whitespace-nowrap"
                style={{ fontFamily: "var(--font-newsreader)", color: "#c8903a" }}
              >
                {item.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
