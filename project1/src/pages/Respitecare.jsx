import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
const Respitecare = () => {
  return (
    <>
    <h1 className='pages-heading'>Respite-care</h1>
    <p className='pages-p'>Respite care services for the elderly encompass various options tailored to provide temporary relief for family caregivers. </p>

<div>
    <div className='pages-container'>
        <h4 className='pages-h4'>Informal Respite Care</h4>
        <p className='pages-p1'>Non-professional care provided by family members, friends, or neighbors.</p>
        <p className='pages-p1'>Familiar individuals offer temporary care either at their home or the caregiver's residence.</p>
         <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>

    <div className='pages-container'>
        <h4 className='pages-h4'>Residential Care</h4>
        <p className='pages-p1'>Continued care from professionals in assisted living centers or senior communities.</p>
        <p className='pages-p1'>Offers around-the-clock care, including meals and medication distribution, with options for short-term or ongoing stays.</p>
         <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>

    <div className='pages-container'>
        <h4 className='pages-h4'>In-home Care</h4>
        <p className='pages-p1'>Professional caregivers provide essential care at the caregiver's home.</p>
        <p className='pages-p1'>Suitable for caregivers with regular out-of-home commitments, ensuring quality care in the absence of the primary caregiver.</p>
         <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>
    
</div>
</>
  )
}

export default Respitecare