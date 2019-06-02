import React from 'react';

export const RatingInput = ({value, handleChange}) => {
  return (
    <label>Rating (between 1 and 10):
      <input type="range" min="1" max="10" step="0.5" value={value} id="rating" onChange={(e) => handleChange(e.target.value)} />   
    </label>
  )
}
