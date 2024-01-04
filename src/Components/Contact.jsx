import React from 'react'
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faBars, faBurger, faXmark, faMessage } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faTelegram, faTwitch, faTwitter, faYahoo, } from '@fortawesome/free-brands-svg-icons';
import Button from './Button';
import { Link } from 'react-router-dom';
import messege from '../img/comment-black.png'
import Chat from './Chat';
import xmarkBlack from '../img/xmark.png'
import { nav } from '../data.js'
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

const navBar = nav.map((n) => <li> <Link>{n}</Link> </li>)

let logo = <h1 style={{
  fontSize: '70px',
  textShadow: '10px 10px #727272',
  color: '#333',
  marginLeft: '80px'
}}>J</h1>

const Contact = () => {
  const [isChat, setIsChat] = useState(false);

  function openChat() {
    setIsChat(true)
  }

  return (
    <>
    <div className='contact-header'>
      {logo}
      <div className='space'>
        <div>{navBar}</div>
        <div><input type="text" /></div>
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
          <button onClick={openChat}>Open chat</button>

          <Chat open={isChat}>
            <img src={xmarkBlack} 
            className='xmark'
            onClick={() => setIsChat(false)}
            />
         <form action="">
          <h4>Online chat</h4> 
          {/* <label htmlFor="name">What is your name?</label> */}
          <input type="text" id='name' placeholder='What is your name?'/>
          <textarea name="text" id="" cols="30" rows="5" placeholder='1/150' maxLength={150}></textarea>
          <button>Submit</button>
         </form>

          </Chat>
        </div>

        <p style={{
          maxWidth: '500px',
          lineHeight: '22px',
          fontSize: '13px',
          marginTop: '50px'
        }}>
        You can also contact one of our agents by calling 
        1.866.6MNGMNG (1.866.666.4664)
        for free. Opening hours are Monday to Friday 
        from 9 a.m. to 8 p.m. and Saturdays
        and Sundays from 9 a.m. to 5 p.m.
        </p>
    </div>
        <div className='Receive-exclusive'>
          <h5 style={{
          }}>Receive exclusive promotions, private sales and news</h5>
          <input type="email"  placeholder='Enter your e-mail' style={{
            border: 'none',
            outline: 'none',
            background: 'transparent',
            borderBottom: '1px solid #c7c7c7',
            margin: '30px 0',
            width: '275px'
          }}/>
          <button className='sub'>Subscribe</button>
          <p style={{
            fontSize: '10px',
            marginTop: '30px'
          }}>By subscribing, you agree to our <strong style={{
            fontSize: '12px'}}
            >Privacy Policy </strong>
           and <strong style={{
             fontSize: '12px'
            }}
            >Promotion conditions</strong>.
           </p>
           <li style={{
             listStyle: 'none',
             fontSize: '22px',
             marginTop: '50px',
             marginBottom: '20px'
            }}>
             {headerSocials}
           </li>
           <p style={{
             fontSize: '10px'
            }}>© 2023 Jasur All rights reserved Privacy Policy and Cookies | Terms & Conditions | ADA</p>
        </div>
    </>
  )
}

export default Contact