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
          fontSize: "14px",
        }}
      >
        <a
          href="/resume.pdf"
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

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          fontSize: "12px",
        }}
      >
        hi
      </div>
    </main>
  );
}