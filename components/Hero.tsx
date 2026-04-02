import Image from "next/image";

export default function Hero() {
  return (
    <section id="presentacion" className="pt-28 pb-16" style={{ backgroundColor: "#fce8ed" }}>
      <div className="max-w-3xl mx-auto px-6 text-center">

        <Image
          src="/img/cv.png"
          alt="Foto de perfil de Jorgiahanny Almea"
          width={185}
          height={185}
          className="rounded-full mx-auto mb-5 object-cover shadow-lg"
          style={{ border: "5px solid #c8903a" }}
          priority
        />

        {/* Ornamento ✦ */}
        <p className="b-label mb-4">✦ &nbsp; Full Stack Developer Jr. &nbsp; ✦</p>

        {/* Nombre: elemento principal */}
        <h1
          className="font-bold leading-tight mb-3"
          style={{
            fontFamily: "var(--font-playfair)",
            color: "#7a1e3e",
            fontSize: "clamp(2rem, 5vw, 3rem)",
          }}
        >
          Jorgiahanny Almea Martínez
        </h1>

        {/* Stack tecnológico */}
        <div className="b-divider">
          <span className="b-label" style={{ letterSpacing: "0.25em" }}>
            HTML &nbsp;·&nbsp; CSS &nbsp;·&nbsp; JavaScript &nbsp;·&nbsp; React &nbsp;·&nbsp; Node.js
          </span>
        </div>

        {/* Descripción */}
        <p
          className="leading-relaxed text-justify mb-8"
          style={{ color: "#3d1520", fontSize: "1.05rem", lineHeight: "1.85" }}
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
    </section>
  );
}
