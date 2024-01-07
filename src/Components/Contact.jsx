import React from 'react'
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faTelegram, faTwitch, faTwitter, faYahoo, } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import messege from '../img/comment-black.png'
import Chat from './Chat';
import xmarkBlack from '../img/xmark.png'

// import { nav } from '../data.js'
import logo from '../img/LogoYellow.png'
import { HashLink } from 'react-router-hash-link';

const socials = [faGithub, faTelegram, faYahoo, faTwitch,  faFacebook];

const headerSocials = socials.map((social) => 
<Link style={{
  color: '#000',
  margin: '0 12px'
}}>
<FontAwesomeIcon style={{
  color: '#333'
}}
 icon={social}
 />
</Link>
)

// const navBar = nav.map((n) => <li> <Link>{n}</Link> </li>)



const Contact = () => {
  const [isChat, setIsChat] = useState(false);

  function openChat() {
    setIsChat(true)
  }

  return (
    <>
    <div className='contact-header'>
      <div className='space'>
      <img src={logo} />
        {/* <div className='navbar'>{navBar}</div> */}
        <div className='navbar'>
          <li><Link to={'/'}>home</Link></li>
          <li><Link to={'/about'}>about</Link></li>
          <li><HashLink to={'#help'} smooth>help</HashLink></li>
        </div>
        <div>
          <button className='Log-in'>Sign up</button>
        </div>
      </div>
    </div>

    <div className='help'>
        <h3 style={{
          marginTop: '30px',
          marginBottom: '-12px'
        }}>
             HELP
        </h3>
        <h5 style={{
          marginBottom: '80px'
        }}>
            Need more help? Contact us
        </h5>

        <div className='chat-bot'>
          <img src={messege} style={{
            width: '25px'
          }} />
          <p>
         <strong>
            Contact us via our chatbot
          </strong><br />
          Contact our chatbot 24/7. If you don't find the answer to your query, 
          you can receive personalised help from one of our agents,
          Monday to Friday, 9 a.m. to 8 p.m. or Saturdays and Sundays from 9 a.m. to 5 p.m. (EST time)
          </p>
          <button onClick={openChat} id='help'>Open chat</button>

          <Chat open={isChat}>
            <img src={xmarkBlack} 
            className='xmark'
            onClick={() => setIsChat(false)}
            />
         <form action="" className='form'>
          <h4>Online chat</h4> 
          {/* <label htmlFor="name">What is your name?</label> */}
          <input type="text" id='name' placeholder='What is your name?'/>
          <textarea name="text" id="" cols="30" rows="5" placeholder='1/150' maxLength={150}></textarea>
          <button>Submit</button>
         </form>

          </Chat>
        </div>

        <p className='text'>
        You can also contact one of our agents by calling 
        1.866.6MNGMNG (1.866.666.4664)
        for free. Opening hours are Monday to Friday 
        from 9 a.m. to 8 p.m. and Saturdays
        and Sundays from 9 a.m. to 5 p.m.
        </p>
    </div>
        <div className='Receive-exclusive'>
          <h5>Receive exclusive promotions, private sales and news</h5>
          <input type="email"  placeholder='Enter your e-mail'/>
          <button className='sub'>Subscribe</button>
          <p>By subscribing, you agree to our <strong
            >Privacy Policy </strong>
           and <strong
            >Promotion conditions</strong>.
           </p>
           <li>
             {headerSocials}
           </li>
           <p>© 2023 Jasur All rights reserved Privacy Policy and Cookies | Terms & Conditions | ADA</p>
        </div>
    </>
  )
}

export default Contact