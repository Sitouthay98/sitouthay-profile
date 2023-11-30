// src/components/Nav.js
import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <div className='header-container'>
      <nav>
        <a className='logo-home-header' href="#">Home</a>
        <a className='power' href="#">Power</a>
      </nav>
    </div>
  );
}

export default Navbar;
