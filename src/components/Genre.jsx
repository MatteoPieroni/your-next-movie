import React from 'react'
import styled from 'styled-components';

const StyledP = styled.p`
  margin: 0;
  border-radius: 10px;
  padding: .2rem 1rem;
`;

export const Genre = ({name}) => {
  return (
    <p>
      {name}
    </p>
  )
}
