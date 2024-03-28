import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
const Community = () => {
  return (
  <>
    <h1 className='pages-heading'>Community</h1>
    <p className='pages-p'>Different types of community services in elderly care include a range of options tailored to meet the diverse needs of older adults. </p>

<div>
    <div className='pages-container'>
        <h4 className='pages-h4'>In-Home Services</h4>
        <p className='pages-p1'> Assistance with household tasks, personal care, and errands provided in the individual's own home.</p>
        <p className='pages-p1'>Cleaning, meal preparation, laundry, shopping, personal grooming, and dressing.</p>
        <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>

    <div className='pages-container'>
        <h4 className='pages-h4'>Adult-Day Services</h4>
        <p className='pages-p1'>Designed for older adults who need supervision during the day due to physical, social, or mental impairments.</p>
        <p className='pages-p1'>Health monitoring, personal care assistance, recreational activities, and nutritious meals.</p>
        <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>

    <div className='pages-container'>
        <h4 className='pages-h4'>Housing and Long-Term Care Options</h4>
        <p className='pages-p1'>Senior Housing Provides independent or congregate living arrangements with varying levels of support services.</p>
        <p className='pages-p1'>Continuing Care Retirement Communities (CCRCs) Offer a range of personal care and health services on-site.</p>
        <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>
    
</div>
</>
  )
}

export default Community