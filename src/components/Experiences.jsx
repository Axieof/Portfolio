const experiences = [
  { company: "TKD Technology", position: "Intern", fromYear: "Jan 2019", toYear: "Mar 2019", tags: ["Hardware", "Benchmarking"], description: "Hardware repair and troubleshooting for laptops and mobile phones." },
  { company: "AIDA Technologies", position: "Software Engineering Intern", fromYear: "Mar 2021", toYear: "Oct 2021", tags: ["Python", "SQL"], description: "Developed software, deployed to production, and learned the dev-ops process." },
  { company: "Singapore Armed Forces", position: "Detachment Commander/Infosys Operator", fromYear: "December 2023", toYear: "May 2024", tags: ["Network Setup", "Hardware Management", "Troubleshooting"], description: "Led and managed the info systems sub team to work alongside other sub teams to support companies operations. Responsible for setting up and maintaining a mobile intranet network, troubleshooting hardware and software issues, and ensuring the smooth operation of the company's information systems." },
  { company: "Statera Solutions", position: "Backend Developer", fromYear: "June 2024", toYear: "June 2025", tags: ["Node.js", "React", "MongoDB"], description: "Designed and developed the structure and backend for the Avenlis AI Red Teaming product, collaborated with 4 co-founders to plan features, divide responsibilities, and develop the prototype into production"}
];

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
                <span key={tag} className="tag-pill" style={{
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

export default Experiences;