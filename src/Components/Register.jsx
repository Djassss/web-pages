import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/register.scss';


const Login = () => {
  return (
<div className='register'>
    <div className="line2">
        <Link to={"/login"}>
            <button className='b1'> Log In</button>
        </Link>
        <button className='b2'>Register</button>
        
    </div>
    <div className="main-reg">
        <h3>Create an account and get 10% off new collection <br /> <span> garments</span></h3>
        <p>Be the first to know about our special offers and new lookbooks.</p>
        <h4>How would you like us to address you?</h4>
        <div className="inp">
        <input type="text" name="name" placeholder='Name*' />
        <input type="text" name="surname" placeholder='Surname*' />
        </div>
        <h4>
        Enter an e-mail and password to access your account wherever and whenever you like.
        </h4>
        <div className="inp2">
        <input type="email" name="email" placeholder='E-mail*' />
        <input type="password" name="passoword" placeholder='Password*' />
        </div>
        <h3 className='addNum'>Add your mobile phone number to track your orders</h3>
        <div className="block-mobile">
            <img src={require('../img/UZ.gif')} height={'12px'}/>
            <select name="phone">
                <option value="+998">+998</option>
                <option value="+355">Albania +618</option>
                <option value="+54">Argentina +54</option>
                <option value="+61">Australia +61</option>
            </select>
            <input type="mobile" className='mobile' placeholder=' Mobile*' />
        </div>
        <h3 className='comp'>
        Complete the following details to make your<br /> purchases much quicker.
        </h3>
        <div className="post">
            <select name="post">
                <option value="Uzb">Uzbeksitan</option>
                <option value="Us">United States</option>
                <option value="Uk">United Kingdom</option>
                <option value="Ru">Russia</option>
                <option value="Fch">France</option>
            </select>
            <input type="text" name="postCode" placeholder='Post code*' />
        </div>
        <h3 className='post-h3'>
        Select the category that interests you for <br /> personalised experience.
        </h3>
        <div className="render">
            <div className="female">
                <div className="check">
                    <input type="radio" id='female' name='render' checked />
                    <label htmlFor="female">

                    </label>
                </div>
                <span>Female</span>
            </div>
            <div className="male">
                <div className="check">
                     <input type="radio" id='male' name='render'/>
                     <label htmlFor="male">
                        
                     </label>
                </div>
                <span>Male</span>
            </div>
        </div>
        <div className="text-last">
        <h3>PROMOTIONS AND NEWS</h3>
        <p>*To enjoy a discount of 10%, check the box and stay up to date.</p>
        </div>
        <div className="checkbox_last">
            <input type="checkbox" className='checkbox_input' id='checkbox_1' />
            <label htmlFor="checkbox_1" className='checkbox_label'>

            <h6> i would like to receive the Newsletter</h6>
            </label>
        </div>

        <div className='last-btn'>
            <button>Create account</button>
        </div>
        <p className='Policy'>
            By clicking on 'Create account', you accept our
          <span className='spn'>
            Confidentiality Policy.
          </span>
        </p>
    </div>
</div>
  )
}

export default Login