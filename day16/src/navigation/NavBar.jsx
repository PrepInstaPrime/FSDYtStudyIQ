import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  let navitems = ["Home", "About", "Media", "Services", "Login"];
  return (
    <>
      <nav className={styles.navigation}>
        <ul className={styles.navitems}>
          {/* {
                    navitems.map((item, idx)=>{
                        return (
                        // <li key={idx} className={styles.navitem}><a href={`#${item.toLowerCase()}`}>{item}</a></li>
                        <li key={idx} className={styles.navitem}><Link to={`/${item.toLowerCase()=='home' ? "/" : item.toLowerCase()}`}>{item}</Link></li>
                    )
                    })
                } */}
          <li className={styles.navitem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navitem}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles.navitem}>
            <Link to="/media">Media</Link>
          </li>
          <li className={styles.navitem}>
            <Link to="/services">Services</Link>
          </li>
          <li className={styles.navitem}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
