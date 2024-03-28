import React from 'react'
import  '../App.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import rbg1 from '../video/bg1.jpg'

const Login = () => {

  const [password,setPassword] = useState()
  const [email,setEmail] = useState()
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/api/login',{email,password})
    .then(result=>{console.log(result)
      if(result.data === "success")
      {
        navigate('/')
      }

    
    })
    .catch(err=>console.log(err))

  }
  return (
   <>
    <div>
          <img src={rbg1} className='register-background'></img>



    </div>
      <div className='register-form-1'>
    <div  className='register-head1'>Login</div>
    <form onSubmit={handleSubmit} className='form-login'>

        <div>
      <label className='login-label'>Email : </label><br></br>
          <input
            type="text"
            name="email"
            // placeholder="EMAIL"
            className='register-input1'
            onChange={(e)=> setEmail(e.target.value)}
            required
          />
        </div><br />
        <div>
      <label className='login-label'>Password : </label><br></br>
          <input
            type="text"
            name="password"
            // placeholder="PASSWORD"
            className='register-input1'
            onChange={(e)=> setPassword(e.target.value)}
            required
          />
     </div>
        <button type="submit" className='login-btn'>
  Login
</button>

    </form>
    <h6 className='p-login'>Don't have an account ? <Link to='/register' className='signup'>Signup</Link></h6>
    </div>
   </>
  )
}

export default Login