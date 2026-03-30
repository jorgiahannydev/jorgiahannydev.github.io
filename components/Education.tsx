const items = [
  {
    title: "Full Stack Developer",
    institution: "Plataforma Desafío Latam",
    date: "2025 — 2026 (en curso)",
  },
  {
    title: "Cosmetología y Estética Integral",
    institution: "Bliss Spa",
    date: "2022 — 2024",
  },
  {
    title: "Proyecto de perfeccionamiento — Estética Facial y Corporal",
    institution: "Göler Beauty & co.",
    date: "Ene 2024",
  },
  {
    title: "Excel Avanzado",
    institution: "Crenn Consultores",
    date: "2022",
  },
  {
    title: "Técnico Superior Universitario en Educación — mención Lengua y Literatura",
    institution: "Instituto Pedagógico de Miranda José Manuel Siso Martínez",
    date: "2013 — 2018",
  },
  {
    title: "Técnico Medio en Química Industrial",
    institution: "U.E.E.N Luis Beltrán Prieto Figueroa",
    date: "2011 — 2013",
  },
];

export default function Education() {
  return (
    <section id="educacion" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-2">
          Educación
        </h2>
        <div className="w-12 h-1 bg-sky-400 rounded mx-auto mb-10" />

        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl border-l-4 border-sky-400 shadow-sm px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
            >
              <div>
                <h3 className="font-bold text-slate-800 text-sm">{item.title}</h3>
                <p className="text-sky-500 font-medium text-xs mt-0.5">{item.institution}</p>
              </div>
              <span className="text-gray-400 text-xs italic whitespace-nowrap">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
