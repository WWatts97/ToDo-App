import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'

//below we are making a component that redirects an unathuenticated user to the login screen, we pass in children in the params
//as a prop which refers to any component that is nested inside of ProtectedRoute tags.
export default function ProtectedRoute({children}) {
    const {currentUser} = useAuth()
  //below we cgeck to see if there's a current user. if so render the children compoenents, else, navigate the user to login
    return currentUser ? children : <Navigate to='/login' />
}
