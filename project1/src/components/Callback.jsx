import React from 'react'
import Oldies from '../video/Oldies.png'
import '../App.css'
import PhoneInput from 'react-phone-input-2';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export const Callback = () => {
  const navigate = useNavigate()

const [phoneNumber, setPhoneNumber] = useState('');
 const [valid, setValid] = useState(true);
     
  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

   const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/;
   return phoneNumberPattern.test(phoneNumber);
   };
   const [email,setEmail] = useState()
   const [name,setname] = useState()
   const [message,setmessage] = useState()

   const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/form',{email,phoneNumber,message,name})
    .then(result=>{console.log(result)
      if(result.data === "success")
      {
        navigate('/thankyou')
      }
      if(result.data === "No-record-found")
      {
        alert("Register first")
        navigate('/register')
      }
    
    })
    .catch(err=>console.log(err))

  }





  return (
    <div className="callback">
        <div 
        className="leftSide"
        style={{backgroundImage: `url(${Oldies})`}}
        ></div>
        <div className="rightSide">
            <h1> 60,000+ Seniors’ Sons & Daughters Have Chosen Eldevo. Join Us Today! </h1>

            <form id="callback-form"  onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <div className="callback-form-container">
                     <input type="text" placeholder="yourname" name="name"  onChange={(e)=> setname(e.target.value)}/>
                     {/* <button className="secondary-button">Submit</button> */}
                </div>
                {/* <input name="name" placeholder="Enter the full name..." type="text" /> */}
                <label htmlFor="email">Email</label>
                <input name="email" placeholder="youremail@gmail.com" type="email"  onChange={(e)=> setEmail(e.target.value)}/>

                {/* <label htmlFor="number">Phone Number</label>
                <input name="number" placeholder="Phone Number" type="number" /> */}
                <label>
          {/* Phone Number : */}
          <PhoneInput
            country="in"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            inputProps={{
              required: true,
            }}
          />
        </label>
                <textarea
                rows="6"
                placeholder='Enter If any Questions'
                name="message"
                onChange={(e)=> setmessage(e.target.value)}
                required
                >
                </textarea>
                <button type="submit" className='callback-btn'>BOOK PLAN</button>
            </form>
        </div>
    </div>
  )
}

export default Callback
