import { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

function Home() {
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
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Hi, I'm {profile.name} 👋</h1>
      <h2>{profile.title}</h2>
      <p>📍 {profile.location}</p>
      <p>{profile.summary}</p>
      <div style={{ marginTop: '2rem' }}>
        <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer"
          style={{ marginRight: '1rem', color: '#1a56db' }}>LinkedIn</a>
        <a href={`https://${profile.github}`} target="_blank" rel="noreferrer"
          style={{ color: '#1a56db' }}>GitHub</a>
      </div>
    </div>
  )
}

export default Home