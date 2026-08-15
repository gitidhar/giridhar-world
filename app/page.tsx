export default function Home() {
  return (
    <main className="screen">
      <div className="canvas">
        <nav className="nav">
          <a href="/resume.pdf">resume</a>

          <a
            href="https://github.com/gitidhar"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>

          <a
            href="https://linkedin.com/in/giridhar-patri"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>

          <a
            href="https://YOUR_SUBSTACK.substack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            substack
          </a>
        </nav>

        <section className="description">
          currently an engineer in fintech @ visa. Interested in stablecoin,
          agentic payment modalities, & blockchain rails. Looking to pursue
          research in various artificial intelligence paradigms.
        </section>
      </div>
    </main>
  );
}