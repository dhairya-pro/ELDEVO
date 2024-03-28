import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
const Transportation = () => {
  return (
    <>
    <h1 className='pages-heading'>Transportation</h1>
    <p className='pages-p'>The transportation services for individuals with disabilities and the elderly encompass various types tailored to meet specific needs. </p>

<div>
    <div className='pages-container'>
        <h4 className='pages-h4'>Public Transportation Services</h4>
        <p className='pages-p1'>Public transportation services play a crucial role in providing mobility for the elderly. </p>
        <p className='pages-p1'>These services include buses, trains, and subways that are equipped to accommodate individuals with disabilities and the elderly.</p>
       <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>

    <div className='pages-container'>
        <h4 className='pages-h4'>Mobility Devices</h4>
        <p className='pages-p1'>Mobility devices are essential for the elderly to facilitate their movement.</p>
        <p className='pages-p1'>These devices range from wheelchairs to scooters and are designed to enhance mobility and independence.</p>
       <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>

    <div className='pages-container'>
        <h4 className='pages-h4'>Programs of All-Inclusive Care for the Elderly (PACE)</h4>
        <p className='pages-p1'>PACE programs offer comprehensive transportation services as part of their care model. </p>
        <p className='pages-p1'>Participants in PACE receive transportation services that cover a wide range of needs, including hospital visits, adult day health care, home care, and more. </p>
       <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>
    
</div>
</>
  )
}

export default Transportation