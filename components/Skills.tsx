const groups = [
  { label: "Frontend",       skills: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"], learning: false },
  { label: "Backend",        skills: ["Node.js", "Express", "SQL"],                         learning: false },
  { label: "Herramientas",   skills: ["Git", "GitHub", "VS Code", "Vercel"],                learning: false },
  { label: "En aprendizaje", skills: ["Next.js", "TypeScript", "React Native"],             learning: true  },
];

import SectionOrnaments from "./SectionOrnaments";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden" style={{ backgroundColor: "#f7f3ed" }}>
      <SectionOrnaments opacity={0.82} />
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center italic" style={{ fontFamily: "var(--font-newsreader)", color: "#800020" }}>
          Habilidades Técnicas
        </h2>
        <div className="b-section-line">
          <span style={{ color: "#C5A059", fontSize: "1rem" }}>❦</span>
        </div>

        <div
          className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          style={{
            backgroundColor: "#fdf9f3",
            border: "1px solid rgba(197,160,89,0.22)",
            boxShadow: "0 12px 32px rgba(28,28,24,0.06)",
          }}
        >
          {groups.map((g) => (
            <div key={g.label}>
              <p className="b-label mb-3">{g.label}</p>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="text-sm font-medium px-3 py-1"
                    style={
                      g.learning
                        ? {
                            border: "1.5px solid #C5A059",
                            color: "#775a19",
                            backgroundColor: "#fdf9f3",
                            fontFamily: "var(--font-noto-serif)",
                            borderRadius: "4px",
                          }
                        : {
                            backgroundColor: "#800020",
                            color: "#fdf9f3",
                            fontFamily: "var(--font-noto-serif)",
                            borderRadius: "4px",
                          }
                    }
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
