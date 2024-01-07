import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faTelegram, faTwitter, faYahoo } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect, useRef } from 'react';
import m4 from "../video/coding.mp4"

import xmarkWhite from '../img/xmark-white.png'
import logoJ from '../img/LogoJBlack.png'



const About = () => {
  const nav = [
    <ul>
      <li><Link to={'/contact'}>Contact</Link></li>
      <li><Link to={'/'}>Back to Home</Link></li>
      <li><HashLink to={'#personal'} smooth>About</HashLink></li>
    </ul>
  ]
  const socials = [
    faTelegram,
    faTwitter,
    faYahoo,
    faGithub
  ]
const sidebarSocials = socials.map((social) => <FontAwesomeIcon className='social' icon={social}/>) 
const [isOpen, setIsOpen] = useState(false);
const toggleSidebar = () => {
  setIsOpen(!isOpen);
};

const [window, setWindow] = useState(false);
function toggleWindow() {
  setWindow(!window ? !isOpen : !window)
}

  return (
  <>
    <div className='About'>
        <header>
          <img src={logoJ}  className='logo'/>
          <ul>
            <li>
              <Link to={'/home'}>Home</Link>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>

          <button className={`login-btn ${window ? 'open' : 'login-btn'}`}
           onClick={toggleWindow}>More</button>

            <div className={`line ${isOpen ? 'active' : isOpen}`} onClick={toggleSidebar}>
            </div>

          {window &&  <div className='open-window'>
              <ul>
                <li>News</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
              <img className='xmark-open-window' src={xmarkWhite} onClick={toggleWindow}
               />
            </div>}

        </header>

      <div className={`sidebar ${isOpen ? isOpen : 'close'}`} >
          <img className='xmark' src={xmarkWhite} onClick={toggleSidebar}
          />
            {nav}
          <div className="socials">
                  {sidebarSocials}
          </div>
        </div>
      <section>
        <div>
        <h1>Why?</h1>
        <p>Working on big UI projects and websites, we understand how important it is to have a clear project structure and one-click access to every design screen. 

     <br/> <p className='text-2'>That’s why we created Drafta, a place where designers can store project screens organized as site-tree navigation. Every screen can be shared with a client or a teammate simply sending a link.</p>
        </p>
        </div>
        <div className='video-section'>
          <video src={m4} muted autoPlay loop></video>
        </div>
        <div className='under-video'>
          <li>
            <Link>What's new</Link>
            <Link>Github</Link>
            <Link>Future plans</Link>
          </li>
        </div>
        <div className='text'>
          <h4>Upload designs. Create a project and upload your designs via web or directly from Sketch. </h4>
          <h4>Organize. Arrange screens keeping states and resolutions together. You can add text pages too</h4>
          <h4>Share. Simply copy URL to share your project designs with client or colleagues. Zero UI with precise retina scale and no distractions. </h4>
          <h4>Collaborate. Discuss your designs with your project team, client or pretty much anyone in the world.</h4>
        </div>
      </section>
    </div>

    <div className='footer-about'>
      <div className='footer-link'>
                <li>
                    <Link>@2023 Jasur</Link>
                  </li>
                  
                  <li>
                    <Link>Terms of use</Link>
                  </li>
                  
                  <li>
                    <Link>Privacy policy</Link>
                  </li>
                  
                  <li>
                    <Link>jasurumarov.94@gmail.com</Link>
                  </li>
        </div>
    </div>
  </>
  )
}

export default About