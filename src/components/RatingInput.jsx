/***************************************
 * This component holds the logic and
 * markup for the filtering of ratings
 **************************************/
import React from 'react';
import { Range, getTrackBackground } from 'react-range';
import styled from 'styled-components';

const StyledSection = styled.section`
  margin: 1rem auto;
  width: calc(100% - 2rem);
  @media screen and (min-width: 768px) {
    margin: 1rem auto;
    width: 50%;
  }
  @media screen and (min-width: 1200px) {
  margin: 1rem auto;
  width: 35%;
  }
  @media screen and (min-width: 1920px) {
    margin: 1rem auto;
    width: 20%;
  }
  h4 {
    text-align: center;
    text-transform: uppercase;
  }
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  /* styles for the custom slider input */
  .track {
    height: 36px;
    display: flex;
    width: 100%;
  }
  .inner-track {
    height: 5px;
    width: 100%;
    border-radius: 4px;
    align-self: center;
  }
  .thumb {
    height: 52px;
    width: 52px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDE3LjI3TDE4LjE4IDIxbC0xLjY0LTcuMDNMMjIgOS4yNGwtNy4xOS0uNjFMMTIgMiA5LjE5IDguNjMgMiA5LjI0bDUuNDYgNC43M0w1LjgyIDIxeiIgZmlsbD0iI2ZmZDcwMCIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .thumb__label {
    position: absolute;
    top: -28px;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    font-family: Arial,Helvetica Neue,Helvetica,sans-serif;
    padding: 4px;
    border-radius: 4px;
    background-color: #197BBD;
  }
`;

/* both inputs here are controlled by the same value and have the same onChange */
export const RatingInput = ({value, handleChange}) => {
  return (
    <StyledSection>
      <h4>Filter by vote</h4>
      {/* This input is used for screen-readers, by leveraging html5 built-in support */}
      <label className="sr-only">Rating (between 1 and 10):
        <input type="range" min="1" max="10" step="0.5" value={value} id="rating" onChange={(e) => handleChange(e.target.value)} />   
      </label>
      {/* 
        This input is hidden for screen-readers and
        we don't test it as it's covered by its own tests
      */}
      <div className="container">
        <Range
          values={[value]}
          step={1}
          min={1}
          max={10}
          onChange={values => handleChange(values[0])}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              className="track"
            >
              <div
                ref={props.ref}
                className="inner-track"
                style={{
                  background: getTrackBackground({
                    values: [value],
                    colors: ['#197BBD', '#ccc'],
                    min: 1,
                    max: 10
                  }),
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="thumb"
            >
              <div className="thumb__label">
                {value}
              </div>
            </div>
          )}
        />
      </div>
    </StyledSection>
  )
}
