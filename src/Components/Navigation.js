import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import {GoChecklist} from 'react-icons/go'
import './Navigation.css'
import Logout from './Auth/Logout'

export default function Navigation() {
  const {currentUser} = useAuth()
  return (
    <Navbar expand='lg' classname='p-1 navbarColor'>
      
        <Navbar.Brand href='/' className='text-white custom-text' ><GoChecklist className='m-3 text-white'/>ToDo Checklist (Made in React)</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
        {currentUser &&
        <Logout/>
        }
            <Nav>
            {!currentUser &&
                    <Link to= '/login' className='nav-link text-white custom-text'>Login</Link>
                }
                <Link to= '/todos' className='nav-link text-white custom-text'>ToDos</Link>
                <Link to= '/categories' className='nav-link text-white custom-text'>Categories</Link>
                <Link to= '/about' className='nav-link text-white custom-text'>About</Link>
            </Nav>
            <div className='col-sm-1'></div>
        </Navbar.Collapse>
    </Navbar>
  )
}
