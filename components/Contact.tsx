export default function Contact() {
  return (
    <section id="contacto" className="py-24" style={{ backgroundColor: "#f7f3ed" }}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center italic" style={{ fontFamily: "var(--font-newsreader)", color: "#7a1e3e" }}>
          Correspondencia
        </h2>
        <div className="b-section-line">
          <span style={{ color: "#c8903a", fontSize: "1rem" }}>❦</span>
        </div>

        {/* Card con ornamento en esquina — estilo Stitch */}
        <div
          className="relative p-8 md:p-10 max-w-lg mx-auto"
          style={{
            backgroundColor: "#fdf9f3",
            border: "1px solid rgba(200,144,58,0.3)",
            boxShadow: "0 2px 14px rgba(122,30,62,0.09)",
          }}
        >
          {/* Ornamento botánico en esquina superior derecha */}
          <div
            className="absolute top-4 right-4 text-3xl opacity-10 pointer-events-none"
            style={{ color: "#7a1e3e" }}
          >
            ❧
          </div>

          {/* Nombre */}
          <p
            className="text-xl italic mb-1"
            style={{ fontFamily: "var(--font-newsreader)", color: "#7a1e3e", fontWeight: 600 }}
          >
            Jorgiahanny Almea Martínez
          </p>
          <p className="b-label mb-6">Full Stack Developer Jr.</p>

          {/* Información de contacto — sin emojis */}
          <ul className="space-y-3 mb-7" style={{ fontFamily: "var(--font-lora)" }}>
            <li className="flex items-baseline gap-2 text-sm">
              <span className="b-label text-[0.65rem]">Correo</span>
              <a
                href="mailto:jorgiahannya@gmail.com"
                className="hover:underline"
                style={{ color: "#3d1520" }}
              >
                jorgiahannya@gmail.com
              </a>
            </li>
            <li className="flex items-baseline gap-2 text-sm">
              <span className="b-label text-[0.65rem]">Teléfono</span>
              <a href="tel:+56975895960" className="hover:underline" style={{ color: "#3d1520" }}>
                +56 975 895 960
              </a>
            </li>
            <li className="flex items-baseline gap-2 text-sm">
              <span className="b-label text-[0.65rem]">WhatsApp</span>
              <a
                href="https://wa.me/56926947724"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "#3d1520" }}
              >
                +56 926 947 724
              </a>
            </li>
          </ul>

          {/* Línea decorativa */}
          <div
            className="mb-6"
            style={{
              height: "1px",
              background: "linear-gradient(to right, transparent, rgba(200,144,58,0.45), transparent)",
            }}
          />

          {/* Botones */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/jorgiahanny-almea-0b3b852ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bridgerton-primary"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/jorgiahannydev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bridgerton-primary"
            >
              GitHub
            </a>
            <a href="/cv.pdf" download className="btn-bridgerton-outline">
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
