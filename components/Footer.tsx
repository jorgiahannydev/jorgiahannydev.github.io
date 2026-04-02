export default function Footer() {
  return (
    <footer
      className="text-center py-6 px-4"
      style={{
        backgroundColor: "rgba(253, 240, 244, 0.95)",
        borderTop: "1px solid rgba(200, 144, 58, 0.35)",
        color: "#9a4060",
      }}
    >
      <p
        className="text-xs tracking-[0.25em] uppercase"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        ✦ &nbsp; © 2026 Jorgiahanny Almea Martínez &nbsp;·&nbsp; Full Stack Developer Jr. &nbsp; ✦
      </p>
    </footer>
  );
}
