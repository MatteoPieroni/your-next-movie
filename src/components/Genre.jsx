/***************************************
 * This component holds the logic and
 * markup for each of the genre tags
 **************************************/
import React from 'react'
import styled from 'styled-components';

const StyledP = styled.p`
  display: inline-block;
  margin: 0 .5rem .5rem 0;
  border-radius: 16px;
  padding: .2rem .5rem;
  background: #115173;
  font-family: Roboto Condensed,  Arial, Helvetica, sans-serif;
  color: #fff;
  white-space: nowrap;
`;

export const Genre = ({name}) => {
  return (
    <StyledP>
      {name}
    </StyledP>
  )
}
