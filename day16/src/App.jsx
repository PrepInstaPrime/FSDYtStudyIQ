import React from 'react'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import About from './pages/About'
import Services from './pages/Services'
import Media from './pages/Media'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/media' element={<Media/>}/>
      </Routes>
    </div>
  )
}
