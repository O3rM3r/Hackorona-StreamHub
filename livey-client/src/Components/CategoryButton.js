import React from 'react';
import './category-button.css';

function CategoryButton(props) {

  console.log('props',props);
  return (
    <div className="category-button">

        <h2>{props && props.category && props.category.CategoryName}</h2>
    </div>
  );
}

export default CategoryButton;

//{props.data.category}