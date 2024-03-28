import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
const Lab = () => {
  return (
    <>
    <h1 className='pages-heading'>Lab-services</h1>
    <p className='pages-p'>The different types of laboratory services in elderly care include Independent Laboratory, Physician Office Laboratory, Clinical &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Laboratory, Qualified Hospital Laboratory, Referring Laboratory, Reference Laboratory, and Billing Laboratory</p>

<div>
    <div className='pages-container'>
        <h4 className='pages-h4'>Comprehensive Metabolic Panel (CMP)</h4>
        <p className='pages-p1'>The CMP measures 14 different levels to assess overall health, focusing on liver, kidney, and metabolic functions.</p>
        <p className='pages-p1'>It includes measurements like calcium, phosphorus, and alkaline phosphatase, crucial for bone health.</p>
         <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>

    <div className='pages-container'>
        <h4 className='pages-h4'>Labs for Geriatric Patients</h4>
        <p className='pages-p1'>Mammography Screening: Recommended for women over 65.</p>
        <p className='pages-p1'>Colonoscopy: Suggested for patients aged 50 and older.</p>
         <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>

    <div className='pages-container'>
        <h4 className='pages-h4'>Labs for Geriatric Patients</h4>
        <p className='pages-p1'>Basic Blood Panel Includes CBC and CMP to establish overall health baseline and manage conditions associated with aging.</p>
        <p className='pages-p1'>Hypothalamic-Pituitary-Adrenal (HPA) Axis Test Assesses stress hormones affecting energy production, sleep, mood, and metabolism in older adults</p>
         <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>
    
</div>
</>
  )
}

export default Lab