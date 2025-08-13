import React from 'react'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Login from './auth/Login'
import SignUp from './auth/SignUp'
import Logout from './auth/Logout'
import {Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/logout' element={<Logout/>}/>
    </Routes>
  )
}
