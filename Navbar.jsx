import React, { useEffect, useState } from 'react';
import "./Navbar.scss";
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {

  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const{pathname}=useLocation()

  const isActive= () =>{
    window.scrollY > 0 ? setActive(true): setActive(false)

  };

  useEffect(()=>{
  window.addEventListener("scroll",isActive);

  return ()=>{
    window.removeEventListener("scroll",isActive)
  };
  },[]);

  const currentUser={
    id:1,
    username:"Vinay Gadge",
    isSeller:true

  }

  return (
    <div className={active || pathname!=="/" ? "navbar active":"navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className='link'>
          <span className='text'> <span className='sym'>₹</span>ojiRoti</span>
          </Link>
        </div>
        <div className="links">
          
          <span>RojiRoti Business</span>
          <span>Explore</span>
          <span>GeekyNews</span>
          <span>English</span>
          <span>Sign in</span>
         {!currentUser?.isSeller && <span>Become a Freelancer</span>}
         {!currentUser &&<button>Join</button>}
         {currentUser && (
          <div className="user" onClick={()=>setOpen(!open)}>
            <img src="logo.jpg"></img>
            <span>{currentUser?.username}</span>
            {open && <div className="options">
              {
                currentUser?.isSeller &&(
                  <>
                  <Link className='link' to="/mygigs" >Gigs</Link >
                  <Link  className='link' to="/add">NewGig</Link >
                  </>
                )
              }
              <Link className='link' to="/orders">Orders</Link >
              <Link className='link' to="/messages">Messages</Link >
              <Link className='link' to="/">Logout</Link >
            </div>}
          
          </div>
         )}
        </div>
      </div>
      {(active || pathname!=="/") &&(
        <>
        <hr/>
      <div className="menu">
        <Link className='link menulink' to="/">Graphics & Design</Link>
        <Link className='link menulink' to="/">Programming & Tech</Link>
        <Link className='link menulink' to="/">Digital Marketing</Link>
        <Link className='link menulink' to="/">Bussiness</Link>
        <Link className='link menulink' to="/">Teaching</Link>
        <Link className='link menulink' to="/">AI Services</Link>
        <Link className='link menulink' to="/">Music</Link>
        <Link className='link menulink' to="/">Law</Link>
        <Link className='link menulink' to="/">Consulting</Link>
      </div>
      </>)}
      

    </div>
  )
}

export default Navbar

