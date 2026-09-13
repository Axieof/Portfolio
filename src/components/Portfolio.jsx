import { useState } from "react";
import Dropdown from "./Dropdown";
import PortfolioItem from "./PortfolioItem";

const SPECIALIZATIONS = [
    "Cloud", 
    "Game", 
    "Modding",
    "Algorithm",
    "IOT",
    "Cybersecurity", 
    "AI", 
    "Frontend", 
    "Backend",
    "App"];

const TECHNOLOGIES = [
    "WIP",
    "Python",
    "C#", 
    "C++", 
    "Java",
    "SQL",
    "ASP.NET", 
    "HTML", 
    "CSS", 
    "React",
    "Node", 
    "Vite", 
    "Tailwind", 
    "Android SDK", 
    ];

const portfolio = [
  { title: "Realight", specialization: "Game", stack: ["C#", "ASP.NET", "HTML", "CSS"], link: "https://github.com/Axieof/Realight_Game", image: "/Portfolio/assets/RealightImg.png" },
  { title: "Multimatchmaker", specialization: "Algorithm", stack: ["C++"], link: "https://github.com/Axieof/MultiMatchmaker",image: "/Portfolio/assets/MultiMatchMaker.png" },
  { title: "SuperAdventure", specialization: "Game", stack: ["C#"], link: "https://github.com/Axieof/SuperAdventure",image: "/Portfolio/assets/SuperAdventure.png"  },
  { title: "Nyro", specialization: "Modding", stack: ["Java", "WIP"], link: "",image: "/Portfolio/assets/NyroLogo.png"  },
  { title: "Portfolio", specialization: "Frontend", stack: ["React", "Vite", "Tailwind"], link: "",image: "/Portfolio/assets/PortfolioLogo.png"  },
  { title: "Routine", specialization: "App", stack: ["Java", "Android SDK"], link: "https://play.google.com/store/apps/details?id=com.mad.p03.np2020.routine",image: "/Portfolio/assets/Routine.png"  },
];

function Portfolio({ t }) {
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
 
  const pillStyle = (active) => ({
    padding: "5px 12px", borderRadius: 999, fontFamily: "monospace", fontSize: 12, cursor: "pointer",
    border: `1px solid ${active ? t.accent : t.line}`,
    background: active ? t.accent : "transparent",
    color: active ? t.accentText : t.muted,
  });
 
  return (
    <div style={{ padding: "40px 16px", textAlign: "center", position: "relative", zIndex: 2 }}>
      <div style={{
        border: `1px solid ${t.line}`, borderRadius: 8, padding: 16,
        maxWidth: 820, margin: "0 auto 28px", textAlign: "left",
      }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", marginBottom: 12 }}>
          <span style={{ fontFamily: "monospace", fontSize: 11, color: t.muted, width: 110 }}>Specialization</span>
          <button onClick={() => setSelectedSpec(null)} style={pillStyle(!selectedSpec)}>All</button>
          {SPECIALIZATIONS.map((spec) => (
            <button key={spec} onClick={() => setSelectedSpec(spec)} style={pillStyle(selectedSpec === spec)}>
              {spec}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
          <span style={{ fontFamily: "monospace", fontSize: 11, color: t.muted, width: 110 }}>Technologies</span>
          <button onClick={() => setSelectedTech([])} style={pillStyle(selectedTech.length === 0)}>All</button>
          {TECHNOLOGIES.map((tech) => (
            <button key={tech} onClick={() => toggleTech(tech)} style={pillStyle(selectedTech.includes(tech))}>
              {tech}
            </button>
          ))}
        </div>
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

export default Portfolio;