import React from 'react';
import styled from 'styled-components';

import { StarIcon } from './StarIcon.jsx';

const StyledRating = styled.div`
  position: relative;
  padding: .2rem .5rem;
  span {
    display: block;
    height: 1px;
    overflow: hidden;
    transition: height .3s ease;
  }
  p {
    margin: 0;
  }
  &:hover span {
    height: 1.5rem;
  }
`;

const getClassName = value => {
  const numberOfFullStars = Math.floor(value / 2);
  const isHalf = (value % 2 / 2) >= 0.5;
  return `${numberOfFullStars}${isHalf ? '-half' : ''}`;
}

export const Rating = ({value}) => {
  const className = value ? getClassName(value) : '';
  
  return (
    <StyledRating>
      {/* we use a label to make sure users with screen-readers know the content, we also show the rating to sighted users via hover */}
      <label>
        <StarIcon className={className} />
        <span>
          <p>Rating {value} out of 10</p>
        </span>
      </label>
    </StyledRating>
  )
}
