import { useState } from "react";
import Dropdown from "./Dropdown";
import PortfolioItem from "./PortfolioItem";

const SPECIALIZATIONS = ["Cloud", "Game", "Algorithm", "AI", "Frontend", "Backend", "Modding"];
const TECHNOLOGIES = ["C#", "ASP.NET", "HTML", "CSS", "C++", "Java", "React", "Vite", "Tailwind", "Android SDK", "WIP"];

const portfolio = [
  { title: "Realight", specialization: "Game", stack: ["C#", "ASP.NET", "HTML", "CSS"], link: "https://github.com/Axieof/Realight_Game", image: "/Portfolio/assets/RealightImg.png" },
  { title: "Multimatchmaker", specialization: "Backend", stack: ["C++"], link: "https://github.com/Axieof/MultiMatchmaker",image: "/Portfolio/assets/MultiMatchmaker.png" },
  { title: "SuperAdventure", specialization: "Game", stack: ["C#"], link: "https://github.com/Axieof/SuperAdventure",image: "/Portfolio/assets/SuperAdventure.png"  },
  { title: "Nyro", specialization: "Modding", stack: ["Java", "WIP"], link: "",image: "/Portfolio/assets/NyroLogo.png"  },
  { title: "Portfolio", specialization: "Frontend", stack: ["React", "Vite", "Tailwind"], link: "",image: "/Portfolio/assets/PortfolioLogo.png"  },
  { title: "Routine", specialization: "Frontend", stack: ["Java", "Android SDK"], link: "https://play.google.com/store/apps/details?id=com.mad.p03.np2020.routine",image: "/Portfolio/assets/Routine.png"  },
];

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

export default Portfolio;