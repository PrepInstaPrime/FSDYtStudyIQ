import React from 'react'
import hero from '../assets/hero.png'
export default function Hero() {
  return (
    <div>
       <section id='hero'>
                <img src={hero} alt="Hero" />
                <h1>This is the hero section</h1>
                <p>Welcome to our website! Discover our services and learn more about us.</p>
        </section>
    </div>
  )
}
