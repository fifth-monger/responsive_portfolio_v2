import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="home">
      <section className="home-hero">
        <img className="home-hero-flower" src="/images/passionflower.png" alt="" aria-hidden="true" />

        <p className="home-hero-label">&gt; VICTORIA_GARCIA.SYS — TEXAS COASTAL BEND</p>
        <h1 className="home-hero-heading">finds bugs for fun_ / builds things on purpose</h1>
        <p className="home-hero-subtext">
          Front-end developer building interfaces that work and look like they mean it —
          React, JavaScript, and an eye for design.
        </p>
        <div className="home-hero-actions">
          <Link className="home-btn home-btn-primary" to="/work">[view_work]</Link>
          <Link className="home-btn home-btn-secondary" to="/contact">[contact]</Link>
        </div>
      </section>

      <section className="home-featured">
        <p className="home-featured-label home-tone-light">Featured Work</p>

        <div className="home-project home-tone-light">
          <div className="home-project-media">
            <img src="/images/stromata.png" alt="Stromata weather app" />
          </div>
          <div className="home-project-copy">
            <h3>Stromata</h3>
            <p>
              A real-time weather app with a dark biopunk aesthetic. Built with React and Axios,
              it displays live conditions, forecasts, and dynamic backgrounds that shift based on
              current weather state.
            </p>
            <a href="https://stromata.netlify.app" target="_blank" rel="noreferrer">
              Launch Stromata →
            </a>
          </div>
        </div>

        <div className="home-project home-project-reverse home-tone-light">
          <div className="home-project-media">
            <img src="/images/epitome.png" alt="epi.tome dictionary app" />
          </div>
          <div className="home-project-copy">
            <h3>epi.tome</h3>
            <p>
              A cyberpunk-styled dictionary app powered by the Free Dictionary API. Features word
              definitions, phonetics, audio pronunciation, and part-of-speech filtering — built
              with React and designed with a dark editorial aesthetic.
            </p>
            <a href="https://epi-tome.netlify.app" target="_blank" rel="noreferrer">
              Launch epi.tome →
            </a>
          </div>
        </div>

        <div className="home-project home-tone-dark">
          <div className="home-project-media">
            <img src="/images/mezcalarchive.png" alt="The Mezcal Archive" />
          </div>
          <div className="home-project-copy">
            <h3>The Mezcal Archive</h3>
            <p>
              A personal editorial site about mezcal and agave spirits — combining cultural depth,
              research, and a strong visual voice rooted in tradition.
            </p>
            <a href="https://mezcalarchive.netlify.app" target="_blank" rel="noreferrer">
              Visit the Archive →
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
