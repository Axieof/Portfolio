const URL = "https://getform.io/f/23705d46-feab-412b-b210-4a01dc643482"; 

const fieldStyle = (t) => ({ 
    padding: 10, 
    background: t.panel, 
    border: `1px solid ${t.line}`, 
    borderRadius: 6, color: t.ink, 
    fontSize: 14, 
    outline: "none", 
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

export default Contact;