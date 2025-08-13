import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import styles from './Login.module.css'
import { useNavigate, Link } from 'react-router-dom'
import { useContext } from 'react'
import myContext from '../store/myContext'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useContext(myContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setError('')
    const saved = localStorage.getItem('foodies_last_signup')
    if (!saved) {
      setError('No account found. Please sign up first.')
      return
    }
    try {
      const user = JSON.parse(saved)
      const isValid = user && user.email === email && user.password === password
      if (!isValid) {
        setError('Invalid email or password')
        return
      }
      login({ fullName: user.fullName, email: user.email })
      navigate('/')
    } catch (e) {
      setError('Something went wrong. Please try again or sign up again.')
    }
  }

  return (
    <div className={styles.page}>
      <Navigation />
      <div className={styles.container}>
        <div className={styles.brandBlock}>
          <h1>Foodies</h1>
          <p>Discover the best food & drinks in your city</p>
        </div>
        <div className={styles.card}>
          <h2>Welcome back</h2>
          <p className={styles.sub}>Log in to continue</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>
              Email
              <input
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit" className={styles.submit}>Log in</button>
          </form>
          {error && <div className={styles.alt} style={{ color: '#e23744' }}>{error}</div>}
          <div className={styles.alt}>
            New to Foodies? <Link to="/signup">Create an account</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
