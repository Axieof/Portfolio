import { useState, useEffect } from "react";

function ScrambleText({ text, t }) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [display, setDisplay] = useState(text);
 
  useEffect(() => {
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setDisplay(text); return; }
 
    let frame = 0;
    const totalFrames = 14;
    const interval = setInterval(() => {
      frame++;
      const revealCount = Math.floor((frame / totalFrames) * text.length);
      setDisplay(
        text.split("").map((c, i) => {
          if (c === " ") return " ";
          if (i < revealCount) return c;
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      if (frame >= totalFrames) {
        clearInterval(interval);
        setDisplay(text);
      }
    }, 45);
    return () => clearInterval(interval);
  }, [text]);
 
  return <span style={{ color: t.ink }}>{display}</span>;
}

function GithubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.21.66.8.55A10.51 10.51 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function Hero({ t }) {
  return (
    <header style={{ position: "relative", zIndex: 2, textAlign: "center", paddingTop: 72, paddingBottom: 24 }}>
      <h1 style={{ fontSize: 44, fontWeight: 600, letterSpacing: "-0.02em", margin: 0, fontFamily: "monospace" }}>
        <ScrambleText text="Pritheev Roshan" t={t} />
      </h1>
      <p style={{ marginTop: 10, fontFamily: "monospace", color: t.muted, fontSize: 16 }}>
        Software Engineer<span style={{ animation: "blink 1s step-start infinite" }}>_</span>
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: 18, marginTop: 16 }}>
        <a href="https://github.com/Axieof" target="_blank" rel="noopener noreferrer" style={{ color: t.muted }}>
          <GithubIcon />
        </a>
        <a href="https://linkedin.com/in/Pritheev-Roshan" target="_blank" rel="noopener noreferrer" style={{ color: t.muted }}>
          <LinkedinIcon />
        </a>
      </div>
    </header>
  );
}

export default Hero;