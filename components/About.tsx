import Image from "next/image";
import SectionOrnaments from "./SectionOrnaments";

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-16 md:py-24 px-6 overflow-hidden" style={{ backgroundColor: "#f7f3ed" }}>
      <SectionOrnaments opacity={0.82} />

      <div className="max-w-5xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* ── Columna imagen — centrada en mobile, izquierda en desktop ── */}
        <div className="w-full flex justify-center">
          {/* Marco con ancho máximo responsivo */}
          <div className="w-full" style={{ maxWidth: "clamp(240px, 70vw, 420px)" }}>

            {/* Marco exterior */}
            <div
              className="relative group w-full"
              style={{
                padding: "clamp(14px, 4vw, 36px)",
                background: "linear-gradient(145deg, #5a2e47 0%, #8e4766 35%, #D886A7 65%, #8e4766 100%)",
                boxShadow:
                  "0 16px 56px rgba(28,28,24,0.35), " +
                  "0 4px 16px rgba(28,28,24,0.20), " +
                  "inset 0 2px 3px rgba(255,255,255,0.07), " +
                  "inset 0 -2px 4px rgba(0,0,0,0.45), " +
                  "inset 2px 0 3px rgba(255,255,255,0.04), " +
                  "inset -2px 0 4px rgba(0,0,0,0.35)",
              }}
            >
              {/* Rosas victorianas en cada esquina */}
              {([
                { top: -4,    left:  -4  },
                { top: -4,    right: -4  },
                { bottom: -4, left:  -4  },
                { bottom: -4, right: -4  },
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
                    style={{
                      width: "clamp(36px, 7vw, 60px)",
                      height: "clamp(36px, 7vw, 60px)",
                      ...corner,
                      transform: `scale(${scaleX},${scaleY})`,
                      transformOrigin: "center",
                    }}
                  >
                    <path d="M26,22 Q34,17 42,19 Q50,21 56,18" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.7"/>
                    <path d="M22,26 Q17,34 19,42 Q21,50 18,56" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.7"/>
                    <path d="M38,19 Q35,12 30,18" fill="#775a19" fillOpacity="0.55"/>
                    <path d="M38,19 Q35,26 30,20" fill="#775a19" fillOpacity="0.4"/>
                    <path d="M19,38 Q12,35 18,30" fill="#775a19" fillOpacity="0.55"/>
                    <path d="M19,38 Q26,35 20,30" fill="#775a19" fillOpacity="0.4"/>
                    <ellipse cx="55" cy="17" rx="4" ry="3" fill="#C5A059" fillOpacity="0.7"/>
                    <ellipse cx="55" cy="17" rx="2.5" ry="1.8" fill="#fed488" fillOpacity="0.75"/>
                    <path d="M51,14 Q53,10 57,14" fill="#775a19" fillOpacity="0.45"/>
                    <ellipse cx="17" cy="55" rx="3" ry="4" fill="#C5A059" fillOpacity="0.7"/>
                    <ellipse cx="17" cy="55" rx="1.8" ry="2.5" fill="#fed488" fillOpacity="0.75"/>
                    <path d="M14,51 Q10,53 14,57" fill="#775a19" fillOpacity="0.45"/>
                    {[0,60,120,180,240,300].map(a => (
                      <ellipse key={a} cx="22" cy="12" rx="4.5" ry="9"
                        fill="#C5A059" fillOpacity="0.7"
                        transform={`rotate(${a} 22 22)`}/>
                    ))}
                    {[30,90,150,210,270,330].map(a => (
                      <ellipse key={a} cx="22" cy="15" rx="3.5" ry="7"
                        fill="#fed488" fillOpacity="0.78"
                        transform={`rotate(${a} 22 22)`}/>
                    ))}
                    <circle cx="22" cy="22" r="5"   fill="#fed488" fillOpacity="0.82"/>
                    <circle cx="22" cy="22" r="3"   fill="#fdf9f3" fillOpacity="0.88"/>
                    <circle cx="22" cy="22" r="1.5" fill="#C5A059" fillOpacity="0.95"/>
                    <path d="M22,31 Q14,34 13,28 Q18,27 22,31" fill="#775a19" fillOpacity="0.5"/>
                    <path d="M31,22 Q34,14 28,13 Q27,18 31,22" fill="#775a19" fillOpacity="0.5"/>
                  </svg>
                );
              })}

              {/* Borde dorado gilded */}
              <div
                style={{
                  padding: "5px",
                  background: "linear-gradient(135deg, #fed488 0%, #C5A059 20%, #fed488 40%, #775a19 60%, #C5A059 80%, #775a19 100%)",
                  boxShadow: "inset 0 1px 2px rgba(255,255,255,0.3), inset 0 -1px 2px rgba(0,0,0,0.25)",
                }}
              >
                {/* Margen interior (passepartout) */}
                <div
                  style={{
                    padding: "10px",
                    backgroundColor: "#fdf9f3",
                    boxShadow: "inset 0 2px 10px rgba(28,28,24,0.14), inset 0 -1px 6px rgba(28,28,24,0.08)",
                  }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src="/img/cv2.png"
                      alt="Retrato de Jorgiahanny Almea Martínez"
                      width={1024}
                      height={1536}
                      className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-700"
                      style={{ filter: "sepia(14%) contrast(1.03) brightness(0.98)" }}
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ boxShadow: "inset 0 0 40px rgba(28,28,24,0.22)" }}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Columna texto — centrada en mobile, derecha en desktop ── */}
        <div className="w-full space-y-7">
          <h2
            className="text-3xl md:text-5xl italic leading-tight text-center md:text-left"
            style={{ fontFamily: "var(--font-newsreader)", color: "#8e4766", fontWeight: 600 }}
          >
            Una Trayectoria Multidisciplinaria
          </h2>

          <div
            className="space-y-5 leading-relaxed"
            style={{ fontFamily: "var(--font-noto-serif)", color: "#524348", fontSize: "1rem" }}
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

          {/* Stats */}
          <div className="pt-6 flex flex-wrap justify-center md:justify-start gap-6 md:gap-12"
            style={{ borderTop: "1px solid rgba(197,160,89,0.22)" }}
          >
            {[
              { val: "2+", label: "Años en formación" },
              { val: "5+", label: "Proyectos completados" },
              { val: "7+", label: "Años de experiencia" },
            ].map(({ val, label }) => (
              <div key={label} className="text-center md:text-left">
                <span
                  className="block text-2xl"
                  style={{ fontFamily: "var(--font-newsreader)", color: "#C5A059", fontWeight: 600 }}
                >
                  {val}
                </span>
                <span className="b-label text-[0.68rem]">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center md:justify-start">
            <a href="/cv.pdf" download className="btn-bridgerton-primary inline-block shadow">
              Descargar CV
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
