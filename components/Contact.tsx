import SectionOrnaments from "./SectionOrnaments";

export default function Contact() {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden" style={{ backgroundColor: "#ede5d8" }}>
      <SectionOrnaments opacity={0.82} />
      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Título centrado — igual que Stitch */}
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold italic"
            style={{ fontFamily: "var(--font-newsreader)", color: "#3d0a1e" }}
          >
            Correspondencia
          </h2>
          <p
            className="mt-4 italic"
            style={{ fontFamily: "var(--font-lora)", color: "#3a2428", fontSize: "0.95rem" }}
          >
            Para consultas, colaboraciones o simplemente ponernos en contacto.
          </p>
        </div>

        {/* Card del formulario */}
        <div
          className="relative p-8 md:p-14 shadow-xl"
          style={{
            backgroundColor: "#f5efe6",
            border: "1px solid rgba(200,144,58,0.2)",
          }}
        >
          {/* Ornamento botánico en esquina — igual que Stitch */}
          <div
            className="absolute top-4 right-4 text-6xl pointer-events-none select-none"
            style={{ color: "#3d0a1e", opacity: 0.06 }}
          >
            ❧
          </div>

          <form
            action="mailto:jorgiahannya@gmail.com"
            method="post"
            encType="text/plain"
            className="space-y-10 relative z-10"
          >
            {/* Fila: nombre + email */}
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label
                  className="block text-lg"
                  style={{ fontFamily: "var(--font-newsreader)", color: "#1e0c10" }}
                >
                  Tu nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  className="b-input"
                  placeholder="Nombre Apellido"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="block text-lg"
                  style={{ fontFamily: "var(--font-newsreader)", color: "#1e0c10" }}
                >
                  Dirección digital
                </label>
                <input
                  type="email"
                  name="email"
                  className="b-input"
                  placeholder="correo@ejemplo.com"
                />
              </div>
            </div>

            {/* Mensaje */}
            <div className="space-y-2">
              <label
                className="block text-lg"
                style={{ fontFamily: "var(--font-newsreader)", color: "#1e0c10" }}
              >
                Tu mensaje
              </label>
              <textarea
                name="mensaje"
                rows={4}
                className="b-input resize-none"
                placeholder="Escribe tu carta aquí…"
              />
            </div>

            {/* Datos de contacto directo */}
            <div
              className="grid sm:grid-cols-3 gap-4 py-6"
              style={{ borderTop: "1px solid rgba(200,144,58,0.2)", borderBottom: "1px solid rgba(200,144,58,0.2)" }}
            >
              <div>
                <p className="b-label text-[0.65rem] mb-1">Correo</p>
                <a href="mailto:jorgiahannya@gmail.com" className="text-sm hover:underline" style={{ color: "#3d0a1e", fontFamily: "var(--font-lora)" }}>
                  jorgiahannya@gmail.com
                </a>
              </div>
              <div>
                <p className="b-label text-[0.65rem] mb-1">Teléfono</p>
                <a href="tel:+56975895960" className="text-sm hover:underline" style={{ color: "#3d0a1e", fontFamily: "var(--font-lora)" }}>
                  +56 975 895 960
                </a>
              </div>
              <div>
                <p className="b-label text-[0.65rem] mb-1">WhatsApp</p>
                <a href="https://wa.me/56926947724" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline" style={{ color: "#3d0a1e", fontFamily: "var(--font-lora)" }}>
                  +56 926 947 724
                </a>
              </div>
            </div>

            {/* Botón wax seal — idéntico a Stitch */}
            <div className="flex justify-center pt-4">
              <button type="submit" className="wax-seal" aria-label="Enviar mensaje">
                <div className="wax-seal-ring" />
                <div className="text-center relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32" height="32" viewBox="0 0 24 24"
                    fill="rgba(255,222,165,0.9)"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span
                    className="block mt-1 text-[0.55rem] tracking-widest uppercase"
                    style={{ color: "rgba(255,222,165,0.9)", fontFamily: "var(--font-newsreader)" }}
                  >
                    Enviar
                  </span>
                </div>
              </button>
            </div>

          </form>
        </div>

        {/* Links secundarios */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://www.linkedin.com/in/jorgiahanny-almea-0b3b852ab/"
            target="_blank" rel="noopener noreferrer"
            className="btn-bridgerton-primary"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jorgiahannydev"
            target="_blank" rel="noopener noreferrer"
            className="btn-bridgerton-primary"
          >
            GitHub
          </a>
          <a href="/cv.pdf" download className="btn-bridgerton-outline">
            Descargar CV
          </a>
        </div>

      </div>
    </section>
  );
}
