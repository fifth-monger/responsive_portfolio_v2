import { Link, useLocation } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <footer className={`site-footer${isHome ? ' home-footer' : ''}`}>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-invite">
            <div className="footer-status">
              <span className="status-dot"></span>
              <span className="status-text">Available for new projects</span>
            </div>
            <h2 className="footer-headline">
              Let's make<br />something good.
            </h2>
            <a className="footer-email-cta" href="mailto:victoria.garcia.workspace@gmail.com">
              victoria.garcia.workspace@gmail.com →
            </a>
          </div>

          <div className="footer-rail">
            <nav className="footer-nav-inline" aria-label="Footer">
              <Link to="/">Home</Link>
              <span className="footer-nav-divider">/</span>
              <Link to="/about">About Me</Link>
              <span className="footer-nav-divider">/</span>
              <Link to="/work">Projects</Link>
              <span className="footer-nav-divider">/</span>
              <Link to="/contact">Contact Me</Link>
            </nav>

            <div className="footer-elsewhere">
              <div className="footer-label">Elsewhere</div>
              <div className="footer-pill-row">
                <a className="footer-pill" href="https://github.com/fifth-monger" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="footer-pill" href="https://linkedin.com/in/victoria-garcia-workspace" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="footer-location">
              <div className="footer-label">Based in</div>
              <div className="footer-location-value">Texas Coastal Bend — 27.8° N, 97.3° W</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Victoria Garcia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
