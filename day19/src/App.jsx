import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Card from './Card'
import Home from './Home'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<Card />} />
      </Routes>
    </div>
  )
}
