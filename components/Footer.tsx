export default function Footer() {
  return (
    <footer
      className="footer-border"
      style={{
        backgroundColor: "#ede5d8",
        borderTop: "3px double rgba(61,10,30,0.35)",
        color: "#7a2040",
        paddingTop: "3.5rem",
        boxShadow: "0 -2px 20px rgba(61,10,30,0.05)",
      }}
    >
      <div className="max-w-4xl mx-auto pb-10 px-6 flex flex-col items-center gap-5 text-center">

        {/* Nombre en Newsreader italic */}
        <p
          className="italic text-xl"
          style={{ fontFamily: "var(--font-newsreader)", color: "#3d0a1e" }}
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
              className="text-xs tracking-widest uppercase hover:text-[#b8891f] transition-colors"
              style={{ fontFamily: "var(--font-newsreader)", color: "#7a2040" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Divisor ❦ con línea */}
        <div className="relative w-28 flex items-center justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px"
            style={{ background: "linear-gradient(to right, transparent, #b8891f, transparent)" }} />
          <span className="relative px-2 text-base" style={{ backgroundColor: "#ede5d8", color: "#b8891f" }}>
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
