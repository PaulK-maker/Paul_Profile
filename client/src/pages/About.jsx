import { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

function About() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get(`${API_URL}/api/profile`)
      .then(res => {
        setProfile(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setError(true)
        setLoading(false)
      })
  }, [])

  if (loading) return <h2 style={{ textAlign: 'center', marginTop: '5rem' }}>Loading...</h2>
  if (error || !profile) return <h2 style={{ textAlign: 'center', marginTop: '5rem', color: '#e53e3e' }}>Could not load profile. Please try again later.</h2>

  return (
    <div style={styles.container}>

      {/* Summary */}
      <section style={styles.section}>
        <h1 style={styles.heading}>About Me</h1>
        <p style={styles.summary}>{profile.summary}</p>
      </section>

      {/* Experience */}
      <section style={styles.section}>
        <h2 style={styles.subheading}>Experience</h2>
        {profile.experience.map((exp, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{exp.title}</h3>
            <p style={styles.cardSubtitle}>{exp.company} — {exp.location}</p>
            <p style={styles.duration}>{exp.duration}</p>
            <ul style={styles.bullets}>
              {exp.bullets.map((bullet, i) => (
                <li key={i} style={styles.bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section style={styles.section}>
        <h2 style={styles.subheading}>Education</h2>
        {profile.education.map((edu, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{edu.school}</h3>
            <p style={styles.cardSubtitle}>{edu.degree} in {edu.field}</p>
            <p style={styles.duration}>{edu.location} — {edu.year}</p>
          </div>
        ))}
      </section>

    </div>
  )
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '3rem 2rem',
  },
  section: {
    marginBottom: '3rem',
  },
  heading: {
    color: '#1a56db',
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  subheading: {
    color: '#1a56db',
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
    borderBottom: '2px solid #1a56db',
    paddingBottom: '0.5rem',
  },
  summary: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#444',
  },
  card: {
    backgroundColor: '#f8fafc',
    padding: '1.5rem',
    borderRadius: '8px',
    marginBottom: '1rem',
    borderLeft: '4px solid #1a56db',
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#1e3a5f',
    margin: '0 0 0.25rem 0',
  },
  cardSubtitle: {
    color: '#444',
    margin: '0 0 0.25rem 0',
  },
  duration: {
    color: '#888',
    fontSize: '0.9rem',
    margin: '0 0 0.75rem 0',
  },
  bullets: {
    paddingLeft: '1.25rem',
    margin: 0,
  },
  bullet: {
    color: '#444',
    marginBottom: '0.4rem',
    lineHeight: '1.6',
  }
}

export default About