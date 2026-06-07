import { useState, useEffect } from 'react'
import axios from 'axios'

function Skills() {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/profile')
      .then(res => setSkills(res.data.skills))
      .catch(err => console.error(err))
  }, [])

  return (
    <div style={{ padding: '3rem 2rem' }}>
      <h1 style={{ color: '#1a56db', marginBottom: '2rem' }}>Technical Skills</h1>
      <div style={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.card}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  card: {
    backgroundColor: '#1a56db',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '2rem',
    fontSize: '1rem',
    fontWeight: '500',
  }
}

export default Skills