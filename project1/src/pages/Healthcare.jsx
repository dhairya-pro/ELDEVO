import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
const Healthcare = () => {
  return (
    <>
    <h1 className='pages-heading'>Health-care</h1>
    <p className='pages-p'>The different types of health care services in eldercare include a range of options tailored to meet the diverse needs of seniors.</p>

<div>
    <div className='pages-container'>
        <h4 className='pages-h4'>Skilled Nursing</h4>
        <p className='pages-p1'>Skilled nursing facilities offer round-the-clock medical care for seniors who require intensive assistance.</p>
        <p className='pages-p1'>Include skilled nursing care, custodial care, medically-related social services, and dietary services.</p>
         <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>

    <div className='pages-container'>
        <h4 className='pages-h4'>Assisted Living</h4>
        <p className='pages-p1'>Assisted living facilities provide professional help and support for daily routines.</p>
        <p className='pages-p1'>Focus on personal care, social activities, and sometimes memory care for those with memory loss.</p>
         <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>

    <div className='pages-container'>
        <h4 className='pages-h4'>Home Health Care</h4>
        <p className='pages-p1'>Medical assistance provided at home by licensed medical providers like nurses, therapists, and aides.</p>
        <p className='pages-p1'> Include monitoring medical conditions, wound care, medication management, and IV assistance.</p>
         <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>
    
</div>
</>
  )
}

export default Healthcare