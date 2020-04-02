import React from 'react';
import './feed-item.css';


// {props.feed.ItemTitle}

function FeedItem(props) {
  return (
    <div className="feed-item">
        <h2 className="feed-item-title">Feed Title</h2>
    </div>
  );
}

export default FeedItem;
