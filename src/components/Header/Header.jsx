import React from 'react'
import './Header.css'
import { useState } from "react";

import logo2 from './../../assets/logo2.png'
const Header = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <div className='header'>
        
        <div className="header-c">

        <nav className="navigation">
      <a href="/" className="brand-name">
        <img src={logo2} alt="LogoFim" />
      </a>
      <button className="hamburger"
      onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
        >

      <div
        className="navigation-menu">
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="#propos">A propos</a>
          </li>
          <li>
            <a href="#produits">Nos Solutions</a>
          </li>
          <li>
            <a href="#formulaire">Prendre Contact</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
        </div>
        
    </div>
    
  )
}

export default Header
