import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import myContext from '../store/myContext'

export default function Logout() {
  const navigate = useNavigate()
  const { logout } = useContext(myContext)

  useEffect(() => {
    logout()
    navigate('/')
  }, [logout, navigate])

  return (
    <div style={{ padding: 24, textAlign: 'center' }}>
      Logging out...
    </div>
  )
}


