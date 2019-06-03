import React, { useState } from 'react'
import styled from 'styled-components';

import { Rating } from './Rating.jsx';
import { Genre } from './Genre.jsx';
import { getGenres } from '../utils/movieListHelpers.js';

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: .5rem;
  width: calc(50% - 1rem);
  img {
    border-radius: 5px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.28), 0 10px 10px rgba(0, 0, 0, 0.06);
  }
  h3 {
    margin-bottom: 0;
  }
  .genres {
    display: flex;
    overflow: auto;
    &.open {
      height: auto;
    }
  }
`;

export const MovieCard = ({movie, isMobile}) => {
  const [isOpen, setIsOpen] = useState(false)

  // check for mobile size and use appropriate image
  const imgUrl = `http://image.tmdb.org/t/p/${isMobile <= 640 ? 'w342' : 'w500'}${movie.poster_path}`;
  // get genre names from genre ids
  const genres = getGenres(movie.genre_ids);

  return (
    <StyledArticle>
      <header>
        <img src={imgUrl} alt={`Poster for ${movie.title}`} />
        <h3>{movie.title}</h3>
      </header>
      <footer>
        <Rating value={movie.vote_average} isOpen={isOpen} handleClick={() => setIsOpen(!isOpen)} />
        <div className={`genres ${isOpen ? 'open' : ''}`}>
          {genres && genres.map(genre => <Genre name={genre} key={`${movie.id}-${genre}`} />)}
        </div>
      </footer>
    </StyledArticle>
  )
}
