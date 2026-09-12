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
        </div>
        <div
            style={{
                flex: "1 1 200px",
                maxWidth: 240,
                aspectRatio: "1 / 1",
                border: `1px solid ${t.line}`,
                borderRadius: 8,
                overflow: "hidden",
            }}
            >
            <img
                src="/Portfolio/assets/Pritheev_Roshan_Profile.jpg"
                alt="Profile"
                style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                }}
            />
        </div>
    </div>
    </section>
);
}

export default About;