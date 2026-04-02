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
      <SectionOrnaments opacity={0.4} />
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center italic" style={{ fontFamily: "var(--font-newsreader)", color: "#7a1e3e" }}>
          Habilidades Técnicas
        </h2>
        <div className="b-section-line">
          <span style={{ color: "#c8903a", fontSize: "1rem" }}>❦</span>
        </div>

        <div
          className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          style={{
            backgroundColor: "#fdf9f3",
            border: "1px solid rgba(200,144,58,0.25)",
            boxShadow: "0 2px 12px rgba(122,30,62,0.07)",
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
                            border: "1.5px solid #c8903a",
                            color: "#9a6520",
                            backgroundColor: "#fef9f0",
                            fontFamily: "var(--font-lora)",
                          }
                        : {
                            backgroundColor: "#7a1e3e",
                            color: "#fdf9f3",
                            fontFamily: "var(--font-lora)",
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
