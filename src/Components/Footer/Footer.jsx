import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>Sujan</h1>
          <p>
          I’m a frontend developer from Bengaluru, India, seeking opportunities to apply my skills and contribute to innovative projects.
          </p>
        </div>
       
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Sujan Chaudhary. All rights reserved.{" "}
        </p>
        <div className="footer-bottom-right">
            <p>Term of services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
