import React, { useState, useEffect, useMemo } from "react";

// ---- centralized tag lists ----
// Keep these as your single source of truth. When adding a new project,
// only pick values from these two lists so the dropdown filters always
// stay in sync with your actual project data — no orphaned tags.
const SPECIALIZATIONS = ["Cloud", "Game", "Algorithm", "AI", "Frontend", "Backend"];
const TECHNOLOGIES = ["C#", "ASP.NET", "HTML", "CSS", "C++", "Java", "React", "Vite", "Tailwind", "Android SDK", "WIP"];

const ACCENTS = [
  { id: "coral", label: "Coral", hex: "#FF6B6B" },
];

function getTokens(mode, accentHex) {
  return mode === "dark"
    ? { bg: "#0d0f14", panel: "#151822", ink: "#e8eaed", muted: "#8b8f9a", line: "#2a2e3a", accent: accentHex, accentText: "#0d0f14" }
    : { bg: "#f7f7f5", panel: "#ffffff", ink: "#14161b", muted: "#6b7280", line: "#e2e4e9", accent: accentHex, accentText: "#14161b" };
}

// ---- placeholder data (now includes a specialization field) ----
const portfolio = [
  { title: "Realight", specialization: "Game", stack: ["C#", "ASP.NET", "HTML", "CSS"], link: "https://github.com/Axieof/Realight_Game" },
  { title: "Multimatchmaker", specialization: "Backend", stack: ["C++"], link: "https://github.com/Axieof/MultiMatchmaker" },
  { title: "SuperAdventure", specialization: "Game", stack: ["C#"], link: "https://github.com/Axieof/SuperAdventure" },
  { title: "Nyro", specialization: "Backend", stack: ["Java", "WIP"], link: "" },
  { title: "Portfolio", specialization: "Frontend", stack: ["React", "Vite", "Tailwind"], link: "" },
  { title: "Routine", specialization: "Frontend", stack: ["Java", "Android SDK"], link: "https://play.google.com/store/apps/details?id=com.mad.p03.np2020.routine" },
];

const experiences = [
  { company: "TKD Technology", position: "Intern", fromYear: "Jan 2019", toYear: "Mar 2019", tags: ["Hardware", "Benchmarking"], description: "Hardware repair and troubleshooting for laptops and mobile phones." },
  { company: "AIDA Technologies", position: "Software Engineering Intern", fromYear: "Mar 2021", toYear: "Oct 2021", tags: ["Python", "SQL"], description: "Developed software, deployed to production, and learned the dev-ops process." },
];

// ---- cursor glow ----
function CursorGlow({ enabled, t }) {
  const [pos, setPos] = useState(null);
  useEffect(() => {
    if (!enabled) return;
    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [enabled]);

  if (!enabled || !pos) return null;
  return (
    <div style={{
      position: "fixed", left: pos.x, top: pos.y, transform: "translate(-50%, -50%)",
      width: 360, height: 360, borderRadius: "50%", pointerEvents: "none", zIndex: 1,
      background: `radial-gradient(circle, ${t.accent}26 0%, transparent 70%)`,
      filter: "blur(10px)",
    }} />
  );
}

function Hero({ t }) {
  return (
    <header style={{ textAlign: "center", paddingTop: 72, paddingBottom: 24, position: "relative", zIndex: 2 }}>
      <h1 style={{ fontSize: 44, fontWeight: 600, letterSpacing: "-0.02em", margin: 0, color: t.ink }}>
        Pritheev Roshan
      </h1>
      <p style={{ marginTop: 10, fontFamily: "monospace", color: t.muted, fontSize: 16 }}>
        Software Engineer
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: 18, marginTop: 16 }}>
      </div>
    </header>
  );
}

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

function About({ t }) {
  return (
    <section style={{ maxWidth: 760, margin: "0 auto", padding: "56px 24px" }}>
      <div style={{ display: "flex", gap: 40, flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ flex: "1 1 280px" }}>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: t.ink }}>
            I'm a software engineer who enjoys taking ambiguous problems and
            turning them into working systems. I've worked across hardware
            repair, backend services, and shipping production software, and I
            care about building things that hold up under real use.
          </p>
          <p style={{ marginTop: 12, fontSize: 13, fontStyle: "italic", color: t.muted }}>
            ↑ replace this paragraph with your own bio
          </p>
        </div>
        <div style={{
          flex: "1 1 200px", maxWidth: 240, aspectRatio: "1 / 1",
          border: `1px dashed ${t.line}`, borderRadius: 8,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: t.muted, fontFamily: "monospace", fontSize: 13, textAlign: "center", padding: 12,
        }}>
          add your photo here
        </div>
      </div>
    </section>
  );
}

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

