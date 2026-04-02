import Image from "next/image";
import SectionOrnaments from "./SectionOrnaments";

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-24 px-6 overflow-hidden" style={{ backgroundColor: "#f5efe6" }}>
      <SectionOrnaments opacity={0.82} />
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Marco de pintura victoriana */}
        <div className="flex flex-col items-center gap-0">

          {/* ── Marco exterior: madera oscura tallada ── */}
          <div
            className="relative group"
            style={{
              padding: "18px",
              background: "linear-gradient(145deg, #3a0c16 0%, #1e0608 35%, #2a0a12 65%, #3a0c16 100%)",
              boxShadow:
                "0 12px 48px rgba(20,4,8,0.55), " +
                "0 4px 16px rgba(20,4,8,0.35), " +
                "inset 0 2px 3px rgba(255,255,255,0.07), " +
                "inset 0 -2px 4px rgba(0,0,0,0.45), " +
                "inset 2px 0 3px rgba(255,255,255,0.04), " +
                "inset -2px 0 4px rgba(0,0,0,0.35)",
            }}
          >
            {/* Ornamentos de esquina en el marco exterior */}
            {(["tl","tr","bl","br"] as const).map((pos) => (
              <span
                key={pos}
                className="absolute text-xs pointer-events-none select-none"
                style={{
                  color: "#b8891f",
                  opacity: 0.75,
                  fontSize: "1.1rem",
                  lineHeight: 1,
                  ...(pos === "tl" && { top: "4px",    left:  "5px" }),
                  ...(pos === "tr" && { top: "4px",    right: "5px" }),
                  ...(pos === "bl" && { bottom: "4px", left:  "5px" }),
                  ...(pos === "br" && { bottom: "4px", right: "5px" }),
                }}
              >
                ✦
              </span>
            ))}

            {/* ── Borde dorado gilded ── */}
            <div
              style={{
                padding: "5px",
                background:
                  "linear-gradient(135deg, #f0c84a 0%, #b8891f 20%, #e8ba38 40%, #9a7218 60%, #d4a83a 80%, #b8891f 100%)",
                boxShadow: "inset 0 1px 2px rgba(255,255,255,0.3), inset 0 -1px 2px rgba(0,0,0,0.25)",
              }}
            >
              {/* ── Margen interior (passepartout) ── */}
              <div
                style={{
                  padding: "10px",
                  backgroundColor: "#f5efe6",
                  boxShadow: "inset 0 2px 10px rgba(20,4,8,0.18), inset 0 -1px 6px rgba(20,4,8,0.1)",
                }}
              >
                {/* ── Imagen ── */}
                <div className="overflow-hidden aspect-[4/5] relative" style={{ display: "block" }}>
                  <Image
                    src="/img/cv2.png"
                    alt="Retrato de Jorgiahanny Almea Martínez"
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    style={{ filter: "sepia(18%) contrast(1.04) brightness(0.97)" }}
                  />
                  {/* Viñeta interior del cuadro */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      boxShadow: "inset 0 0 40px rgba(20,4,8,0.28)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Plaqueta de museoa ── */}
          <div
            className="flex items-center gap-3 px-5 py-2 mt-0"
            style={{
              background: "linear-gradient(135deg, #d4a83a 0%, #b8891f 40%, #d4a83a 100%)",
              boxShadow: "0 3px 10px rgba(20,4,8,0.3)",
            }}
          >
            <span
              className="italic text-sm tracking-wider"
              style={{ fontFamily: "var(--font-newsreader)", color: "#1e0608", fontWeight: 500 }}
            >
              Jorgiahanny Almea Martínez
            </span>
          </div>

        </div>

        {/* Texto */}
        <div className="space-y-7">
          <h2
            className="text-4xl md:text-5xl italic leading-tight"
            style={{ fontFamily: "var(--font-newsreader)", color: "#3d0a1e", fontWeight: 600 }}
          >
            Una Trayectoria Multidisciplinaria
          </h2>

          <div
            className="space-y-5 leading-relaxed"
            style={{ fontFamily: "var(--font-lora)", color: "#3a2428", fontSize: "1rem" }}
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
                style={{ fontFamily: "var(--font-newsreader)", color: "#b8891f", fontWeight: 600 }}
              >
                2+
              </span>
              <span className="b-label text-[0.68rem]">Años en formación</span>
            </div>
            <div>
              <span
                className="block text-2xl"
                style={{ fontFamily: "var(--font-newsreader)", color: "#b8891f", fontWeight: 600 }}
              >
                5+
              </span>
              <span className="b-label text-[0.68rem]">Proyectos completados</span>
            </div>
            <div>
              <span
                className="block text-2xl"
                style={{ fontFamily: "var(--font-newsreader)", color: "#b8891f", fontWeight: 600 }}
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
