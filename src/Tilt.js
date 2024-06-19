import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './Tilt.css';

const Tilt = () => {
    const tiltRef = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tiltRef.current, {
            max: 10,
            speed: 400,
            reset: false
        });
    }, []);

    return (
        <div className='tilt-wrapper'>
            <div id='stars2'></div>
            <div ref={tiltRef} className="tilter" >
                <div id='stars3'></div>
                <div id='stars'></div>
            </div>
        </div>
    );
};

export default Tilt;
