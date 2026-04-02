export default function Footer() {
  return (
    <footer
      className="footer-border"
      style={{
        backgroundColor: "#f7f3ed",
        borderTop: "3px double rgba(128,0,32,0.28)",
        color: "#D886A7",
        paddingTop: "3.5rem",
        boxShadow: "0 -2px 20px rgba(28,28,24,0.05)",
      }}
    >
      <div className="max-w-4xl mx-auto pb-10 px-6 flex flex-col items-center gap-5 text-center">

        {/* Nombre en Newsreader italic */}
        <p
          className="italic text-xl"
          style={{ fontFamily: "var(--font-newsreader)", color: "#800020" }}
        >
          Jorgiahanny Almea Martínez
        </p>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {[
            { href: "#presentacion", label: "Inicio" },
            { href: "#skills",       label: "Skills" },
            { href: "#experiencia",  label: "Experiencia" },
            { href: "#portafolio",   label: "Portafolio" },
            { href: "#contacto",     label: "Contacto" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-widest uppercase hover:text-[#C5A059] transition-colors"
              style={{ fontFamily: "var(--font-newsreader)", color: "#D886A7" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Divisor ❦ con línea */}
        <div className="relative w-28 flex items-center justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px"
            style={{ background: "linear-gradient(to right, transparent, #C5A059, transparent)" }} />
          <span className="relative px-2 text-base" style={{ backgroundColor: "#f7f3ed", color: "#C5A059" }}>
            ❦
          </span>
        </div>

        {/* Crédito */}
        <p
          className="text-xs tracking-[0.22em] uppercase opacity-70"
          style={{ fontFamily: "var(--font-newsreader)" }}
        >
          © 2026 &nbsp;·&nbsp; Jorgiahanny Almea &nbsp;·&nbsp; Full Stack Developer Jr.
        </p>

      </div>
    </footer>
  );
}
