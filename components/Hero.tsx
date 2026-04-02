import SectionOrnaments from "./SectionOrnaments";

export default function Hero() {
  return (
    <section
      id="presentacion"
      className="relative min-h-screen flex items-center justify-center pt-32 px-6 pb-16 overflow-hidden"
      style={{ backgroundColor: "#fdf9f3" }}
    >
      <SectionOrnaments />

      {/* Corchetes decorativos de esquina (fondo) */}
      <div className="absolute inset-0 pointer-events-none opacity-15 flex justify-between px-4 md:px-20 py-36">
        <div
          className="w-72 h-72 border-t-2 border-l-2"
          style={{ borderColor: "#C5A059", borderRadius: "120px 0 0 0" }}
        />
        <div
          className="w-72 h-72 border-b-2 border-r-2 self-end"
          style={{ borderColor: "#C5A059", borderRadius: "0 0 120px 0" }}
        />
      </div>

      <div className="max-w-4xl w-full text-center z-10 space-y-10">

        {/* Etiqueta superior — borde doble */}
        <div
          className="inline-block px-5 py-1.5"
          style={{
            borderTop:    "1px solid rgba(197,160,89,0.5)",
            borderBottom: "1px solid rgba(197,160,89,0.5)",
          }}
        >
          <span className="b-label" style={{ letterSpacing: "0.35em" }}>Currículum Vitae</span>
        </div>

        {/* Nombre principal */}
        <h1
          className="italic leading-tight"
          style={{
            fontFamily: "var(--font-newsreader)",
            fontWeight: 600,
            color: "#8e4766",
            fontSize: "clamp(2.8rem, 8vw, 5.8rem)",
            textShadow: "0 2px 16px rgba(128,0,32,0.08)",
          }}
        >
          Jorgiahanny Almea Martínez
        </h1>

        {/* Tarjeta principal — doble marco victoriano */}
        <div className="relative max-w-2xl mx-auto">
          {/* Marco exterior — burgundy */}
          <div
            className="absolute -inset-2"
            style={{ border: "1px solid rgba(128,0,32,0.18)" }}
          />
          {/* Marco interior — gold */}
          <div
            className="absolute -inset-0.5"
            style={{ border: "1px solid rgba(197,160,89,0.32)" }}
          />

          {/* Tarjeta */}
          <div
            className="relative p-8 md:p-14"
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "0 12px 32px rgba(28,28,24,0.06)",
            }}
          >
            {/* Ornamentos de esquina de la tarjeta */}
            {["-top-4 -left-4", "-top-4 -right-4", "-bottom-4 -left-4", "-bottom-4 -right-4"].map((pos) => (
              <div
                key={pos}
                className={`absolute ${pos} w-10 h-10 flex items-center justify-center`}
                style={{
                  backgroundColor: "#fdf9f3",
                  border: "1px solid rgba(197,160,89,0.5)",
                  color: "#C5A059",
                  fontSize: "1.1rem",
                }}
              >
                ❧
              </div>
            ))}

            <h2
              className="text-2xl md:text-3xl font-semibold italic mb-5"
              style={{ fontFamily: "var(--font-newsreader)", color: "#8e4766" }}
            >
              Full Stack Developer Jr.
            </h2>

            {/* Stack tecnológico */}
            <div className="b-divider mb-6">
              <span className="b-label" style={{ letterSpacing: "0.22em" }}>
                HTML &nbsp;·&nbsp; CSS &nbsp;·&nbsp; JavaScript &nbsp;·&nbsp; React &nbsp;·&nbsp; Node.js
              </span>
            </div>

            <p
              className="leading-relaxed mb-8 text-center"
              style={{ color: "#524348", fontSize: "1rem", fontFamily: "var(--font-noto-serif)" }}
            >
              Desarrolladora Web Full Stack en formación, combinando precisión técnica
              y una mirada multidisciplinaria para crear experiencias digitales de calidad.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="#sobre-mi" className="btn-bridgerton-primary shadow">
                Conocer más
              </a>
              <a href="#contacto" className="btn-bridgerton-outline">
                Correspondencia
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
