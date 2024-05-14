import React, { useState } from 'react';
import { Link } from 'react-scroll';
import bg from '../../assets/sam1.jpeg';
import "./samfront.css"

const NewPage1 = () => {
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
          <span className='introtext2'>I'm <span className='introname'>Sameer Qureshi</span> <br />Front-End Developer</span>
          <p className='intropara2'>I Will make your Website Visually Appealing  <br /> and will make your website functional. </p>
        </div>
        <img src={bg} alt='wasik' className={isBlur ? 'bg2 blur' : 'bg2'} />
      </section>
    </div>
  );
};
export default NewPage1;