import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contactus = () => {
  const navigate=useNavigate();
  function handlecontact(){
    navigate('/')
  }
  return (
    <div className="contact-page-wrapper">
      <form onSubmit={handlecontact}>
      <h1 className="primary-heading">Have A Question In Mind?</h1>
      <h1 className="primary-heading">Let US Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" required/>
        {/* <button className="secondary-button" onClick={handlecontact}>Submit</button> */}
      </div>

      <div className="contact-form-container2">
        {/* <input type="text" placeholder="yourmail@gmail.com"/>
             */}
        <textarea  charswidth="23" id="w3review" name="w3review" rows="4" cols="50" placeholder="Enter your messege here.." required>
        
        </textarea>

        <button className="secondary-button2"  type='submit'>Submit</button>
      </div>

      {/* <div className="contact-form-container">
        <label>87545678965</label>
        <button className="secondary-button">Submit</button> 
      </div> */}
</form>


    </div>
  )
}

export default Contactus