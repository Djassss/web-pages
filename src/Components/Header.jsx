import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <Link to={'/contact'}>contact</Link>
        <Link to={'/about'}>about</Link>
    </div>
  )
}

export default Header