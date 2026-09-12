function Footer({ t }) {
  return (
    <div style={{ padding: "20px 0", textAlign: "center", color: t.muted, fontSize: 13, opacity: 0.8, position: "relative", zIndex: 2 }}>
      © {new Date().getFullYear()} Pritheev Roshan. All rights reserved.
    </div>
  );
}

export default Footer;