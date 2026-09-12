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

export default Hero;