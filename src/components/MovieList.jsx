/***************************************
 * This component holds the logic and
 * markup for the whole movie list on
 * the page
 **************************************/
import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';

import { fetchMovies } from '../utils/api';
import { MovieCard } from './MovieCard.jsx';
import { orderMoviesArrayDescending, filterMoviesArrayByRating } from '../utils/movieListHelpers';
import { RatingInput } from './RatingInput.jsx';

const StyledMovieSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    padding: 0 1rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 0 1.5rem;
  }
  @media screen and (min-width: 1920px) {
    padding: 0 2rem;
  }
`;

// allMovies represents the original collected data, movieList represents the showing movies
export const initialState = {allMovies: [], movieList: [], filter: 3};

// wrapper function to keep the movieList always filtered and orderer
// this function is tested in the reducer test
const filterAndOrderMovieList = (movieArray, filter) => {
      // filter the array
      const filteredMovieArray = filterMoviesArrayByRating(movieArray, filter);
      // order the array
      const orderedMovieArray = orderMoviesArrayDescending(filteredMovieArray);
      return orderedMovieArray;
}

// using a reducer helps keeping the movieList in sync with the filter (REDUX style!)
export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        ...state,
        allMovies: action.movieArray,
        movieList: filterAndOrderMovieList(action.movieArray, state.filter)
      };
    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: action.filter,
        movieList: filterAndOrderMovieList(state.allMovies, action.filter)
      };
    default:
      return {
        ...initialState
      };
  }
}

export const MovieList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const isMobile = window.innerWidth;

  // useEffect is used as componentDidMount
  useEffect(() => {
    const moviesWrapper = async () => {
      const movies = await fetchMovies();
      dispatch({type: 'SET_MOVIES', movieArray: movies.results});
    }
    moviesWrapper();
  }, [])

  return (
    <div>
      <RatingInput value={state.filter} handleChange={(value) => dispatch({type: 'CHANGE_FILTER', filter: value})} />
      <StyledMovieSection>
        {state.movieList && state.movieList.map(movie => (
          <MovieCard key={movie.id} movie={movie} isMobile={isMobile} />
        ))}
      </StyledMovieSection>
    </div>
  )
}
