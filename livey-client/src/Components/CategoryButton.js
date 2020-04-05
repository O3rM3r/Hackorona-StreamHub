import React from 'react';
import './category-button.css';

function CategoryButton(props) {

  //console.log('props',props);
  return (
    <div className="category-button" style={{background: props.color}}>
      <div className="category-button-style">
        <h1 className="category-button-regular">{props.category}</h1>
      </div>
    </div>
  );
}

export default CategoryButton;

//{props.data.category}