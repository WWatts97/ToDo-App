import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'
import './Auth.css'


export default function Logout() {
    const { logout } =useAuth()
    const navigate = useNavigate()

    function handleAuth() {
        logout()
        navigate('/')
    }
  return (
    <div className='custom-text text-center p-3 bg-color text-white'>
        <Profile/>
        <button className="btn custom-bg-color text-color" onClick={() => handleAuth()}>
            Logout
        </button>
    </div>
  )
}
