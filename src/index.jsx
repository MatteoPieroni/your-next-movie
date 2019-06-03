/***************************************
 * This is the main app file
 **************************************/
import "@babel/polyfill";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { MovieList } from "./components/MovieList.jsx";

/*
  We are using styled components for the styles
*/
const StyledApp = styled.main`
  img {
    display: block;
    max-width: 100%;
  }
  h1 {
    margin-top: 0;
    padding: 1rem 1.5rem;
    background: #053f5e;
    font-family: Rubik, Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
    text-align: left;
    letter-spacing: 5px;
    text-transform: uppercase;
    @media screen and (min-width: 768px) {
      font-size: 2.5rem;
    }
    @media screen and (min-width: 1200px) {
      padding: 1rem 2rem;
      font-size: 3rem;
    }
    @media screen and (min-width: 1920px) {
      padding: 1rem 2.5rem;
      font-size: 3.5rem;
    }
  }
  .error {
    display: block;
    background: red;
    color: #fff;
    text-align: center;
  }
  /* set up utility class to hide content from sighted users but to keep it shown to screen-readers */
  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
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
      {error && (
        <div className="error">
          <p aria-live="polite">There has been an error, please try again</p>
          <p>Details: {error}</p>
        </div>
      )}
      <MovieList setError={setError} />
    </StyledApp>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
