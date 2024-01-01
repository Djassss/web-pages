import React from 'react'
import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import { Link } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faBars, faBurger, faXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faTelegram, faTwitch, faTwitter, faYahoo } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Sidebar from './Sidebar';
import F1 from '../img/1.jpg';
import F2 from '../img/2.jpg';
import F3 from '../img/3.jpg';
import F4 from '../img/4.jpg';
import Xmark from '../img/xmark.png';
import under from '../img/under.1.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nav = [
  <ul>
    <li><Link to={'/contact'}>Contact</Link></li>
    <li><Link to={'/'}>Back to Home</Link></li>
    <li><HashLink to={'#personal'} smooth>About</HashLink></li>
  </ul>
]
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [open, setOpen] = useState(false);
    const toggleOpen = () => {
      setOpen(!open)
    }
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');

  function login (event) {
    setUserLogin(event.target.value);
  }
  function password (event) {
    setUserPassword(event.target.value)
  }

  function log(){
    if (userLogin === '') {
      alert('Please Log In')
    }else if(userPassword === '') {
      alert('Please password')
    }else(
      alert('Thanks for subscribe')
    )
  }

    return(
      <>  
    <div className='component-1'>
          <h1 className='logo'>J</h1>
          <nav
          onClick={toggleOpen}
          className={`resour ${open ? 're' : open}`} 
          >Log In</nav>
              <div className={`upper ${open ? open : 'up'}`}>
                <FontAwesomeIcon
                  icon={faXmark}
                   style={{
                    color: '#fff', 
                    marginLeft: '300px',
                    cursor:'pointer'
                    }}
                    onClick={toggleOpen}
                    />
                  <input type='text' placeholder='Email*' onChange={login}/>
                 
                  <input type='password' placeholder='Password*' onChange={password}/>
                  <button onClick={log}>Log In</button>
              </div>

              <div className={`line-1 ${isOpen ? 'active' : 'line-1'}`} onClick={toggleSidebar}>
              </div>
{isOpen && <div className='sidebar'>
                    <div className='xmark-1' onClick={toggleSidebar}>
                    </div>
                    <div className='xmark-2' onClick={toggleSidebar}>
                    </div>
              {nav}
              <div className="socials">
                <FontAwesomeIcon className='icn1' icon={faTelegram} />
                <FontAwesomeIcon className='icn2' icon={faTwitter} />
                <FontAwesomeIcon className='icn3' icon={faGithub} />
                <FontAwesomeIcon className='icn4' icon={faYahoo}/>
              </div>
            </div>}
    </div>
    </>
    )
};

const Slider = () => {
  const [isMail, setIsMail] = useState(false); 
  const toggleMail = () => {
    setIsMail(isMail ? 'close' : true);
  };

  function toggleXmark() {
    setIsMail(!isMail)
  }

  const [isSpinner, setIsSpinner] = useState(false);
  // Function
  const toggleSpinner = () => {
    setIsSpinner(isSpinner ? '' : true);
  };




  return (
    <>
   
  <div className='component-2'>
          <Carousel className='carousel'
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              >
              <div>
                <img src={F1} />
              </div>
              <div >
                <img src={F2}  />

              </div>
              <div >
                <img src={F3} />
              </div>
          </Carousel>
  </div>
  </>
  )
};



const Section = () => {
  return (
      <div className="component-3">
        <div className='banner'>
          <div>
           <h1>
            #1 in email
          </h1> 
          <p>and marketing automation brand</p>
          </div>
          <div>
           <h1>
            8 million
          </h1> 
            <p>data-backed recommendations</p>
          </div>
          <div>
            <h1>
              500 million
            </h1>
            <p>emails sent every single day</p>
          </div>
          <div>
            <h1>
            >99%
            </h1>
            <p>email deliverability (average)</p>
          </div>
        </div>
        <h1 className='design' id='personal'>Effortless design without the extra creative lift</h1>
      </div>
  )
}

const Footer = () => {
  return(
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
    <Header />
    <Slider />
    <Section />   
    <Footer /> 
  </>
  )
}

export default About