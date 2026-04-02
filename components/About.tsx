import Image from "next/image";
import SectionOrnaments from "./SectionOrnaments";

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-24 px-6 overflow-hidden" style={{ backgroundColor: "#f5efe6" }}>
      <SectionOrnaments opacity={0.82} />
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Marco de pintura victoriana floral */}
        <div className="flex flex-col items-center gap-0">

          {/* ── Marco exterior: madera oscura tallada ── */}
          <div
            className="relative group"
            style={{
              padding: "38px",
              background: "linear-gradient(145deg, #3a0c16 0%, #1e0608 35%, #2a0a12 65%, #3a0c16 100%)",
              boxShadow:
                "0 16px 56px rgba(20,4,8,0.6), " +
                "0 4px 16px rgba(20,4,8,0.35), " +
                "inset 0 2px 3px rgba(255,255,255,0.07), " +
                "inset 0 -2px 4px rgba(0,0,0,0.45), " +
                "inset 2px 0 3px rgba(255,255,255,0.04), " +
                "inset -2px 0 4px rgba(0,0,0,0.35)",
            }}
          >
            {/* ── Rosas victorianas en cada esquina ── */}
            {([
              { top: -4,   left:  -4,  tx: "0,0"       },
              { top: -4,   right: -4,  tx: "-60px,0"   },
              { bottom:-4, left:  -4,  tx: "0,-60px"   },
              { bottom:-4, right: -4,  tx: "-60px,-60px"},
            ] as const).map((corner, i) => {
              const scaleX = i === 1 || i === 3 ? -1 : 1;
              const scaleY = i === 2 || i === 3 ? -1 : 1;
              return (
                <svg
                  key={i}
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute pointer-events-none"
                  style={{ width: 64, height: 64, ...corner,
                    transform: `scale(${scaleX},${scaleY})`,
                    transformOrigin: "center" }}
                >
                  {/* Vine arm going right */}
                  <path d="M26,22 Q34,17 42,19 Q50,21 56,18"
                    stroke="#c8961e" strokeWidth="1" strokeOpacity="0.7"/>
                  {/* Vine arm going down */}
                  <path d="M22,26 Q17,34 19,42 Q21,50 18,56"
                    stroke="#c8961e" strokeWidth="1" strokeOpacity="0.7"/>
                  {/* Leaf pair right vine */}
                  <path d="M38,19 Q35,12 30,18" fill="#9a7010" fillOpacity="0.55"/>
                  <path d="M38,19 Q35,26 30,20" fill="#9a7010" fillOpacity="0.4"/>
                  {/* Leaf pair down vine */}
                  <path d="M19,38 Q12,35 18,30" fill="#9a7010" fillOpacity="0.55"/>
                  <path d="M19,38 Q26,35 20,30" fill="#9a7010" fillOpacity="0.4"/>
                  {/* Rosebud at end of right vine */}
                  <ellipse cx="55" cy="17" rx="4" ry="3" fill="#d4a83a" fillOpacity="0.7"/>
                  <ellipse cx="55" cy="17" rx="2.5" ry="1.8" fill="#e8c055" fillOpacity="0.75"/>
                  <path d="M51,14 Q53,10 57,14" fill="#b8891f" fillOpacity="0.45"/>
                  {/* Rosebud at end of down vine */}
                  <ellipse cx="17" cy="55" rx="3" ry="4" fill="#d4a83a" fillOpacity="0.7"/>
                  <ellipse cx="17" cy="55" rx="1.8" ry="2.5" fill="#e8c055" fillOpacity="0.75"/>
                  <path d="M14,51 Q10,53 14,57" fill="#b8891f" fillOpacity="0.45"/>
                  {/* Main rose — 6 outer petals */}
                  {[0,60,120,180,240,300].map(a => (
                    <ellipse key={a} cx="22" cy="12" rx="4.5" ry="9"
                      fill="#c8961e" fillOpacity="0.7"
                      transform={`rotate(${a} 22 22)`}/>
                  ))}
                  {/* 6 inner petals offset 30° */}
                  {[30,90,150,210,270,330].map(a => (
                    <ellipse key={a} cx="22" cy="15" rx="3.5" ry="7"
                      fill="#d4a83a" fillOpacity="0.78"
                      transform={`rotate(${a} 22 22)`}/>
                  ))}
                  {/* Rose center rings */}
                  <circle cx="22" cy="22" r="5"   fill="#e8c055" fillOpacity="0.82"/>
                  <circle cx="22" cy="22" r="3"   fill="#f0c84a" fillOpacity="0.88"/>
                  <circle cx="22" cy="22" r="1.5" fill="#b8891f" fillOpacity="0.95"/>
                  {/* Small leaves flanking rose */}
                  <path d="M22,31 Q14,34 13,28 Q18,27 22,31" fill="#9a7010" fillOpacity="0.5"/>
                  <path d="M31,22 Q34,14 28,13 Q27,18 31,22" fill="#9a7010" fillOpacity="0.5"/>
                </svg>
              );
            })}

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
                <div className="relative overflow-hidden">
                  <Image
                    src="/img/cv2.png"
                    alt="Retrato de Jorgiahanny Almea Martínez"
                    width={1024}
                    height={1536}
                    className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-700"
                    style={{ filter: "sepia(18%) contrast(1.04) brightness(0.97)" }}
                  />
                  {/* Viñeta interior del cuadro */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ boxShadow: "inset 0 0 40px rgba(20,4,8,0.28)" }}
                  />
                </div>
              </div>
            </div>
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
