import React from 'react'
import "./GigCard.scss"
import { Link } from 'react-router-dom'

const GigCard = ({item}) => {
  return (
    <Link to="/gig/123">
    <div className="gigCard">
      <img src={item.img} alt=""/>
      <div className="info">
        <div className="user">
          <img src={item.pp}/>
          <span>{item.username}</span>
        </div>
        <p>{item.desc}</p>
        <div className="star">
          <img src='./img/star.png'/>
          <span>{item.star}</span>
        </div>
      </div>
      <div className="details">
        <img src='./img/heart.png'/>
        <span>Starting At </span>
        <h2>${item.price}</h2>
      </div>
    </div>
    </Link>
  )
}

export default GigCard