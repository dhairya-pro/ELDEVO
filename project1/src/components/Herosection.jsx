import React from 'react'
import './Herosection.css'
import { Link } from 'react-router-dom'


const Herosection = () => {
  return (
    
    <div className="hero-container">


        <h2><b>Elderly care at</b></h2>
        <h1 className='herosection-head'>ELDEVO. </h1>
        <p>Empowering dignity in silver years, one caring touch at a time.<br></br>
Nurturing comfort and companionship for our cherished elders.</p>
        <div className="hero-btns">
        <button className="button-62" role="button"><Link to='/donate' className='custom-link'>Donate </Link></button>

        </div>
        </div>
   
  )
}

export default Herosection


