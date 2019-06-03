import React from 'react';
import styled from 'styled-components';

import { StarIcon } from './StarIcon.jsx';

const StyledRating = styled.div`
  position: relative;
  padding: .2rem 0;
  cursor: pointer;
  p {
    margin: 0;
  }
  .rating-description {
    display: block;
    position: absolute;
    top: 50%;
    left: .2rem;
    transform: translateY(-50%);
    width: 100%;
    opacity: 0;
    z-index: -1;
    overflow: hidden;
    transition: opacity .3s ease;
  }
  .open {
    svg {
      opacity: 0;
    }
    .rating-description {
      opacity: 1;
    }
  }
  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
      clip-path: inset(50%) !important;  /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }
`;

const getClassName = value => {
  const numberOfFullStars = Math.floor(value / 2);
  const isHalf = (value % 2 / 2) >= 0.5;
  return `${numberOfFullStars}${isHalf ? '-half' : ''}`;
}

export const Rating = ({value, isOpen, handleClick}) => {
  const className = value ? getClassName(value) : '';
  
  return (
    <StyledRating onClick={handleClick}>
      {/* we use a label to make sure users with screen-readers know the content, we also show the rating to sighted users via click */}
      <label className={isOpen ? 'open' : ''}>
        <StarIcon className={className} />
        <span className="rating-description" aria-hidden="true">
          <p>{value} out of 10</p>
        </span>
        <span className="sr-only">
          <p>Rating {value} out of 10</p>
        </span>
      </label>
    </StyledRating>
  )
}
