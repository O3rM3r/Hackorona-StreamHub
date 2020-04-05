import React from 'react';
import "./range-slider.css"

const getPercentage = (current, max) => (100 * current) / max;
const getLeft = percentage => `calc(${percentage}% - 5px)`;

function RangeSlider() {
  
  const sliderRef = React.useRef();
  const thumbRef = React.useRef();
  
  const diff = React.useRef();

  const handleMouseMove = event => {
    let newX =
      event.clientX -
      diff.current -
      sliderRef.current.getBoundingClientRect().left;

    const end = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth;
    const start = 0;
    if (newX < start) {
      newX = 0;
    }
    if (newX > end) {
      newX = end;
    }

    const newPercentage = getPercentage(newX, end);
    thumbRef.current.style.left = getLeft(newPercentage);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('mousemove', handleMouseMove);
  };

  const handleMouseDown = event => {
    diff.current =
      event.clientX - thumbRef.current.getBoundingClientRect().left;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  

  return (
    <div className="slider-cont">
      <div className="slider" ref={sliderRef}> 
        <div className="slider-thumb" ref={thumbRef} onMouseDown={handleMouseDown}/>
      </div>
      <div className="slider-label-container">
        <h1 className="slider-left-label">6AM</h1>
        <h1 className="slider-right-label">6AM</h1>
      </div>
    </div>
  );
};

export default RangeSlider