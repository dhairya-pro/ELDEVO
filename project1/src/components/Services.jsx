import React, { useState } from 'react'
import './Service.css';
import service1 from '../video/services1.jpg'
import service2 from '../video/services2.jpeg';
import elder_tech from "./elder_tech.png";
import medical from "./medical.png";
import community from "./community.png";
import emergency from "./emergency.png";
import homeservice from "./homeservice.png";
import lab from "./lab.png";
import respite_care from "./respite_care.png";
import transportation from "./transportation.png";
import { Link,Outlet } from 'react-router-dom';
import bgimg from '../components/logo.png'
import bgimg1 from '../components/chatbot.png';
import servicevideo from '../video/services-video.mp4';
import Footer from './Footer';
import Carousel from 'react-multi-carousel';
import '../App.css'




const Service = () => {
  

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
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
    

    <div className='container'>
        <h4 className='head-services'>Services</h4>
             <div className='row'>

                <div className='card-services'>
                   <img src={elder_tech } />
                   <h3 className='h3-services'>Elder Tech</h3> 
                   <h5 className='h5-services'><Link to='/sidebar' className='link-cardservices'>Explore more</Link></h5>
                </div>
                <div className='card-services'>
                   <img src={medical} />
                   <h3 className='h3-services'>Health Care</h3>
                   <h5 className='h5-services'><Link to='/sidebar' className='link-cardservices'>Explore more</Link></h5>
                </div>
                <div className='card-services'>
                   <img src={emergency} />
                   <h3 className='h3-services'>Emergency</h3>
                   <h5 className='h5-services'><Link to='/sidebar' className='link-cardservices'>Explore more</Link></h5>
                </div>
                <div className='card-services'>
                   <img src={homeservice} />
                   <h3 className='h3-services'>Home Service.</h3> 
                   <h5 className='h5-services'><Link to='/sidebar' className='link-cardservices'>Explore more</Link></h5>
                </div>
                <div className='card-services'>
                   <img src={community} />
                   <h3 className='h3-services'>Community Resources</h3> 
                   <h5 className='h5-services'><Link to='/sidebar' className='link-cardservices'>Explore more</Link></h5>
                </div>
                <div className='card-services'>
                   <img src={respite_care} />
                   <h3 className='h3-services'>Respite Care</h3> 
                   <h5 className='h5-services'><Link to='/sidebar' className='link-cardservices'>Explore more</Link></h5>
                </div>
                <div className='card-services'>
                   <img src={transportation} />
                   <h3 className='h3-services'>Transportation</h3>
                   <h5 className='h5-services'><Link to='/sidebar' className='link-cardservices'>Explore more</Link></h5>
                </div>
                <div className='card-services'>
                   <img src={lab} />
                   <h3 className='h3-services'>Lab & Diagnostics</h3>
                   <h5 className='h5-services'><Link to='/sidebar' className='link-cardservices'>Explore more</Link></h5>
                </div>
      </div>
     
    </div>

    <h2 className="most-booked">
        Most Booked Service
      
      </h2>
    <Carousel responsive={responsive}>
        <div className="booked-card">
          <img
            src="https://img.freepik.com/free-photo/physiotherapist-helping-elderly-patient-with-hand-exercise-physiotherapy-clinic_662251-1734.jpg?t=st=1711438296~exp=1711441896~hmac=0a03d4986ca38db3429ec27507be592c47d515ae382bea738bc7723574b58253&w=1060"
            alt="product"
            className="Imageset"
          />
          <h3 className="heading2">Home services</h3>
        </div>
       

        <div className="booked-card">
          <img
            src={service1}
            alt="product"
            className="Imageset"
          />
           <h3 className="heading2">Respite care</h3>
        </div>

        <div className="booked-card">
          <img
            src="https://img.freepik.com/free-photo/people-looking-picture-albums_23-2149444412.jpg?t=st=1708086693~exp=1708087293~hmac=78350ca52586e9be416f95eb0954c61735b39ea1f1a3e0ed381a85e542251893"
            alt="product"
            className="Imageset"
          />
           <h3 className="heading2">Home services</h3>
        </div>

        <div className="booked-card">
          <img
            src={service2}
            alt="product"
            className="Imageset"
          />
           <h3 className="heading2">Transportation</h3>
        </div>
      </Carousel>
    
<Footer/>
    </>
  )
}

export default Service