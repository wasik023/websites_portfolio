// Aboutus.js
import React from "react";
import Webpic from "../../assets/webdesign.png";
import Education from "../../assets/education.png";
import "./aboutsam.css";
const Aboutsam = () => {
  return (
    <div>
      {/* Educational Background Section */}
      <div className="education1">
      <img src={Education} alt='webpic' className='skillbarimg2' />
        <h2>Educational Background</h2>
        <p>
          <div className="major1">
          <strong>Major:</strong> Computer Science & Information Technology(CS& IT)<br />
          <strong>Institution:</strong> University Of Engineering & Technology <br />
          <strong>Year:</strong> 2025 (currently in 6TH Semester)<br />
          </div>
          </p>
      </div>
      <div id="about" className='skillbar2'>

        <img src={Webpic} alt='webpic' className='skillbarimg2' />
        <div className='skillbartext2'>
        <div className="major1">
          <h2> Front-End Developer  </h2>
          </div>
          <p>  As a skilled frontend developer, I specialize in creating engaging and intuitive user interfaces for websites and web applications. With expertise in HTML, CSS, and JavaScript, I design and implement responsive layouts, ensuring seamless user experiences across devices. I have experience working with popular frontend frameworks like React.js and Vue.js, leveraging their components and state management capabilities to build dynamic and interactive interfaces. Additionally, I prioritize accessibility and performance optimization to deliver inclusive and fast-loading web experiences. My proficiency in frontend development enables me to translate design concepts into functional and visually appealing digital solutions that meet both user needs and business objectives.</p>
        </div>
      </div>
    </div>
  );
}; 


export default Aboutsam;