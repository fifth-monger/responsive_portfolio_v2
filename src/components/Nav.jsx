import { NavLink, useLocation } from 'react-router-dom'

export default function Nav() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <nav className={`site-nav${isHome ? ' home-nav' : ''}`}>
      <NavLink className="nav-brand" to="/" end>Victoria Garcia</NavLink>
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About Me</NavLink></li>
        <li><NavLink to="/work">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact Me</NavLink></li>
      </ul>
    </nav>
  )
}
