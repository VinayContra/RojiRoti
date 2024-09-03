import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <div className="footer">
    <div className="container">
      <div className="top">
        <div className="item">
          <h2>Categories</h2>
          <Link style={{ textDecoration: 'none' }}>Graphics & Design</Link>
          <Link style={{ textDecoration: 'none' }}>Digital Marketing</Link>
          <Link style={{ textDecoration: 'none' }}>Writing & Tanslation</Link>
          <Link style={{ textDecoration: 'none' }}>Video & Animation</Link>
          <Link style={{ textDecoration: 'none' }}>Music & Animation</Link>
          <Link style={{ textDecoration: 'none' }}>Music & Audio</Link>
          <Link style={{ textDecoration: 'none' }}>Data Analysis</Link>
          <Link style={{ textDecoration: 'none' }}>Law</Link>
          <Link style={{ textDecoration: 'none' }}>Consulting</Link>
        </div>

        <div className="item">
          <h2>About</h2>
          <Link style={{ textDecoration: 'none' }}>Careers</Link>
          <Link style={{ textDecoration: 'none' }}>Press & News</Link>
          <Link style={{ textDecoration: 'none' }}>Partnerships</Link>
          <Link style={{ textDecoration: 'none' }}>Privacy Policy</Link>
          <Link style={{ textDecoration: 'none' }}>Terms of Services</Link>
          <Link style={{ textDecoration: 'none' }}>Investor Relations</Link>
        </div>

        <div className="item">
          <h2>Support and Education</h2>
          <Link style={{ textDecoration: 'none' }}>Help & Support</Link>
          <Link style={{ textDecoration: 'none' }}>Trust & Safety</Link>
          <Link style={{ textDecoration: 'none' }}>Quality Guide</Link>
          <Link style={{ textDecoration: 'none' }}>Selling on RojiRoti</Link>
          <Link style={{ textDecoration: 'none' }}>Buying on RojiRoti</Link>
          <Link style={{ textDecoration: 'none' }}>RojiRoti Guides</Link>
          <Link style={{ textDecoration: 'none' }}>Learn</Link>
        </div>

        <div className="item">
          <h2>Bussines Solution</h2>
          <Link style={{ textDecoration: 'none' }}>About Bussines Solution</Link>
          <Link style={{ textDecoration: 'none' }}>Contact</Link>
          <Link style={{ textDecoration: 'none' }}>Forum</Link>
          
        </div>
        
        
        

      </div>
    <hr/>
      <div className="bottom">
        <div className="left">
          <h2>RojiRoti</h2>
          <span>@RojiRoti Ltd.2024</span>

        </div>
        <div className="right">
          <div className="social">
            <img src='img/facebook.png'/>
            <img src='img/twitter.png'/>
            <img src='img/linkedin.png'/>
            <img src='img/pinterest.png'/>
            <img src='img/instagram.png'/>
          </div>
          <div className="link">
          <img src='./img/language.png'/>
          <span>English</span>
          </div>
          <div className="link">
          <img src='./img/coin.png'/>
          <span>Rupees</span>
          </div>
          <img src='./img/accessibility.png'/>
        </div>
          
          
          
      </div>
    </div>
   </div>
  )
}

export default Footer