import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  // State to manage how many works are shown and if all works are visible
  const [itemsToShow, setItemsToShow] = useState(3);
  const [showAll, setShowAll] = useState(false);

  // Function to handle showing more works
  const handleShowMore = () => {
    setItemsToShow(mywork_data.length); // Show all items
    setShowAll(true); // Set state to indicate all items are displayed
  };

  // Function to handle undoing the show more action
  const handleUndo = () => {
    setItemsToShow(3); // Reset to the initial count
    setShowAll(false); // Set state to indicate that not all items are displayed
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.slice(0, itemsToShow).map((work, index) => {
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
      {!showAll && itemsToShow < mywork_data.length && ( // Show "Show More" only if there are more items to show
        <div className="mywork-showmore" onClick={handleShowMore} role="button" tabIndex={0} onKeyPress={handleShowMore}>
          <p>Show More</p>
          <img src={arrow_icon} alt="" />
        </div>
      )}
      {showAll && ( // Show "Undo" button only if all items are displayed
        <div className="mywork-undo" onClick={handleUndo} role="button" tabIndex={0} onKeyPress={handleUndo}>
          <p>Show Less</p>
        </div>
      )}
    </div>
  );
};

export default MyWork;
