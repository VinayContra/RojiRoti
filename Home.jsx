import React from 'react'
import Featured from '/src/components/featured/Featured.jsx';
import TrustedBy from '/src/components/trustedBy/TrustedBy.jsx';
import Slide from '/src/components/slide/Slide.jsx';
import { cards } from '../../data';
import { projects } from '../../data';
import CatCard from '../../components/catCard/CatCard';
import "./Home.scss"
import ProjectCard from '../../components/projectCard/projectCard';

const home = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card=>(
          <CatCard key={card.id} item={card}/>
        ))}
        </Slide>
        <div className="features">
          <div className="container">
            <div className="item">
              <h1>A whole world of freelance talent at your fingertips</h1>
              <div className="title">
                <img src='./img/check.png'/>
                Affordable Excellence
              </div>
              <p>Experience top-notch services that fit every budget. We offer transparent, project-based pricing with no hidden fees.</p>

              <div className="title">
                <img src='./img/check.png'/>
                Tailored Solutions
              </div>
              <p>Get personalized service packages designed to meet your unique needs. Quality and flexibility are our top priorities.</p>
              <div className="title">
                <img src='./img/check.png'/>
                Expertise You Can Trust
              </div>
              <p>Work with seasoned professionals who bring years of experience to every project. Your satisfaction is guaranteed.</p>
              <div className="title">
                <img src='./img/check.png'/>
                The best for every budget
              </div>
              <p>Find high-quality services at every price point.Just project based pricing.</p>
            </div>
            <div className="right">
             <img src='./img/imageatvideo.jpg'></img>
            </div>

          </div>
        </div>
        <div className="features dark">
          <div className="container">
            <div className="item">
              <h1><i>RojiRoti Business</i></h1>
              <h1>The Business Solution designed for short-term gig-workers.</h1>
              <p>"Work here & Spend Everywhere!!"</p>
              <div className="title">
                <img src='./img/check.png'></img>
                Connects Freelancers Using AI.
              </div>
              <div className="title">
                <img src='./img/check.png'></img>
              Work together with Collaboratin tools.
              </div>
              <div className="title">
                <img src='./img/check.png'></img>
              Get Ready for Exiting Bonuses.
              </div>
              <div className="title">
                <img src='./img/check.png'></img>
              Get Ready for Exiting Bonuses.
              </div>
              <div className="title">
                <img src='./img/check.png'></img>
              Be Ready to get hired by Government Directly.
              </div>
              <div className="title">
                <img src='./img/check.png'></img>
                Your Time is Valuable so earn for single second.
              </div>
              <button>Let's Get Started</button>
            </div>
            <div className="right">
              <img src='./img/features2.jpg'></img>
            </div>
          </div>
        </div>
        <Slide slidesToShow={5} arrowsScroll={5}>
        {projects.map(card=>(
          <ProjectCard key={card.id} item={card}/>
        ))}
        </Slide>
    </div>
  );
};

export default home

