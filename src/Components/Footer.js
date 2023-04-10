import React from 'react'
import './Navigation.css'

export default function Footer() {
  return (
    <>
      <footer className='footer text-center text-white p-4'>
          <strong>&copy; {new Date().getFullYear()} William Watts, All Rights Reserved</strong>
      </footer>
    </>
  )
}
