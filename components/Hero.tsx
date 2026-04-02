import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="presentacion"
      className="relative pt-28 pb-16 overflow-hidden"
      style={{ backgroundColor: "#fdf9f3" }}
    >
      {/* Corchetes decorativos de esquina — estilo Stitch */}
      <div className="absolute inset-0 pointer-events-none opacity-30 flex justify-between px-6 md:px-16 py-28">
        <div
          className="w-20 h-20 border-t-2 border-l-2"
          style={{ borderColor: "#c8903a", borderRadius: "32px 0 0 0" }}
        />
        <div
          className="w-20 h-20 border-b-2 border-r-2 self-end"
          style={{ borderColor: "#c8903a", borderRadius: "0 0 32px 0" }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">

        {/* Etiqueta superior con borde-y dorado */}
        <div
          className="inline-block px-5 py-1 mb-6"
          style={{
            borderTop: "1px solid rgba(200,144,58,0.5)",
            borderBottom: "1px solid rgba(200,144,58,0.5)",
          }}
        >
          <span className="b-label">Currículum Vitae</span>
        </div>

        {/* Nombre: elemento principal — Newsreader italic */}
        <h1
          className="italic leading-tight mb-6"
          style={{
            fontFamily: "var(--font-newsreader)",
            fontWeight: 600,
            color: "#7a1e3e",
            fontSize: "clamp(2.2rem, 5vw, 3.3rem)",
          }}
        >
          Jorgiahanny Almea Martínez
        </h1>

        {/* Tarjeta enmarcada con ornamentos en esquinas */}
        <div
          className="relative px-8 md:px-12 py-10 mx-auto"
          style={{
            backgroundColor: "#f7f3ed",
            border: "1px solid rgba(200,144,58,0.3)",
            boxShadow: "0 4px 20px rgba(122,30,62,0.08)",
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

          {/* Foto */}
          <Image
            src="/img/cv.png"
            alt="Foto de perfil de Jorgiahanny Almea"
            width={170}
            height={170}
            className="rounded-full mx-auto mb-5 object-cover shadow-lg"
            style={{ border: "5px solid #c8903a" }}
            priority
          />

          {/* Rol */}
          <p className="b-label mb-3">✦ &nbsp; Full Stack Developer Jr. &nbsp; ✦</p>

          {/* Stack tecnológico */}
          <div className="b-divider mb-6">
            <span className="b-label" style={{ letterSpacing: "0.22em" }}>
              HTML &nbsp;·&nbsp; CSS &nbsp;·&nbsp; JavaScript &nbsp;·&nbsp; React &nbsp;·&nbsp; Node.js
            </span>
          </div>

          {/* Descripción */}
          <p
            className="leading-relaxed text-justify mb-8"
            style={{ color: "#3d1520", fontSize: "1rem", lineHeight: "1.85" }}
          >
            Desarrolladora Web Full Stack en formación con sólida experiencia previa en atención al
            cliente, coordinación logística, ventas y estética. Me destaco por mi capacidad de
            aprendizaje rápido, comunicación efectiva y resolución de problemas. Actualmente curso el
            programa Full Stack en Desafío Latam, desarrollando proyectos con HTML, CSS, JavaScript,
            React, Node.js y bases de datos relacionales. Busco incorporarme a un equipo de desarrollo
            como Junior Developer donde pueda seguir creciendo y aportar desde una mirada
            multidisciplinaria.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/cv.pdf" download className="btn-bridgerton-primary shadow">
              Descargar CV
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
