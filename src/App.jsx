import React, { useState, useEffect, useMemo } from "react";

import About from "./components/About";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const ACCENTS = [
  { id: "coral", label: "Coral", hex: "#FF6B6B" },
];

function getTokens(mode, accentHex) {
  return mode === "dark"
    ? { bg: "#0d0f14", panel: "#151822", ink: "#e8eaed", muted: "#8b8f9a", line: "#2a2e3a", accent: accentHex, accentText: "#0d0f14" }
    : { bg: "#f7f7f5", panel: "#ffffff", ink: "#14161b", muted: "#6b7280", line: "#e2e4e9", accent: accentHex, accentText: "#14161b" };
}

// ---- Cursor Glow Effect ----
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

const fieldStyle = (t) => ({
  padding: 10, background: t.panel, border: `1px solid ${t.line}`,
  borderRadius: 6, color: t.ink, fontSize: 14, outline: "none",
});

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
