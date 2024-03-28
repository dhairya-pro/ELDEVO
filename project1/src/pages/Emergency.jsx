import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
const Emergency = () => {
  return (
    <>
    <h1 className='pages-heading'>Emergency</h1>
    <p className='pages-p'>Emergency services for elderly care encompass a range of support systems designed to address urgent medical needs, safety concerns, and social or emotional crises affecting older adults. </p>

<div>
    <div className='pages-container'>
        <h4 className='pages-h4'>Emergency Medical Services</h4>
        <p className='pages-p1'>hese services include ambulances, paramedics, and emergency medical technicians who respond to medical emergencies, such as heart attacks, strokes, falls, and other acute health issues.</p>
         <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>

    <div className='pages-container'>
        <h4 className='pages-h4'>Home Care Agencies</h4>
        <p className='pages-p1'>Many agencies provide 24/7 on-call services for seniors who need assistance with daily activities, medication management, or monitoring of health conditions.</p>
         <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>

    <div className='pages-container'>
        <h4 className='pages-h4'>Emergency Respite Care</h4>
        <p className='pages-p1'>Respite care services offer temporary relief to primary caregivers by providing emergency care for seniors when the caregiver is unable to fulfill their duties due to illness, injury, or other emergencies.</p>
         <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>
    
</div>
</>
  )
}

export default Emergency