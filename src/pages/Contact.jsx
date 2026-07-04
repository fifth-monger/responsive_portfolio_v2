import { useState } from 'react'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  // Netlify Forms only intercepts a real browser POST, but letting that happen
  // natively reloads the whole SPA with no confirmation. Submitting via fetch
  // keeps the app mounted so we can show a success/error state in its place.
  const handleSubmit = (e) => {
    e.preventDefault()
    setError(false)
    const data = Object.fromEntries(new FormData(e.target))

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(data),
    })
      .then(() => setSubmitted(true))
      .catch(() => setError(true))
  }

  return (
    <main className="contact">
      <p className="page-breadcrumb">&gt; ping victoria</p>
      <h1>Let's <em className="serif-accent">Build</em> Together</h1>
      <h3>Have a project in mind? Let's make it happen!</h3>

      <div className="contact-grid">
        <div className="contact-intro-panel">
          <h2>Let's talk shop</h2>
          <p>
            Whether you've got a fully scoped project or just a rough idea, I'd love to hear
            about it. I work fast, communicate clearly, and care as much about the details as
            the big picture.
          </p>
          <p>
            I built and handed off a production site for a non-technical client: migrating
            300+ products, teaching him to manage his own backend, and tracking down a
            shipping bug through to resolution.
          </p>
          <p>
            I'm currently open to freelance work and full-time opportunities — front-end
            focused, but happy to get my hands dirty across the stack.
          </p>
          <p>I reply within 24hrs.</p>
        </div>

        <div className="contact-form-panel">
          <h2>Send me a message</h2>
          {submitted ? (
            <p>Thanks for reaching out — I'll get back to you within 24 hours.</p>
          ) : (
            <form name="contact" onSubmit={handleSubmit} data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} required />
              </div>
              {error && <p>Something went wrong — please try again or email me directly.</p>}
              <button type="submit">Send it →</button>
            </form>
          )}
        </div>
      </div>

      <div className="contact-connect">
        <h2>Connect with me</h2>
        <div className="contact-connect-links">
          <a href="https://github.com/fifth-monger" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i> GitHub
          </a>
          <a href="https://linkedin.com/in/victoria-garcia-workspace" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin-in"></i> LinkedIn
          </a>
        </div>
      </div>
    </main>
  )
}
