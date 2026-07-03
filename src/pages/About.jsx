import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="about">
      <div className="about-grid">
        <div className="about-intro">
          <p className="page-breadcrumb">&gt; cd ~/about</p>
          <h1>About <em className="serif-accent">Me</em></h1>
          <h3>Builder of Things. Breaker of Bugs.</h3>
          <p>
            I build interfaces that work and look like they mean it. Based in Coastal Bend, Texas,
            I work in JavaScript, React.js, and Bootstrap, with an eye for design that comes from
            years of living at the intersection of creative and technical. I find bugs everywhere I
            go. I can't turn it off. Turns out that's a skill.
          </p>
          <p>
            I work from home on a MacBook Air M4, with VS Code, GitHub, and too many browser tabs
            open at once.
          </p>
          <p>
            ✦ Fun fact: I'm building a homestead in South Texas — chickens, garden, the whole
            thing. Turns out ranching and coding have a lot in common: something is always broken
            and you just have to figure it out.
          </p>
        </div>

        <div className="about-sidebar">
          <img src="/images/victoria.jpeg" alt="Victoria headshot" />
          <h3>Technologies</h3>
          <p>JavaScript · React.js · Bootstrap · Python · Axios · REST APIs</p>
          <h3>Tools</h3>
          <p>VS Code · GitHub · Git · Netlify · macOS · MacBook Air M4</p>
        </div>
      </div>

      <div className="about-cta">
        <a href="/VGarcia Resume 2026.pdf" download="Victoria-Garcia-Resume.pdf">
          Download Resume [ .pdf ]
        </a>
        <Link to="/work">See my projects</Link>
      </div>
    </main>
  )
}
