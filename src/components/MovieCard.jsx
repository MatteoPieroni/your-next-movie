import React from 'react'
import { Rating } from './Rating.jsx';

export const MovieCard = (props) => {

  const {movie} = props;

  return (
    <article>
      <img src={movie.poster_path} alt={`Poster for ${movie.title}`} />
      <h3>{movie.title}</h3>
      <Rating value={movie.vote_average} />
    </article>
  )
}