function Portfolio({ t }) {
  const [specOpen, setSpecOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const [selectedSpec, setSelectedSpec] = useState(null);
  const [selectedTech, setSelectedTech] = useState([]);

  const toggleTech = (tech) => {
    setSelectedTech((prev) => (prev.includes(tech) ? prev.filter((x) => x !== tech) : [...prev, tech]));
  };

  const filtered = portfolio.filter((p) => {
    const specMatch = !selectedSpec || p.specialization === selectedSpec;
    const techMatch = selectedTech.length === 0 || p.stack.some((s) => selectedTech.includes(s));
    return specMatch && techMatch;
  });

  return (
    <div style={{ padding: "40px 16px", textAlign: "center", position: "relative", zIndex: 2 }}>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 28, flexWrap: "wrap" }}>
        <Dropdown label={selectedSpec ? `Specialization: ${selectedSpec}` : "Specialization"} isOpen={specOpen} onToggle={() => { setSpecOpen(!specOpen); setTechOpen(false); }} t={t}>
          <button
            onClick={() => { setSelectedSpec(null); setSpecOpen(false); }}
            style={{ textAlign: "left", background: !selectedSpec ? t.accent : "transparent", color: !selectedSpec ? t.accentText : t.ink, padding: "6px 8px", borderRadius: 4, border: "none", cursor: "pointer", fontFamily: "monospace", fontSize: 12 }}
          >
            All
          </button>
          {SPECIALIZATIONS.map((spec) => (
            <button
              key={spec}
              onClick={() => { setSelectedSpec(spec); setSpecOpen(false); }}
              style={{ textAlign: "left", background: selectedSpec === spec ? t.accent : "transparent", color: selectedSpec === spec ? t.accentText : t.ink, padding: "6px 8px", borderRadius: 4, border: "none", cursor: "pointer", fontFamily: "monospace", fontSize: 12 }}
            >
              {spec}
            </button>
          ))}
        </Dropdown>

        <Dropdown label={selectedTech.length ? `Technologies (${selectedTech.length})` : "Technologies"} isOpen={techOpen} onToggle={() => { setTechOpen(!techOpen); setSpecOpen(false); }} t={t}>
          {TECHNOLOGIES.map((tech) => (
            <label key={tech} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "monospace", fontSize: 12, color: t.ink, cursor: "pointer" }}>
              <input type="checkbox" checked={selectedTech.includes(tech)} onChange={() => toggleTech(tech)} />
              {tech}
            </label>
          ))}
          {selectedTech.length > 0 && (
            <button
              onClick={() => setSelectedTech([])}
              style={{ marginTop: 4, textAlign: "left", background: "transparent", color: t.muted, border: "none", cursor: "pointer", fontFamily: "monospace", fontSize: 11 }}
            >
              clear all
            </button>
          )}
        </Dropdown>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 16, maxWidth: 900, margin: "0 auto",
      }}>
        {filtered.map((p) => <PortfolioItem key={p.title} {...p} t={t} />)}
        {filtered.length === 0 && (
          <p style={{ gridColumn: "1 / -1", color: t.muted, fontFamily: "monospace", fontSize: 13 }}>
            No projects match those filters.
          </p>
        )}
      </div>
    </div>
  );
}

