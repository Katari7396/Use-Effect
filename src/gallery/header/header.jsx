import React from 'react'
import './header.css'

function Header() {
  return (

    <nav className='navbar'>
        <div>
            <h2>WELCOME TO IMAGE GALLERY</h2>
        </div>

        <ul className='navbar-links'>
            <li><a href="#home">HOME</a></li>
            <li><a href="#gallery">GALLERY</a></li>
            <li><a href="#about">ABOUT-US</a></li>
        </ul>
    </nav>
  )
}

export default Header
