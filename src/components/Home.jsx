import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'

const Home = () =>{

    return(

        <div>

       <div className='bg'>
        <div className='navbar'>

        <ul>

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

     <div className='mdiv'>
       inside inovation
       interior design that matters.

       <button className='btn'>
        schedule a call
       </button>
  
    </div>

    </div>
     
     <div className='bt2div'>

     </div>
         
    </div>

    </div>

    
   

   

        </div>
    )
};

export default Home;