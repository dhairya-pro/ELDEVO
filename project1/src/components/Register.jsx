import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
import PhoneInput from 'react-phone-input-2';
import { useNavigate } from 'react-router-dom';
import rbg1 from '../video/bg1.jpg'
const Register = () => {

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




  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  // const [phonenumber,setPhonenumber] = useState()
const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/api/node',{name,email,password,phoneNumber})
    .then(result=>{console.log(result)
    navigate('/login')
    
    })
    .catch(err=>console.log(err))

  }
  return (
    <>
    <div>
          <img src={rbg1} className='register-background'></img>



    </div>
    <div className='register-form'>
    <div  className='register-head'>Register</div>
    <form onSubmit={handleSubmit}>
    <div>
      <label className='register-label'>Name : </label><br></br>
          <input
            type="text"
            name="name"
            // placeholder="Name"
            className='register-input'
            onChange={(e)=> setName(e.target.value)}
            required
          />
        </div><br></br>
        <div>
      <label className='register-label'>Email : </label><br></br>
          <input
            type="text"
            name="email"
            // placeholder="EMAIL"
            className='register-input'
            onChange={(e)=> setEmail(e.target.value)}
            required
          />
        </div><br />
        <div>
      <label className='register-label'>Password : </label><br></br>
          <input
            type="text"
            name="password"
            // placeholder="PASSWORD"
            className='register-input'
            onChange={(e)=> setPassword(e.target.value)}
            required
          />
        </div><br></br>
        {/* <div>
        <label>PhoneNumber : </label>
          <input
            type="text"
            name="phonenumber"
            placeholder="number"
            className='register-input'
            onChange={(e)=> setPhonenumber(e.target.value)}
            required
          />
        </div> */}
           <label>
          {/* Phone Number : */}
          <PhoneInput
          className='phone-input'
            country="in"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            inputProps={{
              required: true,
            }}
          />
        </label>
        
        <button type="submit" className='register-btn'>
  Register
</button>

    </form>
    <p className='register-p'>Already have an account? </p>
    <button className='login-btn1'><Link to='/login' className='login'>
      LOGIN
      </Link>
    </button>
    
    </div> 
   
   </>
  )
}

export default Register