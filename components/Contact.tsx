"use client";
import { useState } from "react";
import SectionOrnaments from "./SectionOrnaments";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "TU_CLAVE_WEB3FORMS",
          subject: "Nuevo mensaje desde tu CV — " + data.nombre,
          from_name: data.nombre,
          email: data.email,
          message: data.mensaje,
          botcheck: "",
        }),
      });

      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="py-24 relative overflow-hidden" style={{ backgroundColor: "#f7f3ed" }}>
      <SectionOrnaments opacity={0.82} />
      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Título */}
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold italic"
            style={{ fontFamily: "var(--font-newsreader)", color: "#800020" }}
          >
            Correspondencia
          </h2>
          <p className="mt-4 italic" style={{ fontFamily: "var(--font-noto-serif)", color: "#524348", fontSize: "0.95rem" }}>
            Para consultas, colaboraciones o simplemente ponernos en contacto.
          </p>
        </div>

        {/* Card formulario */}
        <div
          className="relative p-8 md:p-14 shadow-xl"
          style={{ backgroundColor: "#fdf9f3", border: "1px solid rgba(197,160,89,0.2)", borderRadius: "4px" }}
        >
          {/* Ornamento botánico */}
          <div className="absolute top-4 right-4 text-6xl pointer-events-none select-none"
            style={{ color: "#D886A7", opacity: 0.06 }}>❧</div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-10 relative z-10">

            {/* Nombre + Email */}
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label className="block text-lg" style={{ fontFamily: "var(--font-newsreader)", color: "#1c1c18" }}>
                  Tu nombre
                </label>
                <input
                  type="text" name="nombre" required
                  className="b-input" placeholder="Nombre Apellido"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-lg" style={{ fontFamily: "var(--font-newsreader)", color: "#1c1c18" }}>
                  Dirección digital
                </label>
                <input
                  type="email" name="email" required
                  className="b-input" placeholder="correo@ejemplo.com"
                />
              </div>
            </div>

            {/* Mensaje */}
            <div className="space-y-2">
              <label className="block text-lg" style={{ fontFamily: "var(--font-newsreader)", color: "#1c1c18" }}>
                Tu mensaje
              </label>
              <textarea
                name="mensaje" rows={4} required
                className="b-input resize-none" placeholder="Escribe tu carta aquí…"
              />
            </div>

            {/* Botón wax seal — justo después de los inputs */}
            <div className="flex flex-col items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="wax-seal"
                aria-label="Enviar mensaje"
              >
                <div className="wax-seal-ring" />
                <div className="flex flex-col items-center justify-center relative z-10">
                  {status === "loading" ? (
                    <svg className="animate-spin" width="28" height="28" viewBox="0 0 24 24" fill="none"
                      stroke="rgba(253,212,136,0.9)" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.25"/>
                      <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"/>
                    </svg>
                  ) : status === "success" ? (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                      stroke="rgba(253,212,136,0.9)" strokeWidth="2" strokeLinecap="round">
                      <path d="M5 13l4 4L19 7"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                      fill="rgba(253,212,136,0.9)">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  )}
                  <span className="block mt-1 text-[0.55rem] tracking-widest uppercase"
                    style={{ color: "rgba(253,212,136,0.9)", fontFamily: "var(--font-newsreader)" }}>
                    {status === "loading" ? "Enviando" : status === "success" ? "Enviado" : "Enviar"}
                  </span>
                </div>
              </button>

              {/* Mensajes de estado */}
              {status === "success" && (
                <p className="text-sm italic" style={{ color: "#800020", fontFamily: "var(--font-noto-serif)" }}>
                  ✦ Tu mensaje fue enviado con éxito. Te responderé pronto.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm italic" style={{ color: "#af2b3e", fontFamily: "var(--font-noto-serif)" }}>
                  Hubo un inconveniente al enviar. Intenta escribirme directamente a&nbsp;
                  <a href="mailto:jorgiahannya@gmail.com" className="underline">jorgiahannya@gmail.com</a>
                </p>
              )}
            </div>

          </form>

          {/* Datos de contacto directo — debajo del formulario */}
          <div
            className="grid sm:grid-cols-3 gap-4 mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(197,160,89,0.2)" }}
          >
            <div>
              <p className="b-label text-[0.65rem] mb-1">Correo</p>
              <a href="mailto:jorgiahannya@gmail.com" className="text-sm hover:underline"
                style={{ color: "#800020", fontFamily: "var(--font-noto-serif)" }}>
                jorgiahannya@gmail.com
              </a>
            </div>
            <div>
              <p className="b-label text-[0.65rem] mb-1">Teléfono</p>
              <a href="tel:+56975895960" className="text-sm hover:underline"
                style={{ color: "#800020", fontFamily: "var(--font-noto-serif)" }}>
                +56 975 895 960
              </a>
            </div>
            <div>
              <p className="b-label text-[0.65rem] mb-1">WhatsApp</p>
              <a href="https://wa.me/56926947724" target="_blank" rel="noopener noreferrer"
                className="text-sm hover:underline" style={{ color: "#800020", fontFamily: "var(--font-noto-serif)" }}>
                +56 926 947 724
              </a>
            </div>
          </div>
        </div>

        {/* Links secundarios */}
        <div className="flex justify-center gap-6 mt-10">
          <a href="https://www.linkedin.com/in/jorgiahanny-almea-0b3b852ab/"
            target="_blank" rel="noopener noreferrer" className="btn-bridgerton-primary">
            LinkedIn
          </a>
          <a href="https://github.com/jorgiahannydev"
            target="_blank" rel="noopener noreferrer" className="btn-bridgerton-primary">
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
