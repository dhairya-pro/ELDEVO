import React, { useState } from 'react'
import bgimg from '../components/logo.png'
import bgimg1 from '../components/chatbot.png';
import { Link } from 'react-router-dom';
import '../pages/styles.css';
import servicevideo from '../video/services-video.mp4';
import Footer from './Footer.jsx'
import { TiTick } from "react-icons/ti"
const Plans = () => {
  const [showContent1, setShowContent1] = useState(true);
  const [showContent2, setShowContent2] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const toggleContent1 = () => {
    setShowContent1(true);
    setShowContent2(false);
    setActiveButton('button1');
  };

  const toggleContent2 = () => {
    setShowContent1(false);
    setShowContent2(true);
    setActiveButton('button2');
  };
  return (
    <>
      <video className="service-video" autoPlay loop muted>
        <source src={servicevideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <nav className="navbar">
        <div className="navbar-logo">
          <img src={bgimg} alt="logo" />
        </div>

        <ul className="navbar-links">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/plans'>Plans</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="https://mediafiles.botpress.cloud/21df417f-e0c2-4507-bf12-26297f97a968/webchat/bot.html">
              <img src={bgimg1} alt="chatbot" />
            </a>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>

      <div className='button-container'>
        <button onClick={toggleContent1} className={`button-plans ${activeButton === 'button1' ? 'active1' : ''}`}>Monthly</button><>&nbsp;</>
        <button onClick={toggleContent2} className={`button-plans ${activeButton === 'button2' ? 'active1' : ''}`} >Yearly</button>
      </div>

      <div>
        {showContent1 && (
          <div>
            <div className='plans-main'>
              <div className='plans-container' >
                <h3 className='h3-plans'>Basic Plan</h3><br /><br />
                <p className='p-plans-container'>Perfect for basic needs</p>
                <p className='p-plans-container1'>Rs. 399/-</p>
                <p className='p-plans-container'>For 1 months/Person </p>
                <p className='p-plans-container-2'>{'->'}Medication reminders</p>
                <p className='p-plans-container-2'>{'->'}Basic meal preparation</p>
                <p className='p-plans-container-2'>{'->'}Regular check-ins and companionship</p>
                <p className='p-plans-container-2'>{'->'}Assistance with light household chores</p>
                <p className='p-plans-container-2'>{'+'} 4 additional benefits </p>
                <button className='plans-bt'><Link to='/callback' className='link-pages1'>Book-plan</Link></button>

              </div>
              <div className='plans-container' >
                <h3 className='h3-plans'>Comprehensive Plan</h3><br /><br />
                <p className='p-plans-container'>Providing wide range of services.</p>
                <p className='p-plans-container1'>Rs. 1599/-</p>
                <p className='p-plans-container'>For 1 months/Person </p>
                <p className='p-plans-container-2'>{'->'}24/7 medication management</p>
                <p className='p-plans-container-2'>{'->'}Personalized meal planning and preparation </p>
                <p className='p-plans-container-2'>{'->'}Regular health monitoring and doctor visits coordination</p>
                <p className='p-plans-container-2'>{'->'}MSocial activities and outings </p>
                <p className='p-plans-container-2'>{'+'} 15 additional benefits </p>
                <button className='plans-bt'><Link to='/callback' className='link-pages1'>Book-plan</Link></button>

              </div>
              <div className='plans-container' >
                <h3 className='h3-plans'>Memory Plan</h3><br /><br />
                <p className='p-plans-container'>Perfect for individuals with dementia or Alzheimer</p>
                <p className='p-plans-container1'>Rs. 2999/-</p>
                <p className='p-plans-container'>For 1 months/Person </p>
                <p className='p-plans-container-2'>{'->'}Secure living environment with memory aids</p>
                <p className='p-plans-container-2'>{'->'}Cognitive stimulation activities </p>
                <p className='p-plans-container-2'>{'->'}Trained staff for dementia care</p>
                <p className='p-plans-container-2'>{'->'}Family support and education on memory-related conditions</p>
                <p className='p-plans-container-2'>{'+'} 25 additional benefits </p>
                <button className='plans-bt'><Link to='/callback' className='link-pages1'>Book-plan</Link></button>


              </div>
            </div>
            <div className='plans-main'>
              <div className='plans-container' >
                <h3 className='h3-plans'>Respite Plan</h3><br /><br />
                <p className='p-plans-container'>Perfect for family caregivers</p>
                <p className='p-plans-container1'>Rs 1099</p>
                <p className='p-plans-container'>For 1 months/Person </p>
                <p className='p-plans-container-2'>{'->'}Short-term stays for seniors</p>
                <p className='p-plans-container-2'>{'->'} Personalized care plans</p>
                <p className='p-plans-container-2'>{'->'}Assistance with daily activities</p>
                <p className='p-plans-container-2'>{'->'}Access to amenities and recreational programs</p>
                <p className='p-plans-container-2'>{'+'} 10 additional benefits </p>
                <button className='plans-bt'><Link to='/callback' className='link-pages1'>Book-plan</Link></button>

              </div>
              <div className='plans-container' >
                <h3 className='h3-plans'>Palliative Plan</h3><br /><br />
                <p className='p-plans-container'>Focus more on relief and quality of life </p>
                <p className='p-plans-container1'>Rs 2099</p>
                <p className='p-plans-container'>For 1 months/Person </p>
                <p className='p-plans-container-2'>{'->'}Pain management and symptom control</p>
                <p className='p-plans-container-2'>{'->'}Emotional and spiritual support</p>
                {/* <p className='p-plans-container-2'>{'->'}Coordination with hospice services if needed</p> */}
                <p className='p-plans-container-2'>{'->'}Family counseling and bereavement support</p>
                <p className='p-plans-container-2'>{'+'} 17 additional benefits </p>
                <button className='plans-bt'><Link to='/callback' className='link-pages1'>Book-plan</Link></button>

              </div>
              <div className='plans-container' >
                <h3 className='h3-plans'>Independent Plan</h3><br /><br />
                <p className='p-plans-container'> For active seniors who want minimal assistance</p>
                <p className='p-plans-container1'>Rs 1499</p>
                <p className='p-plans-container'>For 1 months/Person </p>
                <p className='p-plans-container-2'>{'->'}Private apartments or cottages </p>
                <p className='p-plans-container-2'>{'->'}Meal plans and dining options</p>
                <p className='p-plans-container-2'>{'->'}Fitness and wellness programs</p>
                <p className='p-plans-container-2'>{'->'}Scheduled transportation for outings and appointments</p>
                <p className='p-plans-container-2'>{'+'} 25 additional benefits </p>
                <button className='plans-bt'><Link to='/callback' className='link-pages1'>Book-plan</Link></button>


              </div>
            </div>
            <Footer />
            {/* Add your content for button 1 here */}
          </div>
        )}
        {showContent2 && (
          <div>
            <div className='plans-main'>
              <div className='plans-container' >
                <h3 className='h3-plans'>Basic Plan</h3><br /><br />
                <p className='p-plans-container'>Perfect for basic needs</p>
                <p className='p-plans-container1'>Rs. 3800/-</p>
                <p className='p-plans-container'>For 12 months/Person </p>
                <p className='p-plans-container-2'>{'->'}Medication reminders</p>
                <p className='p-plans-container-2'>{'->'}Basic meal preparation</p>
                <p className='p-plans-container-2'>{'->'}Regular check-ins and companionship</p>
                <p className='p-plans-container-2'>{'->'}Assistance with light household chores</p>
                <p className='p-plans-container-2'>{'+'} 4 additional benefits </p>
                <button className='plans-bt'><Link to='/callback' className='link-pages1'>Book-plan</Link></button>

              </div>
              <div className='plans-container' >
                <h3 className='h3-plans'>Comprehensive Plan</h3><br /><br />
                <p className='p-plans-container'>Providing wide range of services.</p>
                <p className='p-plans-container1'>Rs. 15000/-</p>
                <p className='p-plans-container'>For 12 months/Person </p>
                <p className='p-plans-container-2'>{'->'}24/7 medication management</p>
                <p className='p-plans-container-2'>{'->'}Personalized meal planning and preparation </p>
                <p className='p-plans-container-2'>{'->'}Regular health monitoring and doctor visits coordination</p>
                <p className='p-plans-container-2'>{'->'}MSocial activities and outings </p>
                <p className='p-plans-container-2'>{'+'} 15 additional benefits </p>
                <button className='plans-bt'><Link to='/callback' className='link-pages1'>Book-plan</Link></button>

              </div>
              <div className='plans-container' >
                <h3 className='h3-plans'>Memory Plan</h3><br /><br />
                <p className='p-plans-container'>Perfect for individuals with dementia or Alzheimer</p>
                <p className='p-plans-container1'>Rs. 26000/-</p>
                <p className='p-plans-container'>For 12 months/Person </p>
                <p className='p-plans-container-2'>{'->'}Secure living environment with memory aids</p>
                <p className='p-plans-container-2'>{'->'}Cognitive stimulation activities </p>
                <p className='p-plans-container-2'>{'->'}Trained staff for dementia care</p>
                <p className='p-plans-container-2'>{'->'}Family support and education on memory-related conditions</p>
                <p className='p-plans-container-2'>{'+'} 25 additional benefits </p>
                <button className='plans-bt'><Link to='/callback' className='link-pages1'>Book-plan</Link></button>


              </div>
            </div>
            <div className='plans-main'>
              <div className='plans-container' >
                <h3 className='h3-plans'>Respite Plan</h3><br /><br />
                <p className='p-plans-container'>Perfect for family caregivers</p>
                <p className='p-plans-container1'>Rs 10000/-</p>
                <p className='p-plans-container'>For 12 months/Person </p>
                <p className='p-plans-container-2'>{'->'}Short-term stays for seniors</p>
                <p className='p-plans-container-2'>{'->'} Personalized care plans</p>
                <p className='p-plans-container-2'>{'->'}Assistance with daily activities</p>
                <p className='p-plans-container-2'>{'->'}Access to amenities and recreational programs</p>
                <p className='p-plans-container-2'>{'+'} 10 additional benefits </p>
                <button className='plans-bt'><Link to='/callback' className='link-pages1'>Book-plan</Link></button>

              </div>
              <div className='plans-container' >
                <h3 className='h3-plans'>Palliative Plan</h3><br /><br />
                <p className='p-plans-container'>Focus more on relief and quality of life </p>
                <p className='p-plans-container1'>Rs 20999/-</p>
                <p className='p-plans-container'>For 12 months/Person </p>
                <p className='p-plans-container-2'>{'->'}Pain management and symptom control</p>
                <p className='p-plans-container-2'>{'->'}Emotional and spiritual support</p>
                {/* <p className='p-plans-container-2'>{'->'}Coordination with hospice services if needed</p> */}
                <p className='p-plans-container-2'>{'->'}Family counseling and bereavement support</p>
                <p className='p-plans-container-2'>{'+'} 17 additional benefits </p>
                <button className='plans-bt'><Link to='/callback' className='link-pages1'>Book-plan</Link></button>

              </div>
              <div className='plans-container' >
                <h3 className='h3-plans'>Independent Plan</h3><br /><br />
                <p className='p-plans-container'> For active seniors who want minimal assistance</p>
                <p className='p-plans-container1'>Rs 16000/-</p>
                <p className='p-plans-container'>For 12 months/Person </p>
                <p className='p-plans-container-2'>{'->'}Private apartments or cottages </p>
                <p className='p-plans-container-2'>{'->'}Meal plans and dining options</p>
                <p className='p-plans-container-2'>{'->'}Fitness and wellness programs</p>
                <p className='p-plans-container-2'>{'->'}Scheduled transportation for outings and appointments</p>
                <p className='p-plans-container-2'>{'+'} 25 additional benefits </p>
                <button className='plans-bt'><Link to='/callback' className='link-pages1'>Book-plan</Link></button>


              </div>
            </div>
            <Footer />
            {/* Add your content for button 1 here */}
          </div>
        )}
      </div>

    </>
  )
}

export default Plans;