const LABELS = { about: "About", projects: "Projects", experience: "Experience", contact: "Contact" };


function SunIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 12.5A9 9 0 1 1 11.5 3a7 7 0 0 0 9.5 9.5Z" />
    </svg>
  );
}

function Nav({ sections, active, onChange, mode, setMode, t }) {
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 10,
      background: `${t.bg}e6`, backdropFilter: "blur(6px)",
      borderTop: `1px solid ${t.line}`, borderBottom: `1px solid ${t.line}`,
    }}>
      <ul style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 32, padding: "16px 0", margin: 0, listStyle: "none" }}>
        {sections.map((s) => (
          <li key={s}>
            <button
              onClick={() => onChange(s)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "monospace", fontSize: 14, paddingBottom: 4,
                color: active === s ? t.accent : t.muted,
                borderBottom: active === s ? `2px solid ${t.accent}` : "2px solid transparent",
              }}
            >
              {LABELS[s]}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: 28, height: 28, borderRadius: "50%", cursor: "pointer",
              border: `1px solid ${t.line}`, background: "transparent", color: t.muted,
            }}
          >
            {mode === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;