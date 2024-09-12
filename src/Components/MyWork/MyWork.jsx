import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import live_demo_icon from '../../assets/livedemo.svg'; // Add your live demo icon here

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <a
              key={index}
              href={work.w_link}
              target="_blank"
              rel="noopener noreferrer"
              className="mywork-item"
            >
              <div className="mywork-img-container">
                <img src={work.w_img} alt={work.w_name} />
                <div className="live-demo-icon">
                  <img src={live_demo_icon} alt="Live Demo" />
                </div>
              </div>
            </a>
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
