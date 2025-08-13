import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import styles from './SignUp.module.css'
import { useNavigate, Link } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function SignUp() {
    const navigate = useNavigate()
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [agree, setAgree] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        if (!agree) return
        const payload = {
            fullName,
            email,
            // NOTE: storing password in localStorage is not secure; for demo purposes only
            password,
            time: new Date().toISOString(),
        }
        localStorage.setItem('foodies_last_signup', JSON.stringify(payload))
        toast.success('Account created successfully')
        setTimeout(() => navigate('/login'), 1200)
    }


    return (
        <div className={styles.page}>
            <Navigation />
            <div className={styles.container}>
                <div className={styles.brandBlock}>
                    <h1>Foodies</h1>
                    <p>Join Foodies and discover amazing meals around you</p>
                </div>
                <div className={styles.card}>
                    <h2>Create your account</h2>
                    <p className={styles.sub}>Sign up to get started</p>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label>
                            Full name
                            <input
                                type="text"
                                placeholder="Alex Johnson"
                                required
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </label>
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
                                placeholder="Create a password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <label className={styles.inline}>
                            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} required />
                            I agree to the Terms and Privacy Policy
                        </label>
                        <button type="submit" className={styles.submit} disabled={!agree}>Create account</button>
                    </form>
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        transition={Bounce}
                    />
                    <div className={styles.alt}>
                        Already have an account? <Link to="/login">Log in</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
