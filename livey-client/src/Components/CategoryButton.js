import React from 'react';
import './category-button.css';

function CategoryButton(props) {

  //console.log('props',props);
  return (
    <div className="category-button" 
      style={{background: props.color}} 
      onClick={() => props.handleClick(props.name)}>
        <h1 className={
          props.selected === props.name ? "category-button-selected" : "category-button-regular"
        }>{props.category}</h1>
    </div>
  );
}

export default CategoryButton;

//{props.data.category}