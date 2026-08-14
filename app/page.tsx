export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "url('/landing.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "white",
        position: "relative",
        fontFamily: '"Times New Roman", Times, serif',
        color: "black",
        overflow: "hidden",
      }}
    >
      <nav
        style={{
          position: "absolute",
          top: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "48px",
          fontSize: "24px",
          whiteSpace: "nowrap",
        }}
      >
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "black",
            textDecoration: "underline",
          }}
        >
          resume
        </a>

        <a
          href="https://github.com/gitidhar"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "black",
            textDecoration: "underline",
          }}
        >
          github
        </a>

        <a
          href="https://linkedin.com/in/giridhar-patri"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "black",
            textDecoration: "underline",
          }}
        >
          linkedin
        </a>

        <a
          href="https://YOUR_SUBSTACK.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "black",
            textDecoration: "underline",
          }}
        >
          substack
        </a>
      </nav>

      <section
        style={{
          position: "absolute",
          top: "47%",
          left: "37%",
          transform: "translate(-50%, -50%)",
          width: "420px",
          maxWidth: "80vw",
          color: "black",
          fontSize: "20px",
          lineHeight: "1.45",
          textAlign: "left",
        }}
      >
        <p style={{ margin: 0 }}>
          currently an engineer in fintech at @ visa. Interested in stablecoin, agentic payment modalities, & looking to pursue research in various artificial 
          intelligence paradigms.
        </p>

        <p
          style={{
            marginTop: "22px",
            marginBottom: 0,
            fontSize: "18px",
          }}
        >
          gpatriofficial@gmail.com
        </p>
      </section>
    </main>
  );
}