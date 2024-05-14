import React, { useState } from 'react';
import { Link } from 'react-scroll';
import bg from '../../assets/faizanchikna.jpg';
import "./samfront.css"

const Faizan = () => {
  const [isBlur, setIsBlur] = useState(false);

  const handleMouseEnter = () => {
    setIsBlur(true);
  };

  const handleMouseLeave = () => {
    setIsBlur(false);
  };

  return (
    <div>
      <section id='intro2'>
        <div className='introContent2' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <span className='hello1'>Asalamuallikum</span>
          <span className='introtext2'>My Name is  <span className='introname'>Faizan Ahmad</span> <br /> The Database Manager </span>
          <p className='intropara2'>I am responsible for the data which is been stored in the databases  <br /> the user can Copy,Retrieve,Store and Delete Data </p>
        </div>
        <img src={bg} alt='wasik' className={isBlur ? 'bg2 blur' : 'bg2'} />
      </section>
    </div>
  );
};
export default Faizan;