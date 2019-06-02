import React, { useState, useEffect } from 'react';

import {fetchMovies} from '../utils/api';
import { MovieCard } from './MovieCard.jsx';
import { orderMoviesArrayDescending, filterMoviesArrayByRating } from '../utils/movieListHelpers';

export const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [filter, setFilter] = useState(3);

  // wrapper function to order and filter movie array
  const orderAndSetMovieList = movieArray => {
    // filter the array
    const filteredMovieArray = filterMoviesArrayByRating(movieArray, filter);
    // order the array
    const orderedMovieArray = orderMoviesArrayDescending(filteredMovieArray);
    setMovieList(orderedMovieArray);
  }

  useEffect(() => {
    const moviesWrapper = async () => {
      const movies = await fetchMovies();
      orderAndSetMovieList(movies.results);
    }
    moviesWrapper();
  }, [])

  return (
    <div>
      {movieList && movieList.map(movie => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </div>
  )
}
