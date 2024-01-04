import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faXmark } from '@fortawesome/free-solid-svg-icons';
import {  faGithub, faTelegram, faTwitter, faYahoo } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect, useRef } from 'react';

import xmarkWhite from '../img/xmark-white.png'
import Slider from './Slider';
import Footer from './Footer';
import Section from './Section';
import Button from './Button';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
                    <img src={xmarkWhite} onClick={toggleSidebar} 
                    style={{
                      width: '35px',
                      marginTop: '30px',
                      marginLeft: '240px',
                      cursor: 'pointer'
                    }}/>
              {nav}
              <div className="socials">
                 {sidebarSocials}
              </div>
            </div>}
    </div>
    </>
    )
};

const About = () => {
  const [content, setContent] = useState('click me');

  function buttonClick(type) {
    setContent(type)
  }
  return (
  <>
    <Sidebar />
    <Slider />
    <Section />   
    <Footer /> 
    {/* <Button onClick={() => buttonClick('easy')}>click1 </Button>
    <Button onClick={() => buttonClick('program')}> Click 2</Button>
    <p>{differences[content]}</p> */}
  </>
  )
}

export default About