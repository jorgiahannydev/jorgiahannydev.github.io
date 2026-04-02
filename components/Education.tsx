const items = [
  { title: "Full Stack Developer",                                                           institution: "Plataforma Desafío Latam",                                date: "2025 — 2026 (en curso)" },
  { title: "Cosmetología y Estética Integral",                                               institution: "Bliss Spa",                                               date: "2022 — 2024" },
  { title: "Proyecto de perfeccionamiento — Estética Facial y Corporal",                    institution: "Göler Beauty & co.",                                      date: "Ene 2024" },
  { title: "Excel Avanzado",                                                                 institution: "Crenn Consultores",                                       date: "2022" },
  { title: "Técnico Superior Universitario en Educación — mención Lengua y Literatura",     institution: "Instituto Pedagógico de Miranda José Manuel Siso Martínez", date: "2013 — 2018" },
  { title: "Técnico Medio en Química Industrial",                                            institution: "U.E.E.N Luis Beltrán Prieto Figueroa",                    date: "2011 — 2013" },
];

import SectionOrnaments from "./SectionOrnaments";

export default function Education() {
  return (
    <section id="educacion" className="relative py-24 overflow-hidden" style={{ backgroundColor: "#fdf9f3" }}>
      <SectionOrnaments opacity={0.82} />
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center italic" style={{ fontFamily: "var(--font-newsreader)", color: "#800020" }}>
          Educación
        </h2>
        <div className="b-section-line">
          <span style={{ color: "#C5A059", fontSize: "1rem" }}>❦</span>
        </div>

        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
              style={{
                backgroundColor: "#f1ede7",
                borderLeft: "4px solid #C5A059",
                boxShadow: "0 12px 32px rgba(28,28,24,0.04)",
                borderRadius: "0 4px 4px 0",
              }}
            >
              <div>
                <h3
                  className="font-semibold text-sm leading-snug italic"
                  style={{ fontFamily: "var(--font-newsreader)", color: "#800020" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm mt-0.5" style={{ color: "#D886A7", fontFamily: "var(--font-noto-serif)" }}>
                  {item.institution}
                </p>
              </div>
              <span
                className="text-xs italic whitespace-nowrap"
                style={{ fontFamily: "var(--font-newsreader)", color: "#C5A059" }}
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
