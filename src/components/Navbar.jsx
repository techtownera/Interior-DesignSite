import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (


    <div>

    <div className='Navbar'>

        <ul className='uldiv'>

        <li>
        <NavLink to="/" className={({isActive}) => isActive ? "active" : "noactive"}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/service" className={({isActive}) => isActive ? "active" : "noactive"}>Service</NavLink>
        </li>
        <li>
        <NavLink to="/projects" className={({isActive}) => isActive ? "active" : "noactive"}>Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({isActive}) => isActive ? "active" : "noactive"}>Contact</NavLink>
          
        </li>
            
        </ul>
    </div>
    
    
    </div>
  )
}

export default Navbar;