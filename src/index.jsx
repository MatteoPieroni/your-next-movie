import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

import { MovieList } from "./components/MovieList.jsx";

const StyledApp = styled.main`
  img {
    display: block;
    max-width: 100%;
  }
  h1 {
    font-family: Rubik, Arial, Helvetica, sans-serif;
    font-weight: 300;
    font-size: 2.5rem;
    text-align: center;
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

const App = () => {
  const [error, setError] = useState("");

  return (
    <StyledApp>
      <h1>Your next movie!</h1>
      <MovieList />
    </StyledApp>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
