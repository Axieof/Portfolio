function Dropdown({ label, isOpen, onToggle, children, t, minWidth = 180 }) {
  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={onToggle}
        style={{
          padding: "7px 14px", borderRadius: 6, fontFamily: "monospace", fontSize: 12, cursor: "pointer",
          border: `1px solid ${t.line}`, background: t.panel, color: t.ink,
        }}
      >
        {label} {isOpen ? "▴" : "▾"}
      </button>
      {isOpen && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)", left: 0, zIndex: 6,
          background: t.panel, border: `1px solid ${t.line}`, borderRadius: 8,
          padding: 10, minWidth, display: "flex", flexDirection: "column", gap: 6,
        }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;