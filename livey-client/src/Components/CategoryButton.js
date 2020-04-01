import React from 'react';
import './category-button.css';

function CategoryButton(props) {

  console.log('props',props);
  return (
    <div className="category-button">

        <h2>Kids {/*props.category.categoryName*/}</h2>
    </div>
  );
}

export default CategoryButton;

//{props.data.category}