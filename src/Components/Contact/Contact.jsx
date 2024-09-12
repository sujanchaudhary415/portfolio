import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import whatsapp from "../../assets/whatsapp.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0294ce1b-77d8-4a94-8d0c-1cbf906ee3e4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert("Form Submitted Successfully! Thank you for getting in touch.");
    } else {
      console.log("Error", data);
      setResult(data.message);
      alert("Error submitting the form: " + data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <a href="mailto:sujanchaudhary415@gmail.com">sujanchaudhary415@gmail.com</a>
            </div>
            <div className="contact-detail">
              <img src={whatsapp} alt="" />
              <a href="https://wa.me/9779708238538" target="_blank" rel="noopener noreferrer">+977 9708238538 (Whatsapp)</a>
            </div>
            <div className="contact-detail">
              <img src={linkedin} alt="" />
              <a href="https://linkedin.com/in/sujanchaudhary" target="_blank" rel="noopener noreferrer">https://linkedin.com/in/sujanchaudhary</a>
            </div>
            <div className="contact-detail">
              <img src={github} alt="" />
              <a href="https://github.com/sujanchaudhary415" target="_blank" rel="noopener noreferrer">https://github.com/sujanchaudhary415</a>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Bangalore, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
