import { useState, useEffect } from 'react'
import axios from 'axios'

function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/profile')
      .then(res => setProjects(res.data.projects))
      .catch(err => console.error(err))
  }, [])

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Projects</h1>
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <h2 style={styles.cardTitle}>{project.name}</h2>
            <p style={styles.description}>{project.description}</p>

            {/* Tech stack tags */}
            <div style={styles.techRow}>
              {project.tech.map((tech, i) => (
                <span key={i} style={styles.tag}>{tech}</span>
              ))}
            </div>

            {/* Links */}
            <div style={styles.links}>
              {project.github && (
                <a
                  href={`https://${project.github}`}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.link}>
                  GitHub →
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  style={{ ...styles.link, backgroundColor: '#047857' }}>
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '3rem 2rem',
  },
  heading: {
    color: '#1a56db',
    fontSize: '2rem',
    marginBottom: '2rem',
    borderBottom: '2px solid #1a56db',
    paddingBottom: '0.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    backgroundColor: '#f8fafc',
    borderRadius: '10px',
    padding: '1.5rem',
    borderTop: '4px solid #1a56db',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  cardTitle: {
    color: '#1e3a5f',
    fontSize: '1.25rem',
    marginBottom: '0.75rem',
  },
  description: {
    color: '#555',
    lineHeight: '1.7',
    marginBottom: '1rem',
  },
  techRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.25rem',
  },
  tag: {
    backgroundColor: '#e0e7ff',
    color: '#1a56db',
    padding: '0.25rem 0.75rem',
    borderRadius: '1rem',
    fontSize: '0.85rem',
    fontWeight: '500',
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    backgroundColor: '#1a56db',
    color: 'white',
    padding: '0.5rem 1.25rem',
    borderRadius: '6px',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '500',
  }
}

export default Projects