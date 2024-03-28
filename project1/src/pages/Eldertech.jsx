import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
const Eldertech = () => {
  return (
    <>

    <h1 className='pages-heading'>Elder Tech</h1>
    <p className='pages-p'>We provide best services in every aspects.Every elder will get chance to learn new technology by our services.</p>

<div>
    <div className='pages-container'>
        <h4 className='pages-h4'>Tech-support</h4>
        <p className='pages-p1'>Solving every technical issues of our customer</p>
        <p className='pages-p1'>Tech support in elderly care plays a crucial role in empowering older adults to navigate and utilize technology effectively, enhancing their quality of life.</p>
        <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>

    <div className='pages-container'>
        <h4 className='pages-h4'>Smart-Watch</h4>
        <p className='pages-p1'>24*7 Health monitoring features like heart rate tracking, ECG capabilities, sleep tracking, and even blood oxygen level measurement.</p>
        <p className='pages-p1'>These devices are increasingly utilized for remote patient monitoring, helping individuals manage chronic conditions and detect potential health issues early on.</p>
        <button className="button-17" role="button"><Link to='/callback' className='link-pages'>Book service</Link></button>
    </div>

    <div className='pages-container'>
        <h4 className='pages-h4'>Personal-Alarms</h4>
        <p className='pages-p1'>These wearable pendants provide a quick way to call for help with just a button press. </p>
        <p className='pages-p1'>They connect to a central hub near the landline, alerting chosen contacts or monitoring teams in case of emergencies like falls.<br/><br></br> </p>
        <button className="button-17" role="button"><Link to='/callback'  className='link-pages'>Book service</Link></button>
    </div>
    
</div>
    
    </>
  )
}

export default Eldertech;
