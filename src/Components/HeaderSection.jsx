import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faTelegram, faTwitter, faYahoo } from '@fortawesome/free-brands-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import logoWhite from '../img/LogoJWhite.png'
import logoYellow from '../img/LogoYellow.png'
import gift from '../img/gift.gif'

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/headerSection.scss';
import F1 from '../img/1.jpg';
import F2 from '../img/2.jpg';
import F3 from '../img/3.jpg';
import F4 from '../img/bannerF.png';




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
                <div>
                    <img src={F1} />
                </div>
                <div >
                    <img src={F2} />
                    </div>
                <div >
                    <img src={F3} />
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
                      <img src={F1} />
                  </div>
                  <div >
                      <img src={F2} />
                      </div>
                  <div >
                      <img src={F3} />
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
                      <img src={F1} />
                  </div>
                  <div >
                      <img src={F2} />
                      </div>
                  <div >
                      <img src={F3} />
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
                      <img src={F1} />
                  </div>
                  <div >
                      <img src={F2} />
                      </div>
                  <div >
                      <img src={F3} />
                  </div>
                </Carousel>
              </div>
              <div className='sign-free'>
                <button className='sign-free-btn'>Sign up free</button>

                <div className='Builder'>
                <img className='logo-J' src={logoYellow}/>
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

