import React from 'react'
import './Footer.css'
import img2 from './footerlogo.png'
const Footer = () => {
  return (
    <div>
          <div className="footer">
<div className="footercon">
    <div className="flex1">
        <h5>For any query? call 8849637157
        </h5>
        <h5>
        </h5>
    </div>
    <img src={img2} className="footer-logo"></img>
    <ul className="list1">
   

        <li><a href="">FAQ</a></li>
        <li><a href="">Investor Relation</a></li>
        <li><a href="">Login</a></li>

        <li><a href="">Corporate Information</a></li>
        <li><a href="">ELDEVO</a></li>
    </ul>
    <ul className="list1">
        <li><a href="">Home</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Terms of Use</a></li>
        <li><a href="">Contact Us</a></li>
        <li><a href="">#</a></li>
    </ul>
    <ul className="list1">
        <li><a href="">Account</a></li>
        <li><a href="">Redeem Gift Cards</a></li>
        <li><a href="">Privacy</a></li>
        <li><a href="">Specifications</a></li>
        <li><a href="">#</a></li>

    </ul>
    <ul className="list1">
        <li><a href="">INSTAGRAM</a></li>
        <li><a href="">FACEBOOK</a></li>
        <li><a href="">EMAIL</a></li>
        <li><a href="">Legal Notices</a></li>
        <li><a href="">#</a></li>

    </ul>
    

</div>
</div>
</div>
   
  )
}

export default Footer