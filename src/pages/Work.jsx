export default function Work() {
  const projects = [
    {
      img: '/images/hemingway.webp',
      alt: 'Hemingway Nursery Project',
      title: 'Hemingway Nursery Project',
      stack: 'React · Square API · Netlify · DNS/Email migration',
      description:
        'A full production site for a family-run daylily nursery, built solo as a freelance project. React frontend paired with a Square catalog of 371 products, plus DNS migration, email routing, and SEO, scoped, built, and shipped for a paying client.',
      url: 'https://hemingwaynursery.com/',
      label: 'Visit site →',
    },
    {
      img: '/images/stromata.webp',
      alt: 'Stromata weather app',
      title: 'Stromata',
      stack: 'React · Axios · OpenWeatherMap API · Netlify',
      description:
        'A real-time weather app with a dark biopunk aesthetic. Displays live conditions, forecasts, and dynamic backgrounds by weather state.',
      url: 'https://stromata.netlify.app',
      label: 'Launch Stromata →',
      github: 'https://github.com/fifth-monger/weather-react-w4',
    },
    {
      img: '/images/mezcalarchive.webp',
      alt: 'The Mezcal Archive',
      title: 'The Mezcal Archive',
      stack: 'HTML · CSS · Bootstrap · Netlify',
      description:
        'A personal editorial site about mezcal and agave spirits — combining cultural depth, research, and a strong visual voice rooted in tradition.',
      url: 'https://mezcalarchive.netlify.app',
      label: 'Visit the Archive →',
      github: 'https://github.com/fifth-monger/ra_mezcal_project',
    },
    {
      img: '/images/epitome.png',
      alt: 'epi.tome dictionary app',
      title: 'epi.tome',
      stack: 'React · Axios · Free Dictionary API · Netlify',
      description:
        'A cyberpunk-styled dictionary app with word definitions, phonetics, audio pronunciation, and part-of-speech filtering.',
      url: 'https://epi-tome.netlify.app',
      label: 'Launch epi.tome →',
      github: 'https://github.com/fifth-monger/dictionary-react-project',
    },
    {
      img: '/images/weather_widget.png',
      alt: 'Kawaii Weather Widget',
      title: 'Kawaii Weather Widget',
      stack: 'HTML · CSS · JavaScript · Weather API',
      description:
        'Real-time weather app with a custom kawaii aesthetic. Renders live temperature, humidity, and wind data dynamically.',
      url: 'https://kawaiiweather.netlify.app',
      label: 'Launch Widget →',
      github: 'https://github.com/fifth-monger/kawaii-weather-widget',
    },
    {
      img: '/images/poem_generator.png',
      alt: 'Uplifting Poem Generator',
      title: 'Uplifting Poem Generator',
      stack: 'HTML · CSS · JavaScript · AI API',
      description:
        'An AI-powered app that takes a user-submitted theme and generates a custom poem. Clean UI with seamless API integration.',
      url: 'https://upliftingpoemgenerator.netlify.app',
      label: 'Launch Generator →',
      github: 'https://github.com/fifth-monger/poem-generator',
    },
  ]

  return (
    <main className="work">
      <p className="page-breadcrumb">&gt; ls ~/projects</p>
      <h1>Things I've <em className="serif-accent">Built</em></h1>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-image-wrap">
              <img src={project.img} alt={project.alt} />
              <div className="project-image-overlay"></div>
            </div>
            <div className="project-card-body">
              <h3>{project.title}</h3>
              <span className="project-tag">{project.stack}</span>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                  {project.label}
                </a>
                {project.github && (
                  <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                    View code →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
