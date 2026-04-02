export default function Hero() {
  return (
    <section
      id="presentacion"
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 pb-16 overflow-hidden"
      style={{ backgroundColor: "#fdf9f3" }}
    >
      {/* Corchetes decorativos de esquina */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex justify-between px-4 md:px-20 py-40">
        <div
          className="w-64 h-64 border-t-2 border-l-2"
          style={{ borderColor: "#c8903a", borderRadius: "100px 0 0 0" }}
        />
        <div
          className="w-64 h-64 border-b-2 border-r-2 self-end"
          style={{ borderColor: "#c8903a", borderRadius: "0 0 100px 0" }}
        />
      </div>

      <div className="max-w-4xl w-full text-center z-10 space-y-10">

        {/* Etiqueta con borde-y — idéntico a Stitch */}
        <div
          className="inline-block px-4 py-1"
          style={{
            borderTop: "1px solid rgba(200,144,58,0.35)",
            borderBottom: "1px solid rgba(200,144,58,0.35)",
          }}
        >
          <span className="b-label">Currículum Vitae</span>
        </div>

        {/* Nombre: ENORME, italic, elemento principal de la página */}
        <h1
          className="italic leading-tight"
          style={{
            fontFamily: "var(--font-newsreader)",
            fontWeight: 600,
            color: "#7a1e3e",
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
          }}
        >
          Jorgiahanny Almea Martínez
        </h1>

        {/* Tarjeta enmarcada con ornamentos — solo rol + stack + botones */}
        <div
          className="relative p-8 md:p-14 border shadow-sm max-w-2xl mx-auto"
          style={{
            backgroundColor: "#f7f3ed",
            borderColor: "rgba(200,144,58,0.25)",
            boxShadow: "0 2px 20px rgba(122,30,62,0.08)",
          }}
        >
          {/* Ornamentos botánicos en esquinas */}
          <div
            className="absolute -top-4 -left-4 w-9 h-9 flex items-center justify-center rounded-full text-lg"
            style={{ backgroundColor: "#fdf9f3", border: "1px solid rgba(200,144,58,0.4)", color: "#c8903a" }}
          >
            ❧
          </div>
          <div
            className="absolute -bottom-4 -right-4 w-9 h-9 flex items-center justify-center rounded-full text-lg"
            style={{ backgroundColor: "#fdf9f3", border: "1px solid rgba(200,144,58,0.4)", color: "#c8903a" }}
          >
            ❧
          </div>

          <h2
            className="text-2xl md:text-3xl font-semibold italic mb-5"
            style={{ fontFamily: "var(--font-newsreader)", color: "#3d1520" }}
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
            style={{ color: "#524348", fontSize: "1rem", fontFamily: "var(--font-lora)" }}
          >
            Desarrolladora Web Full Stack en formación, combinando precisión técnica
            y una mirada multidisciplinaria para crear experiencias digitales de calidad.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#sobre-mi" className="btn-bridgerton-primary shadow">
              Conocer más
            </a>
            <a href="#contacto" className="btn-bridgerton-outline">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
