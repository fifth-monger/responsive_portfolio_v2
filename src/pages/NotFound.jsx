import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="page-breadcrumb">&gt; cd /wherever</p>
      <h1>bash: <em className="serif-accent">no such file or directory</em></h1>
      <p>This page doesn't exist.</p>
      <Link className="not-found-link" to="/">Back home →</Link>
    </main>
  )
}
