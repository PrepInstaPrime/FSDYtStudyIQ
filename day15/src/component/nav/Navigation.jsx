import React from 'react'
import styles from './Navigation.module.css'
export default function Navigation() {
    let list= ["Home", "About", "Services", "Contact","Blog", "FAQ", "Support",'Privacy Policy', 'Terms of Service'];
  return (
    <div>
      <ul className={styles.listItems}>
        {list.map((item, idx) => (
          <li key={idx} className={styles.listItem}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
