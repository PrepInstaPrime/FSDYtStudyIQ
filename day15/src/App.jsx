import React from 'react'
import CustomButton from './component/button/CustomButton'
import './App.css'
import Home from './pages/Home'
export default function App() {
  return (
    <div>
      <Home/>
      <h1>Welcome to My App</h1>
      <p>This is a simple React application.</p>
      <button className='custombutton'>Main Button</button>
      <CustomButton />
    </div>
  )
}