function Experiences({ t }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "40px 16px", position: "relative", zIndex: 2 }}>
      <ol style={{ borderLeft: `1px solid ${t.line}`, maxWidth: 480, width: "100%", margin: 0, padding: 0, listStyle: "none" }}>
        {experiences.map((e) => (
          <li key={e.company} style={{ marginBottom: 32, marginLeft: 16, position: "relative" }}>
            <div style={{
              position: "absolute", width: 10, height: 10, background: t.accent,
              borderRadius: "50%", left: -21, top: 4, border: `2px solid ${t.bg}`,
            }} />
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
              <span style={{ padding: "3px 8px", fontFamily: "monospace", fontSize: 12, background: t.accent, color: t.accentText, borderRadius: 4 }}>
                {e.fromYear} – {e.toYear}
              </span>
              <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600, color: t.ink }}>{e.company}</h3>
            </div>
            <div style={{ marginTop: 4, color: t.muted }}>{e.position}</div>
            <p style={{ maxWidth: 380, marginTop: 8, color: t.muted, lineHeight: 1.6, fontSize: 14 }}>{e.description}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
              {e.tags.map((tag) => (
                <span key={tag} style={{
                  padding: "3px 8px", fontFamily: "monospace", fontSize: 11, borderRadius: 4,
                  border: `1px solid ${t.line}`, color: t.muted,
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

const fieldStyle = (t) => ({
  padding: 10, background: t.panel, border: `1px solid ${t.line}`,
  borderRadius: 6, color: t.ink, fontSize: 14, outline: "none",
});

function Contact({ t }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "40px 16px", position: "relative", zIndex: 2 }}>
      <form style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%", maxWidth: 460 }} onSubmit={(e) => e.preventDefault()}>
        {["Name", "Email address"].map((ph) => (
          <input key={ph} placeholder={ph} style={fieldStyle(t)} />
        ))}
        <textarea placeholder="Message" rows={6} style={fieldStyle(t)} />
        <button style={{
          marginTop: 8, padding: "12px 24px", width: "max-content", fontFamily: "monospace",
          fontSize: 14, borderRadius: 6, border: "none", cursor: "pointer",
          color: t.accentText, background: t.accent,
        }}>
          Send message
        </button>
      </form>
    </div>
  );
}

function Footer({ t }) {
  return (
    <div style={{ padding: "20px 0", textAlign: "center", color: t.muted, fontSize: 13, opacity: 0.8, position: "relative", zIndex: 2 }}>
      © {new Date().getFullYear()} Pritheev Roshan. All rights reserved.
    </div>
  );
}

{/*
function PreviewControls({ mode, setMode, accentId, setAccentId, glow, setGlow, t }) {
  return (
    <div style={{
      position: "fixed", top: 12, right: 12, zIndex: 20,
      background: t.panel, border: `1px solid ${t.line}`, borderRadius: 8,
      padding: "10px 12px", display: "flex", flexDirection: "column", gap: 8,
      fontFamily: "monospace", fontSize: 11, color: t.muted,
    }}>
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <span>preview:</span>
        <button onClick={() => setMode(mode === "dark" ? "light" : "dark")} style={{ padding: "3px 8px", borderRadius: 4, cursor: "pointer", border: `1px solid ${t.line}`, background: "transparent", color: t.ink, fontFamily: "monospace", fontSize: 11 }}>
          {mode === "dark" ? "dark mode" : "light mode"}
        </button>
        <button onClick={() => setGlow(!glow)} style={{ padding: "3px 8px", borderRadius: 4, cursor: "pointer", border: `1px solid ${t.line}`, background: "transparent", color: t.ink, fontFamily: "monospace", fontSize: 11 }}>
          glow: {glow ? "on" : "off"}
        </button>
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {ACCENTS.map((a) => (
          <button
            key={a.id}
            onClick={() => setAccentId(a.id)}
            title={a.label}
            style={{ width: 18, height: 18, borderRadius: "50%", cursor: "pointer", background: a.hex, border: accentId === a.id ? `2px solid ${t.ink}` : `1px solid ${t.line}`, padding: 0 }}
          />
        ))}
      </div>
    </div>
  );
}
*/}

const SECTIONS = ["about", "projects", "experience", "contact"];
const SECTION_COMPONENTS = { about: About, projects: Portfolio, experience: Experiences, contact: Contact };
const TRANSITION_MS = 200;

export default function App() {
  const [active, setActive] = useState("about");
  const [displayed, setDisplayed] = useState("about");
  const [visible, setVisible] = useState(true);
  const [mode, setMode] = useState("dark");
  const [accentId, setAccentId] = useState("coral");
  const [glow, setGlow] = useState(true);

  const accentHex = ACCENTS.find((a) => a.id === accentId).hex;
  const t = getTokens(mode, accentHex);

  const handleChange = (section) => {
    if (section === active) return;
    setVisible(false);
    setActive(section);
  };

  useEffect(() => {
    if (visible) return;
    const timer = setTimeout(() => {
      setDisplayed(active);
      setVisible(true);
    }, TRANSITION_MS);
    return () => clearTimeout(timer);
  }, [visible, active]);

  const ActiveSection = SECTION_COMPONENTS[displayed];

  return (
    <div style={{ minHeight: "100vh", background: t.bg, color: t.ink, fontFamily: "system-ui, sans-serif", position: "relative", overflow: "hidden" }}>
      <CursorGlow enabled={glow} t={t} />
      {/*<PreviewControls mode={mode} setMode={setMode} accentId={accentId} setAccentId={setAccentId} glow={glow} setGlow={setGlow} t={t} /> */}
      <Hero t={t} />
      <Nav sections={SECTIONS} active={active} onChange={handleChange} t={t} />
      <div style={{
        position: "relative", zIndex: 2,
        transition: `opacity ${TRANSITION_MS}ms ease-out, transform ${TRANSITION_MS}ms ease-out`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
      }}>
        <ActiveSection t={t} />
      </div>
      <Footer t={t} />
    </div>
  );
}
