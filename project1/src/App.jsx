import React, { useState, useEffect } from 'react';
import './App.css';
import Herosection from './components/Herosection';
import bgVideo from './video/final.mp4';
import bgimg from './components/logo.png';
import bgimg1 from './components/chatbot.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import c1 from './video/first.webp';
import c2 from './video/second.webp';
import c3 from './video/third.webp';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import Contactus from './components/Contactus';
import h1 from './video/1.png';
import h2 from './video/2.png';
import h3 from './video/3.png';
import h4 from './video/4.png';




const images = [h1, h2, h3, h4];
function App() {
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [valid, setValid] = useState(true);

  // const handleChange = (value) => {
  //   setPhoneNumber(value);
  //   setValid(validatePhoneNumber(value));
  // };

  // const validatePhoneNumber = (phoneNumber) => {
  //   const phoneNumberPattern = /^\d{10}$/;
  //   return phoneNumberPattern.test(phoneNumber);
  // };

// function for changing image 
const [currentImage, setCurrentImage] = useState(null);

useEffect(() => {
  // Function to change image at intervals
  const intervalId = setInterval(() => {
    setCurrentImage(images[Math.floor(Math.random() * images.length)]);
  }, 3000);

  // Clean up the interval
  return () => clearInterval(intervalId);
}, []); // Empty dependency array to run the effect only once


// function end


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
      <video className="welcome-video" autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
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
      <Herosection />
      {/* <h2 className="heading1">
        Help your parents age magnificently with
        <br />
        India's most trusted senior care brand
      </h2> */}

      {/* <Carousel responsive={responsive}>
        <div className="card">
          <img
            src="https://img.freepik.com/free-photo/long-awaited-gathering-elderly-people_1098-14811.jpg?w=1060&t=st=1708086719~exp=1708087319~hmac=ba81f2860bc4840384e5959db5a9849b96bd311bac5748b579d0494fd7af16f1"
            alt="product"
            className="Imageset"
          />
          <h3 className="heading2">Our services</h3>
        </div>

        <div className="card">
          <img
            src="https://img.freepik.com/free-photo/elder-group-friends-partying_23-2150300182.jpg?w=1060&t=st=1708086910~exp=1708087510~hmac=fcf40b9fd37a5e7afb2cb4697cb26ce34082dc76426153fe1a9dd9a8eb911949"
            alt="product"
            className="Imageset"
          />
          <h3 className="heading2">Our services</h3>
        </div>

        <div className="card">
          <img
            src="https://img.freepik.com/free-photo/people-looking-picture-albums_23-2149444412.jpg?t=st=1708086693~exp=1708087293~hmac=78350ca52586e9be416f95eb0954c61735b39ea1f1a3e0ed381a85e542251893"
            alt="product"
            className="Imageset"
          />
          <h3 className="heading2">Our services</h3>
        </div>

        <div className="card">
          <img
            src="https://img.freepik.com/free-photo/old-man-woman-working-drawing-together_482257-15489.jpg?w=1060&t=st=1708086988~exp=1708087588~hmac=9d83aa513e90a129e33896fca09b80e005cf200eb3df5979d40afc9fc8af7758"
            alt="product"
            className="Imageset"
          />
          <h3 className="heading2">Our services</h3>
        </div>
      </Carousel> */}

      <h3 className="heading3">Engage your parents with us</h3>
      <div className="maincontainer">
        <div className="container-home">
          <img src={c1} alt="image1" />
          <p className="button2">Busy</p>
          <h4 className="text-container">Engage PLAN</h4>
          <button type="submit" className="button1">
          <Link to='/plans' className='button1-link'>
            Learn More</Link>
          </button>
        </div>
        <div className="container-home">
          <img src={c2} alt="image2" />
          <p className="button2">Safety</p>
          <h4 className="text-container">Platinum PLAN</h4>
          <button type="submit" className="button1">
          <Link to='/plans' className='button1-link'>
            Learn More</Link>
          </button>
        </div>
        <div className="container-home">
          <img src={c3} alt="image3" />
          <p className="button2">Health</p>
          <h4 className="text-container">Diamond PLAN</h4>
          <button type="submit" className="button1"><Link to='/plans' className='button1-link'>
            Learn More</Link>
          </button>
        </div>
      </div>


      <div className="contact-us">
        <label>Firstname  : </label>
        <input
        />
      </div>
      {/* <label>
          Phone Number :
          <PhoneInput
            country="in"
            value={phoneNumber}
            onChange={handleChange}
            inputProps={{
              required: true,
            }}
          />
        </label>
          {!valid && <p className="validation">Please enter a valid 10 digit number</p>}*/}
  <div className="hero-header">
      <div className="hero-img">
        <img src={currentImage} alt="Your Image" />
      </div>
      <div className="hero-content">
        <h1 className='hero-h1'>Eldevo gives a warm welcome to all of you</h1>
        <p className='hero-p'>Know more about services we provide.</p>
        <button className='hero-btn'><Link to='/services' className='button1-link'>Know more</Link></button>
      </div>
    </div>
   
      <Contactus />

 
      <Footer />

    </>
  );
}

export default App;
