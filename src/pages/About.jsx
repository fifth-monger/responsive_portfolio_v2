import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="about">
      <div className="about-grid">
        <div className="about-intro">
          <p className="page-breadcrumb">&gt; cd ~/about</p>
          <h1>About <em className="serif-accent">Me</em></h1>
          <p>
            I build interfaces in JavaScript, React, and CSS, based in Coastal Bend, Texas. Design has always come naturally to me, probably from years of living somewhere between creative work and technical work.
          </p>
          <p>
          I notice bugs everywhere, in software, in workflows, in half-finished systems nobody's touched in years. It used to just feel like an annoying habit. Now it's the thing I actually get paid for.
          </p>
          <p>
           This year I built and shipped a full production site for a paying client: migrated 300+ products into a new system, taught him how to manage his own backend, and tracked down a shipping bug all the way to the root cause.
          </p>
          <p>
            Before that, I was the person every job pulled aside to fix the POS system or make sense of an Oracle NetSuite mess nobody else wanted to deal with. Troubleshooting under pressure isn't new to me, I've just started building the tools instead of only patching around them.
          </p>
      
          <p>✦ I'm also slowly building a homestead in South Texas, chickens, garden, the whole thing. One of the plants I grow is passionflower, an herb traditionally used to ease anxiety and support better sleep. It's become a small reminder to slow down, something that carries over into debugging more than you'd expect.</p>
        </div>

        <div className="about-sidebar">
          <img src="/images/victoria.jpeg" alt="Victoria headshot" />
          <h3>Technologies</h3>
          <div className="about-tag-list">
            <span className="project-tag">JavaScript</span>
            <span className="project-tag">React</span>
            <span className="project-tag">HTML/CSS</span>
            <span className="project-tag">REST APIs</span>
            <span className="project-tag">Axios</span>
            <span className="project-tag">SQL</span>
          </div>
          <h3>Tools</h3>
          <div className="about-tag-list">
            <span className="project-tag">VS Code</span>
            <span className="project-tag">GitHub</span>
            <span className="project-tag">Git</span>
            <span className="project-tag">Netlify</span>
            <span className="project-tag">macOS</span>
            <span className="project-tag">MacBook Air M4</span>
          </div>
        </div>
      </div>

      <div className="about-cta">
        <a href="/victoria-garcia-resume-2026.pdf" download="victoria-garcia-resume-2026.pdf">
          Download Resume [ .pdf ]
        </a>
        <Link to="/work">See my projects</Link>
      </div>
    </main>
  )
}
