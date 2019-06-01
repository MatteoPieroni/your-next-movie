import React, { useState, useEffect } from 'react';

import {fetchMovies} from '../utils/api';
import { MovieCard } from './MovieCard.jsx';

export const MovieList = () => {
  const [movieList, setMovieList] = useState({});
  const [filter, setFilter] = useState(3);

  useEffect(() => {
    const moviesWrapper = async () => {
      const movies = await fetchMovies();
      setMovieList(movies);
    }
    moviesWrapper();
  }, [])

  return (
    <div>
      {movieList.results && movieList.results.map(movie => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </div>
  )
}
