export default function OrnamentDivider({ bg = "#fdf9f3" }: { bg?: string }) {
  return (
    <div className="py-6" style={{ backgroundColor: bg }}>
      <div className="divider-ornament" />
    </div>
  );
}
