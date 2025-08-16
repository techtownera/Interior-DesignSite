import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import menu from '../assets/menu-bar-icon.png'
import './Home.css'

const Home = () =>{

      const [isopn, setisopne] = useState(false);
     
       function toggleopen(){
              return setisopne(!isopn);
       }

    return(

        <div>

       <div className='bg'>
        <div className='navbar'>

        <ul className={isopn ? "" : "hidenav"}>

       <li>
        <NavLink to="/" className={({isActive}) => isActive ? "active" : "noactive"} > Home</NavLink>
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

      <div className='main'>

    <div id='tdiv'>
    FENIX DESIGNERS
     

    <div className='hamicon'>
           <img src={menu} onClick={toggleopen} />
    </div>
    </div>

     <div className='mdiv'>
       inside inovation
       interior design that matters.

       <button className='btn'>
        schedule a call
       </button>
  
    </div>

   
     
     <div className='bt2div'>

     </div>
         
    </div>

    </div>

    
   

   

        </div>
    )
};

export default Home;