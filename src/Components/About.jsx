import React from 'react'
import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import { Link } from 'react-router-dom';

const About = () => {
  const ref = useRef(null);
  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 300;
    const x = (1 + Math.sin(t / 1000)) * -10;
    ref.current.style.transform = `translateY(${x}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <>
    <div className='about'>
    <Link to={'/Contact'} className='about-a'>contact</Link>
  <div className="container">
    <div className="cube" ref={ref}>
      <div className="side front" />
      <div className="side left" />
      <div className="side right" />
      <div className="side top" />
      <div className="side bottom" />
      <div className="side back" />
    </div>
  </div>
    </div>
  </>
  )
}

export default About