import React from 'react'
import './Service.css'
import s1 from '../assets/floor-plan-icon.svg';
import s2 from '../assets/floor-plan-size-icon.svg'
import s3 from '../assets/interior-design-icon.svg'

const Service = () => {
  return (
    <div>

    <div>

    <div className='div1'>
    <p>SERVICE</p>
    </div>

   <div className='h1'>
    <h1>we Do it best</h1>
    </div>

   <div className='allservices'>
    <div className='services'>
      <img className='simg' src = {s1}></img>
      <h2>Space Planning</h2>
      <p>
        it easy to help you turn your design dreams into reality. This includes a variety of bedroom design or house designers. No matter your choice, The Wooden Strings can help you create a unique home.

      </p>

    </div>

   
    <div className='services'>
        <img className='simg' src = {s3}></img>

      <h2>Custom Furniture</h2>
      <p>
        it easy to help you turn your design dreams into reality. This includes a variety of bedroom design or house designers. No matter your choice, The Wooden Strings can help you create a unique home.
      </p>
    </div>

    <div className='services'>
        <img className='simg' src = {s2}></img>
       <h2>Furniture Layouts</h2>
        <p>
        it easy to help you turn your design dreams into reality. This includes a variety of bedroom design or house designers. No matter your choice, The Wooden Strings can help you create a unique home.
      </p>
    </div>

    </div>

    </div>

    
    
    </div>
  )
}

export default Service