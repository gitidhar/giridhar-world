export default function Home() {
  return (
    <main className="screen">
      <div className="canvas">
        <nav className="nav">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            resume
          </a>

          <a
            href="https://github.com/contact_giridhar_for_portfolio"
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
            href="https://giridhar_doesnt_have_substack_yet.substack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            substack
          </a>
        </nav>

        <section className="description">
          <p className="bio">
            Currently an engineer in fintech @ visa. Interested in stablecoin,
            agentic payment modalities, & blockchain rails. Looking to pursue
            research in various artificial intelligence paradigms.
          </p>

          <a className="email" href="mailto:gpatriofficial@gmail.com">
            gpatriofficial@gmail.com
          </a>
        </section>

        <img
          className="symbols"
          src="/symbols.png"
          alt=""
        />

        <img
          className="latent"
          src="/latent.png"
          alt="Stick figure traversing the ocean in a boat"
        />
      </div>
    </main>
  );
}
