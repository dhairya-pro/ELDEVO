import React from 'react'
import d1 from '../video/donate-background.png'
import bgimg from '../components/logo.png'
import bgimg1 from '../components/chatbot.png';
import { Link } from 'react-router-dom';
// css in app.css
const Donate = () => {
  return (
    <>
  
<div>
    <img src={d1} alt='background-image' className='donate-background'></img>
    
    <nav className="navbar">
        <div className="navbar-logo">
          <img src={bgimg} alt="logo" />
        </div>

        <ul className="navbar-links">
          <li>
            <a href="/">Plans</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="https://mediafiles.botpress.cloud/21df417f-e0c2-4507-bf12-26297f97a968/webchat/bot.html">
              <img src={bgimg1} alt="chatbot" />
            </a>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
        <h5 className='donate-heading'>#Donate </h5>
        <h5 className='donate-heading1'>Love</h5>
    <h6 className='donate-heading2'>(not just money)</h6>
    </div>
     
    </>
  )
}

export default Donate;