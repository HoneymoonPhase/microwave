import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Button = () => {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle = '#dedede';
    ctx.moveTo(13, 23);
    ctx.lineTo(176, 23);
    ctx.lineTo(187, 34);
    ctx.lineTo(187, 77);
    ctx.lineTo(24, 77);
    ctx.lineTo(13, 66);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = '#9B3E37';
    ctx.moveTo(15, 25);
    ctx.lineTo(175, 25);
    ctx.lineTo(185, 35);
    ctx.lineTo(185, 75);
    ctx.lineTo(25, 75);
    ctx.lineTo(15, 65);
    ctx.fill();
  });

  return(
    <div className='wrapper-canvas'>
        <canvas ref={canvasRef} width='200' height='100' className='canvas'/>
      <Link to='/microwave//band/honeymoonphase'>
        <div className='button'>
        <p>DISCOVER</p>
        </div>
      </Link>
    </div>
  );
}
  
export default Button;