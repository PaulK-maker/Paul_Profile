import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', marginTop: '5rem' }}>
        <h2 style={{ color: '#1a56db' }}>Thanks for reaching out! 👋</h2>
        <p>I'll get back to you soon.</p>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Me</h1>
      <p style={styles.subtext}>
        Open to opportunities, collaborations and conversations!
      </p>

      <div style={styles.form}>
        <div style={styles.field}>
          <label style={styles.label}>Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="I'd love to connect..."
            rows={6}
            style={{ ...styles.input, resize: 'vertical' }}
          />
        </div>

        <button onClick={handleSubmit} style={styles.button}>
          Send Message →
        </button>
      </div>

      {/* Direct contact info */}
      <div style={styles.contactInfo}>
        <p>📧 pkaranjaxn@gmail.com</p>
        <p>📍 Portland, Oregon</p>
        <p>💼 <a href="https://linkedin.com/in/Paul-M-Karanja" target="_blank"
          rel="noreferrer" style={{ color: '#1a56db' }}>LinkedIn</a></p>
        <p>💻 <a href="https://github.com/PaulK-maker" target="_blank"
          rel="noreferrer" style={{ color: '#1a56db' }}>GitHub</a></p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '3rem 2rem',
  },
  heading: {
    color: '#1a56db',
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  subtext: {
    color: '#666',
    marginBottom: '2rem',
  },
  form: {
    backgroundColor: '#f8fafc',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    marginBottom: '2rem',
  },
  field: {
    marginBottom: '1.25rem',
  },
  label: {
    display: 'block',
    fontWeight: '600',
    marginBottom: '0.4rem',
    color: '#1e3a5f',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'Arial',
  },
  button: {
    backgroundColor: '#1a56db',
    color: 'white',
    padding: '0.75rem 2rem',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    width: '100%',
    marginTop: '0.5rem',
  },
  contactInfo: {
    backgroundColor: '#f8fafc',
    padding: '1.5rem',
    borderRadius: '10px',
    borderLeft: '4px solid #1a56db',
    lineHeight: '2',
  }
}

export default Contact