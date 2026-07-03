import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="home">
      <section className="home-hero">
        

        <div className="home-hero-inner">
          <div className="terminal-window">

            <div className="terminal-bar">
              <span className="terminal-dot"></span>
              <span className="terminal-dot"></span>
              <span className="terminal-dot"></span>
              <span className="terminal-title">victoria@coastalbend:~$</span>
            </div>
           
            <div className="terminal-body">
              
              <p className="home-hero-label">&gt; VICTORIA_GARCIA.SYS — TEXAS COASTAL BEND</p>
              <h1 className="home-hero-heading">finds bugs for fun<span className="cursor">_</span> / builds things <em className="serif-accent">on purpose</em></h1>
              <p className="home-hero-subtext">
                Front-end developer building interfaces that work and look like they mean it —
                React, JavaScript, and an eye for design.
              </p>
              <div className="home-hero-actions">
                <Link className="home-btn home-btn-primary" to="/work">[view_work]</Link>
                <Link className="home-btn home-btn-secondary" to="/contact">[contact]</Link>
              </div>
            </div>
          </div>
           <img className="home-hero-flower" src="/images/passionflower.webp" alt="" aria-hidden="true" />
        </div>
      </section>
      

      <section className="home-featured">
        <section className="home-stack">
          <span className="home-stack-prompt">$ stack</span>
          <div className="home-stack-viewport">
            <ul className="home-stack-list">
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
              <li>Tailwind CSS</li>
              <li>SQL</li>
              <li>Supabase</li>
              <li>Netlify</li>
              <li>Git</li>
              <li>Claude Code</li>
              <li aria-hidden="true">React</li>
              <li aria-hidden="true">JavaScript</li>
              <li aria-hidden="true">HTML/CSS</li>
              <li aria-hidden="true">Tailwind CSS</li>
              <li aria-hidden="true">SQL</li>
              <li aria-hidden="true">Supabase</li>
              <li aria-hidden="true">Netlify</li>
              <li aria-hidden="true">Git</li>
              <li aria-hidden="true">Claude Code</li>
            </ul>
          </div>
        </section>
        <p className="home-featured-label home-tone-light">Latest Work</p>

        <article className="home-entry">
          
          <div className="home-entry-media">
            <span className="home-entry-date">06.2026</span>
            <img src="/images/hemingway.png" alt="Hemingway Nursery Project" />
          </div>
          <div className="home-entry-copy">
            <h3>Hemingway Nursery Project</h3>
            <p>
              A full production site for a family-run daylily nursery, built solo as a freelance project. React frontend paired with a Square catalog of 371 products, plus DNS migration, email routing, and SEO, scoped, built, and shipped for a paying client.
            </p>
            <a className="home-entry-link" href="https://hemingwaynursery.com/" target="_blank" rel="noreferrer">
              Visit site
            </a>
          </div>
        </article>
        <Link className="home-see-all" to="/work">See all projects</Link>
      </section>
    </main>
  )
}
