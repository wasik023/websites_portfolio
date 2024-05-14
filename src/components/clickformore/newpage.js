import React, { useState } from 'react';
import { Link } from 'react-scroll';
import bg from '../../assets/sanan.jpeg';
import "./newpage.css";

const NewPage = () => {
  const [isBlur, setIsBlur] = useState(false);

  const handleMouseEnter = () => {
    setIsBlur(true);
  };

  const handleMouseLeave = () => {
    setIsBlur(false);
  };

  return (
    <div>
      <section id='intro1'>
        <div className='introContent1' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <span className='hello1'>Asalamuallikum</span>
          <span className='introtext1'>I'm <span className='introname'>Muhammad Sanan</span> <br />backend developer</span>
          <p className='intropara1'>I am a Skilled BackEnd developer <br /> and will make your website functional. </p>
        </div>
        <img src={bg} alt='wasik' className={isBlur ? 'bg1 blur' : 'bg1'} />
      </section>
    </div>
  );
};

export default NewPage;


