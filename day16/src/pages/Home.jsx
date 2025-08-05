import React from 'react'
import NavBar from '../navigation/NavBar'
import './Home.css'
import Hero from './Hero'
import Services from './Services'
import About from './About'
import Media from './Media'
import Login from './Login'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/about');
    };
    return (
        <div>
            <NavBar/>
            <Hero/>
            <Services/>
            <About/>
            <Media/>
            <button className='btn' onClick={handleClick}>about us</button>
            <h2>Login to access more features</h2>
            <p>Login to your account to enjoy personalized content and services.</p>
            <Login/>
           
        </div>
    )
}
