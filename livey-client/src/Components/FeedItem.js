import React from 'react';
import './feed-item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareSquare, faUser, faStar, faFlag } from '@fortawesome/free-regular-svg-icons'

//{props.feed.ItemTitle}

function FeedItem(props) {
  const kidsImg = 
  const fitnessImg = "https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=150&w=1260"
  const 
  
  
  
  
  const imgURL = props.feed.categories[0] 
  return (
    <div className="feed-item">
        <img src={props.feed.ItemImgURL} alt="Event Image"/>
        <div className="feed-item-title">
          <h2>{props.feed.ItemTitle}</h2>
          <h3>{props.feed.ItemStartDate}</h3>
        </div>
        <div className="feed-item-timelabel">
          <h2>8:00</h2>
        </div>
        <div className="feed-item-description">
          <p>{props.feed.ItemDescription}</p>
          <a href={props.feed.ItemURL}>Link to Live Event</a>
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
