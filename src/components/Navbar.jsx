import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import fenix_logo from '../assets/fenixlogo.png'
import menu from '../assets/menu-bar-icon.png'
import { useState } from 'react';

const Navbar = () => {

  const [isopn, setisopne] = useState(false);
  const [isclick, setisclick] = useState(true);

  function toggleopen(){
         return setisopne(!isopn), setisclick(!isclick);
  }

  return (


    <div>

    <div className={isclick ? "Navbar" : "NavbarShrink"}>

    
    <div className='logo'>
      <img src={fenix_logo} alt='fenix logo' />
    </div>

        <ul className={isopn ? "uldiv" : "hideuldiv"}>

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

        <div className='ham'>
       <img src={menu} onClick={toggleopen} />
       </div>

    </div>
    
    
    </div>
  )
}

export default Navbar;