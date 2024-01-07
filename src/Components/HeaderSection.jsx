import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faTelegram, faTwitter, faYahoo } from '@fortawesome/free-brands-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import logoYellow from '../img/LogoYellow.png'

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/headerSection.scss';
import F1 from '../img/1.jpg';
import F2 from '../img/2.jpg';
import F3 from '../img/3.jpg';
import F4 from '../img/bannerF.png';
import F5 from '../img/Без названия (1).jpg';
import F6 from '../img/Без названия (3).jpg';
import F7 from '../img/Без названия (2).jpg';
import F9 from '../img/Без названия (21).jpg';
import F10 from '../img/Без названия (24).jpg';
import F11 from '../img/Без названия (26).jpg';
import F12 from '../img/9137829330_1_1_1.jpg';
import F13 from '../img/black.jpg';
import F14 from '../img/blue.jpg';
import F16 from '../img/2mango.webp';
import F17 from '../img/1mango.webp';





const HeaderSection = () => {
  const socials = [
    faTelegram,
    faTwitter,
    faYahoo,
    faGithub
  ]

  const headerSocials = socials.map((social) => <li><FontAwesomeIcon icon={social}/></li>)
  return (
    <>
    <div className='interFace'>
    <div className='header-section'>
      <div className='leftSide'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className='rightSide'>
        <div>
            <img src={logoYellow}/>
          <ul>
           {headerSocials}
          </ul>
          <Link to={'/about'}>About</Link>
        </div>
        <div className='section-singUp'>
          <h1>
            A place to keep <br />
            your design projects
          </h1>
          <h3 style={{
            marginTop: '-20px',
            marginBottom: '50px',
            color: '#999'
          }}>The perfect tool to store and  share web and <br /> interface design screens—in perfect order.</h3>
          <div className='sign-btn'>
          <button>Sign up free</button>
            <button className='solo-btn'>Sign in</button>
          </div>
        </div>
      </div>
    </div>
              <div className='main-section'>
                <h2>
               <span style={{
                color: '#fff'
               }}> Organize. </span> Structure is key. Upload and organize screens with site-tree view, keeping states and resolutions together.
                </h2>
          <Carousel className='carousel'
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                showArrows={false}
            >
              
                <div >
                    <img src={F16} />
                  </div>
                <div >
                    <img src={F17} />
                </div>
          </Carousel>
          <h3>
               <span style={{
                color: '#fff'
               }}> Demonstrate.  </span>Copy address link to share your project designs. Zero UI with precise retina scale and no distractions.
              </h3>
              </div>
              <div className='footer-section' id='footer-section'>
                <Carousel className='footer-carousel'
                  showStatus={false}
                  showIndicators={false}
                  showThumbs={false}
                  infiniteLoop
                  autoPlay
                >
                  <div>
                      <img src={F5} />
                  </div>
                  <div >
                      <img src={F6} />
                      </div>
                  <div >
                      <img src={F7} />
                  </div>
                </Carousel>
                <Carousel className='footer-carousel'
                  showStatus={false}
                  showIndicators={false}
                  showThumbs={false}
                  infiniteLoop
                  autoPlay
                >
                  <div>
                      <img src={F14} />
                  </div>
                  <div >
                      <img src={F13} />
                      </div>
                  <div >
                      <img src={F12} />
                  </div>
                </Carousel>
                <Carousel className='footer-carousel'
                  showStatus={false}
                  showIndicators={false}
                  showThumbs={false}
                  infiniteLoop
                  autoPlay
                >
                 <div>
                      <img src={F11} />
                  </div>
                  <div >
                      <img src={F9} />
                      </div>
                  <div >
                      <img src={F10} />
                  </div>
                </Carousel>
              </div>
              <div className='sign-free'>
                <button className='sign-free-btn'>Sign up free</button>

                <div className='Builder'>
                  <img src={F4}  />
                  <button className='try'>Try it free</button>
                </div>
              </div>
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

export default HeaderSection

