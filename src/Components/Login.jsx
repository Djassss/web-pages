import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/login.scss';

const Login = () => {
  return (
    <>
    <Link to={'/'}><button style={{
        marginTop: '50px',
        marginLeft: '50px',
        padding: '5px 10px',
        border: 'none',
        background: '#333',
        color: '#fff',
        cursor: 'pointer',
        borderRadius: '3px'
    }}>Back to home</button></Link>

    <div className='Login'>
        <div className="line">
            <button className='btn1'>Log In</button>
            <Link to={'/register'}>
                <button className='btn2'>
                    Register                        
                </button> 
            </Link>
        </div>
        <form action="register">
            <input className='email' type="email" name="register" placeholder='E-mail'/>
            <input className='password' type="password" name="register" placeholder='Password'/>

            <div className='checkbox'>
                <input className='checkbox_input' type="checkbox" id='checkbox_1'/>
                <label htmlFor="checkbox_1" className='checkbox_label'>
                    
                </label>
                <p> Keep me sign in</p><a href="">+ info</a>
            </div>

            <button className='enter'>Enter</button>
            <p className='mini-text'>Forgotten your password?</p>
            <div className='solid'></div>
            <p className='mini-text2'>
                Don't have an accound? 
                <span> Register</span>
            </p>
        </form>
    </div>
    </>
  )
}

export default Login