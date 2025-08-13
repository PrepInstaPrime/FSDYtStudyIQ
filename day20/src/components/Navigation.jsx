import React from 'react'
import styles from './Navigation.module.css'
import {Link} from 'react-router-dom'
import myContext from '../store/myContext'
import { useContext } from 'react'
export default function Navigation() {
  const {isLoggedIn} = useContext(myContext);
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>Foodies</div>
      <ul className={styles.links}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className={styles.authActions}>
        {isLoggedIn ? <Link className={styles.loginBtn} to="/logout">Log out</Link> : <Link className={styles.loginBtn} to="/login">Log in</Link>}  
        <button className={styles.cta}>Order Now</button>
      </div>
    </nav>
  )
}


