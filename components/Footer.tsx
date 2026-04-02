export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f7f3ed",
        borderTop: "4px double rgba(200,144,58,0.4)",
        color: "#9a4060",
      }}
    >
      {/* Línea degradada dorada */}
      <div
        className="w-full"
        style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(200,144,58,0.55), transparent)",
          marginTop: "1px",
        }}
      />

      <div className="max-w-4xl mx-auto py-10 px-6 flex flex-col items-center gap-5 text-center">

        {/* Nombre en Newsreader italic */}
        <p
          className="italic text-xl"
          style={{ fontFamily: "var(--font-newsreader)", color: "#7a1e3e" }}
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
              className="text-xs tracking-widest uppercase hover:text-[#c8903a] transition-colors"
              style={{ fontFamily: "var(--font-newsreader)", color: "#9a4060" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Divisor ❦ con línea */}
        <div className="relative w-28 flex items-center justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px"
            style={{ background: "linear-gradient(to right, transparent, #c8903a, transparent)" }} />
          <span className="relative px-2 text-base" style={{ backgroundColor: "#f7f3ed", color: "#c8903a" }}>
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
