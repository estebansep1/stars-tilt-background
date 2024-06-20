import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import '../../src/Tilt.css';
import logo from '../logo.png'

const Tilt = () => {
    const tiltRef = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tiltRef.current, {
        max: 7,
        speed: 400,
        reset: false
      });
    }, []);
  
    return (
      <div className='tilt-wrapper'>
        <div ref={tiltRef} className="tilter">
          <div id='stars3'></div>
          <div id='stars'></div>
        </div>
        <div className="logo-wrapper">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
    );
  };
  
  export default Tilt;