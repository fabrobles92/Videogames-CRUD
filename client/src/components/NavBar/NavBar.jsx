import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <nav className='navbar'>
      <Link to="/">
        <h1>CRUD Videogames</h1>
      </Link>      
    </nav>
  )
}

export default NavBar