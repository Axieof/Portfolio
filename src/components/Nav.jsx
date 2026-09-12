const LABELS = { about: "About", projects: "Projects", experience: "Experience", contact: "Contact" };

function Nav({ sections, active, onChange, t }) {
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 10,
      background: `${t.bg}e6`, backdropFilter: "blur(6px)",
      borderTop: `1px solid ${t.line}`, borderBottom: `1px solid ${t.line}`,
    }}>
      <ul style={{ display: "flex", justifyContent: "center", gap: 32, padding: "16px 0", margin: 0, listStyle: "none" }}>
        {sections.map((s) => (
          <li key={s}>
            <button
              onClick={() => onChange(s)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "monospace", fontSize: 14, paddingBottom: 4,
                color: active === s ? t.accent : t.muted,
                borderBottom: active === s ? `2px solid ${t.accent}` : "2px solid transparent",
                transition: "color 150ms, border-color 150ms",
              }}
            >
              {LABELS[s]}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;