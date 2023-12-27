import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { motion } from "framer-motion"
import { useState } from 'react'
import { useAnimationFrame } from "framer-motion";
import { useRef } from "react";


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
      <animated.div className='nav' style={ref}>
          <Link to={'/contact'}>contact</Link>
          <Link to={'/about'}>about</Link>
      </animated.div>
    <div className='interface'>
        <div className='overlay'></div>
        <video src={m4} loop muted autoPlay></video>
    </div>
    </>
  )
}

export default Interface