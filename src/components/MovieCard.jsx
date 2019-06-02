import React from 'react'
import { Rating } from './Rating.jsx';
import { Genre } from './Genre.jsx';
import { getGenres } from '../utils/movieListHelpers.js';

export const MovieCard = ({movie, isMobile}) => {

  // check for mobile size and use appropriate image
  const imgUrl = `http://image.tmdb.org/t/p/${isMobile <= 640 ? 'w342' : 'w500'}${movie.poster_path}`;
  // get genre names from genre ids
  const genres = getGenres(movie.genre_ids);

  return (
    <article>
      <img src={imgUrl} alt={`Poster for ${movie.title}`} />
      <h3>{movie.title}</h3>
      <Rating value={movie.vote_average} />
      {genres && genres.map(genre => <Genre name={genre} key={`${movie.id}-${genre}`} />)}
    </article>
  )
}
