const groups = [
  {
    label: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"],
    learning: false,
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "SQL"],
    learning: false,
  },
  {
    label: "Herramientas",
    skills: ["Git", "GitHub", "VS Code", "Vercel"],
    learning: false,
  },
  {
    label: "En aprendizaje",
    skills: ["Next.js", "TypeScript", "React Native"],
    learning: true,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-2">
          Habilidades Técnicas
        </h2>
        <div className="w-12 h-1 bg-pink-300 rounded mx-auto mb-10" />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {groups.map((g) => (
            <div key={g.label}>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                {g.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className={
                      g.learning
                        ? "text-xs font-medium px-3 py-1 rounded-full border border-pink-300 text-pink-400"
                        : "text-xs font-medium px-3 py-1 rounded-full bg-slate-800 text-white"
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
