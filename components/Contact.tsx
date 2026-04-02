export default function Contact() {
  return (
    <section id="contacto" className="py-16" style={{ backgroundColor: "#fdf0f3" }}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center" style={{ color: "#7a1e3e" }}>Contacto</h2>
        <div className="b-section-line">
          <span style={{ color: "#c8903a", fontSize: "0.65rem" }}>✦</span>
        </div>

        <div className="rounded-2xl p-6 md:p-8 max-w-lg mx-auto"
          style={{ backgroundColor: "#fff8fa", border: "1px solid #e8a0b8", boxShadow: "0 2px 12px rgba(122,30,62,0.09)" }}>

          <p className="font-bold text-lg mb-5 italic" style={{ color: "#7a1e3e" }}>
            Jorgiahanny Almea Martínez
          </p>

          <ul className="space-y-3 mb-6 text-base" style={{ color: "#3d1520" }}>
            <li>
              📧{" "}
              <a href="mailto:jorgiahannya@gmail.com" className="hover:underline" style={{ color: "#9a4060" }}>
                jorgiahannya@gmail.com
              </a>
            </li>
            <li>
              📞{" "}
              <a href="tel:+56975895960" className="hover:underline" style={{ color: "#9a4060" }}>
                +56 975 895 960
              </a>
            </li>
            <li>
              💬{" "}
              <a href="https://wa.me/56926947724" target="_blank" rel="noopener noreferrer"
                className="hover:underline" style={{ color: "#9a4060" }}>
                WhatsApp: +56 926 947 724
              </a>
            </li>
          </ul>

          <div className="flex flex-wrap gap-3">
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
      </div>
    </section>
  );
}
