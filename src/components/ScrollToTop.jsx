import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  // React Router swaps page content without resetting scroll position like a
  // full page load would, so without this, navigating to a new route leaves
  // you wherever the previous page had scrolled to.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
