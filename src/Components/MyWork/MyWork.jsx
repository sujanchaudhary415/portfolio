import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="mywork-item">
              <div className="mywork-img-container">
                <img src={work.w_img} alt={work.w_name} />
                <div className="link-overlay">
                  <a href={work.w_link} target="_blank" rel="noopener noreferrer" className="link-button">
                    Live Demo
                  </a>
                  <a href={work.github_link} target="_blank" rel="noopener noreferrer" className="link-button">
                    GitHub
                  </a>
                </div>
              </div>
              <div className="tech-info">
                {work.technologies.join(', ')}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
