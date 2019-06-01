import React from 'react'

export const MovieCard = (props) => {

  const {movie} = props;

  return (
    <article>
      <h3>{movie.title}</h3>
    </article>
  )
}
