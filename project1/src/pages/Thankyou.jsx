import React, { useEffect } from 'react';
import th1 from '../video/bg4.png'
import './thankyu.css'
import { useNavigate } from 'react-router-dom';
const Thankyou = () => {
    const navigate = useNavigate()

 useEffect(() => {
   const timer = setTimeout(() => {
   navigate('/')
   }, 3000); 

   return () => clearTimeout(timer);
}, [history]);

  return (
    <div>
        <div >
            <img src={th1} className='thank-you-bg'></img>
        </div>
      {/* <h1 className='heading-thankyou'>Thank You!</h1> */}
   
    </div>
  );
};

export default Thankyou;