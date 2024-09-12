import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import aiimage from "../../assets/animation_image.png";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={aiimage} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
            I’m excited to bring my skills in HTML, CSS, JavaScript, and React to new opportunities. Although I’m just starting my career, I’ve worked on various personal and academic projects that showcase my ability to build engaging and user-friendly web applications. My projects demonstrate proficiency in creating responsive designs, integrating APIs, and ensuring a seamless user experience.
            </p>
            <p>
            I’m eager to apply my knowledge, continue learning, and contribute to innovative projects in a professional setting.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Firebase</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap</p> <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>React & API Projects</h1>
          <p>EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
