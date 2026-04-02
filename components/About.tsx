import Image from "next/image";
import SectionOrnaments from "./SectionOrnaments";

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-24 px-6 overflow-hidden" style={{ backgroundColor: "#fdf9f3" }}>
      <SectionOrnaments opacity={0.4} />
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Foto con doble marco — efecto parallax Stitch */}
        <div className="relative group">
          <div
            className="absolute -inset-4 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"
            style={{ border: "1px solid rgba(200,144,58,0.3)" }}
          />
          <div
            className="overflow-hidden shadow-xl aspect-[4/5] relative"
            style={{ backgroundColor: "#f1ede7" }}
          >
            <Image
              src="/img/cv.png"
              alt="Retrato de Jorgiahanny Almea Martínez"
              fill
              className="object-cover"
              style={{ filter: "grayscale(15%)" }}
            />
          </div>
        </div>

        {/* Texto */}
        <div className="space-y-7">
          <h2
            className="text-4xl md:text-5xl italic leading-tight"
            style={{ fontFamily: "var(--font-newsreader)", color: "#7a1e3e", fontWeight: 600 }}
          >
            Una Trayectoria Multidisciplinaria
          </h2>

          <div
            className="space-y-5 leading-relaxed"
            style={{ fontFamily: "var(--font-lora)", color: "#524348", fontSize: "1rem" }}
          >
            <p>
              Desarrolladora Web Full Stack en formación, con sólida experiencia previa en
              atención al cliente, coordinación logística, ventas y estética. Una combinación
              que aporta perspectiva y empatía real al desarrollo de productos digitales.
            </p>
            <p>
              Actualmente cursando el programa Full Stack en Desafío Latam, con proyectos
              desarrollados en HTML, CSS, JavaScript, React, Node.js y bases de datos
              relacionales. Busco incorporarme como Junior Developer donde seguir creciendo
              y aportar desde una mirada única.
            </p>
          </div>

          {/* Divisor con stats — igual que Stitch */}
          <div
            className="pt-6 flex gap-12"
            style={{ borderTop: "1px solid rgba(200,144,58,0.2)" }}
          >
            <div>
              <span
                className="block text-2xl"
                style={{ fontFamily: "var(--font-newsreader)", color: "#c8903a", fontWeight: 600 }}
              >
                2+
              </span>
              <span className="b-label text-[0.68rem]">Años en formación</span>
            </div>
            <div>
              <span
                className="block text-2xl"
                style={{ fontFamily: "var(--font-newsreader)", color: "#c8903a", fontWeight: 600 }}
              >
                5+
              </span>
              <span className="b-label text-[0.68rem]">Proyectos completados</span>
            </div>
            <div>
              <span
                className="block text-2xl"
                style={{ fontFamily: "var(--font-newsreader)", color: "#c8903a", fontWeight: 600 }}
              >
                7+
              </span>
              <span className="b-label text-[0.68rem]">Años de experiencia</span>
            </div>
          </div>

          <a href="/cv.pdf" download className="btn-bridgerton-primary inline-block shadow">
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
