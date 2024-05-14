// Aboutus.js
import React from "react";
import Webpic from "../../assets/webdesign.png";
import Education from "../../assets/education.png";
import "./aboutmef.css"
const Aboutus = () => {
  return (
    <div>
      {/* Educational Background Section */}
      <div className="education">
      <img src={Education} alt='webpic' className='skillbarimg1' />
        <h2>Educational Background</h2>
        <p>
          <div className="major">
          <strong>Major:</strong> Computer Information Technology<br />
          <strong>Institution:</strong> Northridge University<br />
          <strong>Year:</strong> 2021<br />
          </div>
          After completing my Bachelor's degree, I began working on web applications. Initially, I focused on front-end development. However, over time, I transitioned to polishing my back-end development skills
        </p>
      </div>
      <div id="about" className='skillbar1'>
        <img src={Webpic} alt='webpic' className='skillbarimg1' />
        <div className='skillbartext1'>
          <h2>BackEnd developer </h2>
          <p> I am a backend developer with a passion for building robust and scalable digital solutions. Armed with a versatile toolkit that includes JavaScript, C++, Python, and expertise in the MERN stack (MongoDB, Express.js, React, Node.js), I specialize in architecting and implementing server-side logic that powers dynamic web applications.<br></br> Whether you're launching a new venture, scaling your existing platform, or tackling complex technical challenges, I'm here to provide the backend expertise you need to succeed. Let's collaborate and transform your ideas into reality! </p>
        </div>
      </div>
    </div>
  );
}; 


export default Aboutus;
