import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Nav() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav className={`site-nav${isHome ? ' home-nav' : ''}`}>
      <NavLink className="nav-brand" to="/" end>Victoria Garcia</NavLink>
      <button
        type="button"
        className="nav-toggle"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
      </button>
      <ul className={`nav-links${isOpen ? ' nav-links-open' : ''}`}>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About Me</NavLink></li>
        <li><NavLink to="/work">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact Me</NavLink></li>
      </ul>
    </nav>
  )
}
