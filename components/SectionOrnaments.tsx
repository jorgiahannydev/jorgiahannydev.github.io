export default function SectionOrnaments({ opacity = 0.85 }: { opacity?: number }) {
  return (
    <>
      <div className="section-ornament-corner corner-tl" style={{ opacity }} />
      <div className="section-ornament-corner corner-tr" style={{ opacity }} />
      <div className="section-ornament-corner corner-bl" style={{ opacity }} />
      <div className="section-ornament-corner corner-br" style={{ opacity }} />
    </>
  );
}
