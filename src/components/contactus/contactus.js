import React, { useRef, useState } from "react";
import "./contact.css";
import Facebook from "../../assets/fb4.webp";
import Insta from "../../assets/insta3.webp";
import Github from "../../assets/github.png";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef(); 
  const [buttonText, setButtonText] = useState("Send Email"); 

  const sendEmail = (e) => {
    e.preventDefault(); 
    setButtonText("Sending..."); 
    const serviceID = "service_x436ztp";
    const templateID = "template_6cjyfbh";
    emailjs.sendForm(serviceID, templateID, form.current, "kF-QK8cASFA5V10tC")
      .then(
        () => {
          setButtonText("Send Email"); 
          alert("Sent!"); 
          form.current.reset(); 
        },
        (err) => {
          setButtonText("Send Email"); 
          alert(`Error: ${JSON.stringify(err)}`); 
        }
      );
  };
  return (
    <section id="contactpage">
      <div id="contact">
        <h1 className="contactpageTitle"> Contact Me </h1>
        <span className="contactdesc">Please Fill out the form below to discuss any work Opportunities.</span>
        <form className="contactform" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name " name="from_name" />
          <input type="email" className="email" placeholder="Your Email" name="from_email" />
          <textarea name="message" rows="5" placeholder="Your Message" className="message" /> 
          <button type="submit" value={buttonText} id="button" className="submitbtn">Submit</button>
          <div className="links">
    <a href="https://www.facebook.com/rwasik2002/">
        <img className="link" src={Facebook} alt="Facebook"></img>
    </a>
    <a href="https://www.instagram.com/wasik.r1/">
        <img className="link" src={Insta} alt="Instagram"></img>
    </a>
    <a href="https://github.com/wasik023">
        <img className="link" src={Github} alt="GitHub"></img>
    </a>
</div>


        </form>
      </div>
    </section>
  );
};

export default Contact;