import Image from "next/image";

export default function Hero() {
  return (
    <section id="presentacion" className="pt-28 pb-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Image
          src="/img/cv.png"
          alt="Foto de perfil de Jorgiahanny Almea"
          width={180}
          height={180}
          className="rounded-full mx-auto mb-6 object-cover border-4 border-sky-400 shadow-md"
          priority
        />
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
          Jorgiahanny Almea Martínez
        </h1>
        <p className="text-sky-500 font-semibold text-lg mb-4">
          Full Stack Developer Jr.&nbsp;&nbsp;|&nbsp;&nbsp;HTML · CSS · JavaScript · React · Node.js
        </p>
        <p className="text-gray-600 leading-relaxed text-justify mb-8">
          Desarrolladora Web Full Stack en formación con sólida experiencia previa en atención al
          cliente, coordinación logística, ventas y estética. Me destaco por mi capacidad de
          aprendizaje rápido, comunicación efectiva y resolución de problemas. Actualmente curso el
          programa Full Stack en Desafío Latam, desarrollando proyectos con HTML, CSS, JavaScript,
          React, Node.js y bases de datos relacionales. Busco incorporarme a un equipo de desarrollo
          como Junior Developer donde pueda seguir creciendo y aportar desde una mirada
          multidisciplinaria.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/cv.pdf"
            download
            className="bg-sky-500 hover:bg-sky-600 active:scale-95 text-white font-semibold px-6 py-2.5 rounded-lg transition-all shadow"
          >
            Descargar CV
          </a>
          <a
            href="#contacto"
            className="border-2 border-slate-400 hover:border-sky-400 hover:text-sky-500 active:scale-95 text-slate-600 font-semibold px-6 py-2.5 rounded-lg transition-all"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
}
