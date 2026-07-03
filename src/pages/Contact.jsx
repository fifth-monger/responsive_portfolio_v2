export default function Contact() {
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
            I'm currently open to freelance work and full-time opportunities — front-end
            focused, but happy to get my hands dirty across the stack.
          </p>
        </div>

        <div className="contact-form-panel">
          <h2>Send me a message</h2>
          <form name="contact" method="POST" data-netlify="true">
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
            <button type="submit">Send it →</button>
          </form>
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
