import React, { useState, useEffect } from 'react'
import { fetchMovies } from '../utils/api';

export const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [filter, setFilter] = useState(3);

  useEffect(() => {
    const movies = fetchMovies();
    setMovieList(movies);
  }, [])

  return (
    <div>
      
    </div>
  )
}
