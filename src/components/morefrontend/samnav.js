import React, { useState } from 'react';
import logo from "../../assets/logo.jpeg";
import { Link } from 'react-scroll';
import contactimg from "../../assets/contact3.webp";
import menu from "../../assets/menu2.png";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Samnav = () => {
  const [showmenu, setshowmenu] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <nav className="navbar">
      <img src={logo} alt='logo' className='logo'></img>
      <div className='desktopmenu'>
        <Link activeClass='active' to='intro1' spy={true} smooth={true} offset={-50} duration={500} className='desktopmenulistitem' onClick={() => setshowmenu(false)}> Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='desktopmenulistitem' onClick={() => setshowmenu(false)}>About</Link>
      </div>
      {/* Update onClick handler to navigate to "/newpage" route */}
      <button className='desktopMenubtn' activeClass="active" onClick={() => {
        navigate('/'); // Navigate to "/newpage" route
      }}> <img src={contactimg} alt='contact' className='desktopmenuimg' />Contact Us </button>
      <img src={menu} alt='Menu' className='Mobmenu' onClick={() => setshowmenu(!showmenu)} />
      <div className='navmenu' style={{ display: showmenu ? 'flex' : 'none' }}>
        <Link activeClass='active' to='intro1' spy={true} smooth={true} offset={-50} duration={500} className='listitem'>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='listitem'>About Me </Link>
      </div>
    </nav>
  )
}

export default Samnav;