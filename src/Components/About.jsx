import React from 'react'
import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faBars, faBurger, faXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faTelegram, faTwitch, faTwitter, faYahoo } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Sidebar from './Sidebar';

import jas from '../img/jas.png'


const UserAbout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    return(
      <>
    <div className='about'>
          <h1 className='logo-j'>J</h1>

          <div className={'fabar'}>
              <div className={`line-1 ${isOpen ? 'active' : 'line-1'}`} onClick={toggleSidebar}>
              </div>

            {isOpen && <div className='sidebars'>
                {/* <FontAwesomeIcon icon={faXmark} onClick={toggleSidebar} className='btn'/> */}
                    <div className='xmark-1' onClick={toggleSidebar}>
                    </div>
                    <div className='xmark-2' onClick={toggleSidebar}>
                    </div>
              <ul>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li><Link to={'/'}>Back to Home</Link></li>
              </ul>
            </div>}

          </div>
    </div>
    </>
    )
};

const UserBlock = () => {
  const [isMail, setIsMail] = useState(false); 
  const toggleMail = () => {
    setIsMail(!isMail);
  };

  const [isSpinner, setIsSpinner] = useState(false);
  // Function
  const toggleSpinner = () => {
    setIsSpinner(!isSpinner);
  };


  return (
    <>
    <div className={`alert ${isSpinner ? 'alert-close' : ''}`}>
        Sending was successful
        <FontAwesomeIcon className='spinner' icon={faSpinner} style={{marginTop: '20px'}}
         />
    </div>

  <div className='user'>
    <h1><span>I</span> am<br/> Jasur.
        <p>web developer <span className='animate'>_________</span></p>
      <div className='see-project'>
        <button onClick={toggleMail}>Contact Me!</button>  
      </div>

     <div className={`user-mail ${isMail ? 'user-mail' : 'close'} `}>
        <div className='submit'>
          <FontAwesomeIcon icon={faXmark} className='user-xmark' onClick={toggleMail}/>
          <p className='user-info'>Email*</p>
          <input type="email" placeholder='email*'/>
          <p className='user-message'>Message*</p>
          <textarea   cols="105" rows='4' placeholder='1/50' maxLength={50}
            style={{outline: 'none', width: '200px', resize: 'none', padding: '5px'}}
          >
          </textarea>

          <button className='btn-submit' onClick={toggleSpinner}>submit</button>
           
        </div>
      </div>

      <div className="socials">
      <FontAwesomeIcon className='icn1' icon={faTelegram} />
      <FontAwesomeIcon className='icn2' icon={faTwitter} />
      <FontAwesomeIcon className='icn3' icon={faGithub} />
      <FontAwesomeIcon className='icn4' icon={faYahoo}/>
      </div>
    </h1>
    <img src={jas} />
  </div>
  </>
  )
};

const UserSection = () => {
  return (
      <div className="section">
          <div className="block-1">
            <h1>
              frontend<br/> 
              developer
            </h1>
            <h5>
              I like  to craft solid and scalable frontend products<br />
              with great user experiences.
            </h5>
          </div>
          <div className="block-2">
            <p>
            I started learning HTML and CSS for about 6 months. then switched to JavaScript
            I studied the basics, for example how variables, function loops, logical values, arrays, etc.
            As soon as I understood the basis of JS, I chose Reactjs because React is very convenient
            Easy to learn, easy to use, simplified scripting, component based, faster rendering, stable code structure, 
            which I learned in react `Components, ReactDOM Rendering, 
            Component Classes and Functional Components, JSX, Properties! 
            </p>
          </div>
          <div className='skills'>
            <ul>
              <h5 style={{textTransform: 'uppercase', textAlign: 'center'}}>Skills</h5>
              <li>Javascript</li>
              <li>React</li>
              <li>Html</li>
              <li>Scss</li>
              <li>Git</li>
              <li>React-spring</li>
            </ul>
          </div>
          <div className='personal'>
            <ul>
              <h5 style={{textTransform: 'uppercase', textAlign: 'center'}}>About</h5>
              <li>Nationality <span className='country'>Uzbekistan</span></li>
              <li>City <span className='city'>Tashkent</span></li>
              <li>Age <span className='age'>29</span></li>
              <li>Language <span className='lang'>Eng, Rus</span></li>
              <li>Marital status <span className='status'>not married</span></li>
              <li>Website <span className='site'>https://github.com/Djassss</span></li>
            </ul>
          </div>
      </div>
  )
}

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <p>© 2023. All rights reserved. Privacy Policy and Cookies | This page create by Jasur</p>
      </div>
    </>
  )
}

const About = () => {
  
  return (
  <>
    <UserAbout />
    <UserBlock />
    <UserSection />    
    <Footer />
  </>
  )
}

export default About