import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import aiimage from "../../assets/animation_image.png";
import htmlIcon from "../../assets/htmlicon.svg";
import cssIcon from "../../assets/cssicon.svg";
import reactIcon from "../../assets/reacticon.svg";
import jsIcon from "../../assets/jsicon.svg";
import firebaseIcon from "../../assets/firebaseicon.svg";
import bootstrapIcon from "../../assets/bootstrapicon.svg";
import chakrauiIcon from "../../assets/chakraui.png";
import javaIcon from "../../assets/javaicon.svg";
import gitIcon from "../../assets/giticon.svg";
import githubIcon from "../../assets/githubicon.svg";
import figmaIcon from "../../assets/figmaicon.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={aiimage} alt="AI Image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m excited to bring my skills in HTML, CSS, JavaScript, and React to new opportunities. Although I’m just starting my career, I’ve worked on various personal and academic projects that showcase my ability to build engaging and user-friendly web applications. I’m eager to apply my knowledge, continue learning, and contribute to innovative projects in a professional setting.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <img src={htmlIcon} alt="HTML" className="skill-icon" />
              <p>HTML</p>
            </div>
            <div className="about-skill">
              <img src={cssIcon} alt="CSS" className="skill-icon" />
              <p>CSS</p>
            </div>
            <div className="about-skill">
              <img src={jsIcon} alt="JavaScript" className="skill-icon" />
              <p>JavaScript</p>
            </div>
            <div className="about-skill">
              <img src={javaIcon} alt="Java" className="skill-icon" />
              <p>Java</p>
            </div>
            <div className="about-skill">
              <img src={reactIcon} alt="React" className="skill-icon" />
              <p>React</p>
            </div>
            <div className="about-skill">
              <img src={bootstrapIcon} alt="Bootstrap" className="skill-icon" />
              <p>Bootstrap</p>
            </div>
            <div className="about-skill">
              <img src={chakrauiIcon} alt="Chakra UI" className="skill-icon" />
              <p>Chakra UI</p>
            </div>
            <div className="about-skill">
              <img src={firebaseIcon} alt="Firebase" className="skill-icon" />
              <p>Firebase</p>
            </div>
            <div className="about-skill">
              <img src={gitIcon} alt="Git" className="skill-icon" />
              <p>Git</p>
            </div>
            <div className="about-skill">
              <img src={githubIcon} alt="GitHub" className="skill-icon" />
              <p>GitHub</p>
            </div>
            <div className="about-skill">
              <img src={figmaIcon} alt="Figma" className="skill-icon" />
              <p>Figma</p>
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
