import React from 'react';
import styled from 'styled-components';

// this function takes the passed in className and maps it to a specific number of stars
export const StyledSvg = styled.svg`
  z-index: 1;
  transition: opacity .3s ease;
  cursor: pointer;
  .all-stars {
    ${props => {
    let styles = '';
    const stringArray = props.className.split('-');
    for (let i = 1; i <= stringArray[0]; i++) {
      styles += `
        .star:nth-child(${i}) .fill {
          fill: #ffd700;
        }
      `
    }
    if(stringArray[1]) {
      styles += `
        .star:nth-child(${+stringArray[0] + 1}) .fill {
          fill: url(#half-gradient);
        }
      `;
    }
    return styles;
  }}
  }
  .fill {
    fill: rgba(255, 241, 163, 0.4);
  }
`;

export const StarIcon = ({className}) => {
  return (
  <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" className={className}>
  <defs>
    <linearGradient id="half-gradient">
      <stop offset="0%" stopColor="#ffd700" />
      <stop offset="50%" stopColor="#ffd700" />
      <stop offset="50.001%" stopColor="rgba(255, 241, 163, 0.4)" />
    </linearGradient>
  </defs>
  <g className="all-stars">
   <g>
    <g className="star">
     <path d="m1.23639,38.51829l122.96341,0l0,122.96341l-122.96341,0l0,-122.96341z" fill="none" />
     <path d="m62.71809,127.00072l31.66308,19.11055l-8.40249,-36.01803l27.97418,-24.23403l-36.83779,-3.12533l-14.39698,-33.96865l-14.39696,33.96865l-36.83779,3.12533l27.97418,24.23403l-8.40249,36.01803l31.66307,-19.11055l-0.00001,0z" className="fill" />
     <path d="m1.23639,38.51829l122.96341,0l0,122.96341l-122.96341,0l0,-122.96341z" fill="none" />
    </g>
    <g className="star">
     <path d="m114.49554,38.51829l122.96341,0l0,122.96341l-122.96341,0l0,-122.96341z" fill="none" />
     <path d="m175.97724,127.00071l31.66308,19.11056l-8.4025,-36.01803l27.97418,-24.23404l-36.83779,-3.12532l-14.39697,-33.96864l-14.39697,33.96864l-36.83779,3.12532l27.97418,24.23404l-8.4025,36.01803l31.66308,-19.11056z" className="fill" />
     <path d="m114.49554,38.51829l122.96341,0l0,122.96341l-122.96341,0l0,-122.96341z" fill="none" />
    </g>
    <g className="star">
     <path d="m228.19107,38.51829l122.96341,0l0,122.96341l-122.96341,0l0,-122.96341z" fill="none" />
     <path d="m289.67277,127.00072l31.66308,19.11055l-8.40249,-36.01803l27.97418,-24.23403l-36.83779,-3.12533l-14.39698,-33.96865l-14.39696,33.96865l-36.83779,3.12533l27.97418,24.23403l-8.40249,36.01803l31.66307,-19.11055l-0.00001,0z" className="fill" />
     <path d="m228.19107,38.51829l122.96341,0l0,122.96341l-122.96341,0l0,-122.96341z" fill="none" />
    </g>
    <g className="star">
     <path d="m341.99567,38.51829l122.96341,0l0,122.96341l-122.96341,0l0,-122.96341z" fill="none" />
     <path d="m403.47737,127.00072l31.66308,19.11055l-8.40249,-36.01803l27.97418,-24.23403l-36.83779,-3.12533l-14.39698,-33.96865l-14.39696,33.96865l-36.83779,3.12533l27.97418,24.23403l-8.40249,36.01803l31.66307,-19.11055l-0.00001,0z" className="fill" />
     <path d="m341.99567,38.51829l122.96341,0l0,122.96341l-122.96341,0l0,-122.96341z" fill="none" />
    </g>
    <g className="star">
     <path d="m455.80018,38.51829l122.96341,0l0,122.96341l-122.96341,0l0,-122.96341z" fill="none" />
     <path d="m517.28188,127.00072l31.66308,19.11055l-8.40249,-36.01803l27.97418,-24.23403l-36.83779,-3.12533l-14.39698,-33.96865l-14.39696,33.96865l-36.83779,3.12533l27.97418,24.23403l-8.40249,36.01803l31.66307,-19.11055l-0.00001,0z" className="fill" />
     <path d="m455.80018,38.51829l122.96341,0l0,122.96341l-122.96341,0l0,-122.96341z" fill="none" />
    </g>
   </g>
  </g>
 </StyledSvg>
  )
}
