function PortfolioItem({ title, stack, link, t }) {
  return (
    <div style={{ border: `1px solid ${t.line}`, background: t.panel, borderRadius: 8, overflow: "hidden", textAlign: "left" }}>
      <div style={{
        width: "100%", height: 120, background: t.line,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: t.muted, fontFamily: "monospace", fontSize: 12,
      }}>
        preview image
      </div>
      <div style={{ padding: 16 }}>
        <h3 style={{ margin: "0 0 10px", fontSize: 18, fontWeight: 600, color: t.ink }}>{title}</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {stack.map((item) => (
            <span key={item} style={{
              padding: "4px 8px", fontFamily: "monospace", fontSize: 12, borderRadius: 4,
              border: `1px solid ${item === "WIP" ? t.accent : t.line}`,
              color: item === "WIP" ? t.accent : t.muted,
            }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;