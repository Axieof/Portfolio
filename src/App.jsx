import React, { useState, useEffect, useRef, useMemo } from "react";

import About from "./components/About";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const ACCENT = "#FF6B6B";

function getTokens(mode) {
  return mode === "dark"
    ? { bg: "#0d0f14", panel: "#151822", ink: "#e8eaed", muted: "#8b8f9a", line: "#2a2e3a", accent: ACCENT, accentText: "#0d0f14" }
    : { bg: "#f7f7f5", panel: "#ffffff", ink: "#14161b", muted: "#6b7280", line: "#e2e4e9", accent: ACCENT, accentText: "#ffffff" };
}

function AsteroidShape({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" style={{ filter: "drop-shadow(0 0 2px rgba(255,255,255,0.15))" }}>
      <polygon points="4,2 14,1 19,7 17,15 9,19 2,14 0,7" fill="#9a9a9a" />
      <circle cx="7" cy="7" r="1.4" fill="#6b6b6b" />
      <circle cx="13" cy="11" r="1.1" fill="#6b6b6b" />
      <circle cx="9" cy="13" r="0.9" fill="#6b6b6b" />
    </svg>
  );
}

function PlanetShape({ size }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: "radial-gradient(circle at 35% 35%, #d6d6d6 0%, #8d8d8d 45%, #45454a 100%)",
      boxShadow: "0 0 8px rgba(255,255,255,0.2)",
    }} />
  );
}

function SpaceBackground({ mode, t }) {
  const stars = useMemo(
    () => Array.from({ length: 70 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 1.6 + 0.6,
      opacity: Math.random() * 0.5 + 0.2,
    })),
    []
  );
  const asteroids = [
    { top: "5%", left: "10%", delay: "0s", duration: "12s", size: 10 },
    { top: "0%", left: "55%", delay: "4s", duration: "14s", size: 7 },
    { top: "15%", left: "30%", delay: "8.5s", duration: "10s", size: 9 },
    { top: "2%", left: "80%", delay: "13s", duration: "13s", size: 6 },
  ];
 
  if (mode !== "dark") return null;
 
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
      {stars.map((s, i) => (
        <div key={i} style={{
          position: "absolute", top: s.top, left: s.left,
          width: s.size, height: s.size, borderRadius: "50%",
          background: t.ink, opacity: s.opacity,
        }} />
      ))}
      {asteroids.map((a, i) => (
        <div key={i} style={{
          position: "absolute", top: a.top, left: a.left,
          animation: `asteroidDrift ${a.duration} linear ${a.delay} infinite`,
        }}>
          <AsteroidShape size={a.size} />
        </div>
      ))}
      <div style={{ position: "absolute", top: "18%", left: 0, animation: "planetDrift 42s linear infinite" }}>
        <PlanetShape size={26} />
      </div>
    </div>
  );
}

function GlobalStyles() {
  return (
    <style>{`
      .tag-pill { transition: color 150ms, border-color 150ms; }
      .tag-pill:hover { color: var(--accent) !important; border-color: var(--accent) !important; }
      .project-image-link { display: block; overflow: hidden; }
      .project-image-link img { transition: transform 300ms ease, filter 300ms ease; }
      .project-image-link:hover img { transform: scale(1.04); filter: brightness(1.05); }
      @keyframes asteroidDrift {
        0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
        8% { opacity: 0.9; }
        88% { opacity: 0.9; }
        100% { transform: translate(360px, 260px) rotate(340deg); opacity: 0; }
      }
      @keyframes planetDrift {
        0%, 80% { transform: translateX(-8vw); opacity: 0; }
        83% { opacity: 0.85; }
        97% { transform: translateX(108vw); opacity: 0.85; }
        100% { opacity: 0; }
      }
      @keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
    `}</style>
  );
}

// ---- Cursor Glow Effect ----
function CursorGlow({ t }) {
  const ref = useRef(null);
  useEffect(() => {
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const handleMove = (e) => {
      const el = ref.current;
      if (!el) return;
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      el.style.opacity = "0.15";
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
  return (
    <div ref={ref} style={{
      position: "fixed", left: 0, top: 0, width: 360, height: 360, borderRadius: "50%",
      pointerEvents: "none", zIndex: 1, opacity: 0, transition: "opacity 300ms",
      background: `radial-gradient(circle, ${t.accent} 0%, transparent 70%)`, filter: "blur(10px)",
    }} />
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
const SWIPE_THRESHOLD = 50;

export default function App() {
  const [active, setActive] = useState("about");
  const [displayed, setDisplayed] = useState("about");
  const [visible, setVisible] = useState(true);
  const [mode, setMode] = useState("dark");
  const [accentId, setAccentId] = useState("coral");
  const [glow, setGlow] = useState(true);

  const t = getTokens(mode);
 
  const goToIndex = (idx) => {
    const wrapped = ((idx % SECTIONS.length) + SECTIONS.length) % SECTIONS.length;
    const section = SECTIONS[wrapped];
    if (section === active) return;
    setVisible(false);
    setActive(section);
  };
 
  const handleChange = (section) => goToIndex(SECTIONS.indexOf(section));
 
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const currentIndex = SECTIONS.indexOf(active);
    if (deltaX <= -SWIPE_THRESHOLD) goToIndex(currentIndex + 1); // swipe left -> next
    else if (deltaX >= SWIPE_THRESHOLD) goToIndex(currentIndex - 1); // swipe right -> previous
    touchStartX.current = null;
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
    <div style={{ minHeight: "100vh", background: t.bg, color: t.ink, fontFamily: "system-ui, sans-serif", position: "relative", overflow: "hidden", transition: "background 200ms, color 200ms" }}>
      <GlobalStyles />
      <SpaceBackground mode={mode} t={t} />
      <CursorGlow t={t} />
      <Hero t={t} />
      <Nav sections={SECTIONS} active={active} onChange={handleChange} mode={mode} setMode={setMode} t={t} />
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{
          position: "relative", zIndex: 2,
          transition: `opacity ${TRANSITION_MS}ms ease-out, transform ${TRANSITION_MS}ms ease-out`,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
        }}
      >
        <ActiveSection t={t} />
      </div>
      <Footer t={t} />
    </div>
  );
}
