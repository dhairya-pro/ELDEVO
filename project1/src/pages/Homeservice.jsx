import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
const Homeservice = () => {
  return (
    <>
    <h1 className='pages-heading'>Home-service</h1>
    <p className='pages-p'>Each type of home care service caters to specific needs, from personal assistance and companionship to medical care and &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;therapy,&nbsp; ensuring that seniors receive the necessary support to maintain their quality of life at home.  </p>

<div>
    <div className='pages-container'>
        <h4 className='pages-h4'>Personal Care and Companionship</h4>
        <p className='pages-p1'>Provides assistance with daily activities like bathing, dressing, meal preparation, and household tasks to promote independence and safety.</p>
        <p className='pages-p1'>Also known as non-medical care, home health aide services, senior care, homemaker care, assistive care, or companion care.</p>
         <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>

    <div className='pages-container'>
        <h4 className='pages-h4'>Private Duty Nursing Care</h4>
        <p className='pages-p1'>Offers long-term, hourly nursing care at home for adults with chronic illnesses, injuries, or disabilities.</p>
        <p className='pages-p1'>Includes services like tracheostomy care, ventilator care, administering medications, and monitoring vital signs.</p>
         <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>

    <div className='pages-container'>
        <h4 className='pages-h4'>Home Health Care</h4>
        <p className='pages-p1'>Involves short-term, physician-directed care to help patients prevent or recover from illnesses, injuries, or hospital stays.</p>
        <p className='pages-p1'>Services may include nursing care, physical therapy, occupational therapy, speech language pathology, and home health aide services.</p>
         <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>
    
</div>
</>
  )
}

export default Homeservice