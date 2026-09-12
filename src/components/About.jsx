function About({ t }) {
  return (
    <section style={{ maxWidth: 760, margin: "0 auto", padding: "56px 24px", position: "relative", zIndex: 2 }}>
      <div style={{ display: "flex", gap: 40, flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ flex: "1 1 280px" }}>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: t.ink }}>
            I'm a software engineer who enjoys taking ambiguous problems and
            turning them into working systems. I've worked across hardware
            repair, backend services, and shipping production software, and I
            care about building things that hold up under real use.
          </p>
        </div>
        <div style={{
          flex: "0 0 auto", width: 200, height: 200, borderRadius: "50%",
          border: `2px solid ${t.accent}`, padding: 4,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{
            width: "100%", height: "100%", borderRadius: "50%",
            border: `1px dashed ${t.line}`, display: "flex", alignItems: "center",
            justifyContent: "center", color: t.muted, fontFamily: "monospace", fontSize: 12, textAlign: "center",
          }}>
            your photo
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;