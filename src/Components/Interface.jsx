import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { motion } from "framer-motion"
import { useState } from 'react'
import { useAnimationFrame } from "framer-motion";
import { useRef } from "react";
import F1 from '../img/1.jpg';
import HeaderSection from './HeaderSection'

import m4 from "../video/coding.mp4"




const Interface = () => {

  const ref = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });
 


  return (
    <>
      {/* <animated.div className='nav' style={ref}>
          <Link to={'/contact'}>contact</Link>
          <Link to={'/about'}>about</Link>
      </animated.div> */}
    <div className='interface'>
          <HeaderSection />
    </div>
    </>
  )
}

export default Interface