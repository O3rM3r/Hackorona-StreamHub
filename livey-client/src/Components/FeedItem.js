import React from 'react';
import './feed-item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareSquare, faUser, faStar, faFlag } from '@fortawesome/free-regular-svg-icons'

//{props.feed.ItemTitle}

function FeedItem(props) {
  return (
    <div className="feed-item">
        <img src="https://cdn.groo.co.il/_media/media/1278/157945.jpg" alt="Event Image"/>
        <div className="feed-item-title">
          <h2>Event Title</h2>
          <h3>30.03 | 8:00-11:30AM</h3>
        </div>
        <div className="feed-item-timelabel">
          <h2>8:00</h2>
        </div>
        <div className="feed-item-description">
          <p>Tagline placeholder - This is the best event that gives you...</p>
          <a href="https://www.youtube.com/embed/IFQmOZqvtWg">Link to Live Event</a>
        </div>
        <div className="feed-item-icons">
          <div className="feed-item-icons-class">
            <FontAwesomeIcon className="feed-item-icons-class" icon={faStar} size="lg"/>
            <h3>Save</h3>
          </div>
          <div className="feed-item-icons-class">
            <FontAwesomeIcon className="feed-item-icons-class" icon={faShareSquare} size="lg"/>
            <h3>Share</h3>
          </div>
          <div className="feed-item-icons-class">
            <FontAwesomeIcon className="feed-item-icons-class" icon={faUser} size="lg"/>
            <h3>View Host</h3>
          </div>
          <div className="feed-item-icons-class">
            <FontAwesomeIcon className="feed-item-icons-class" icon={faFlag} size="lg"/>
            <h3>Report</h3>
          </div>
          <div className="feed-item-icons-class">
            <h2>1,045</h2>
            <h3>Views</h3>
          </div>

        </div>
    </div>
  );
}

export default FeedItem;
