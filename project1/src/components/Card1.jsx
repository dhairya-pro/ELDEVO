import React from 'react'
import "./Card.css";

export const Card1 = () => {
  return (
    <div className="card-container" >
        <img src="https://plus.unsplash.com/premium_photo-1663036727163-4bebe27ae348?q=80&w=888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card-img" className="card-image"></img>

        <h1 className="card-title">card title</h1>
        <p className="card-description">this is the card description. you can add more description.</p>
        <a href="card_page" className="card-link">learn more</a>
        <button></button>
    </div>
  )
}

export default Card1;