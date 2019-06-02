import { genres } from "../constants";

// pure function to return movieArray ordered by popularity
export const orderMoviesArrayDescending = movieArray =>
  movieArray.sort((a, b) => b.popularity - a.popularity);

// pure function to return array filtered by rating
export const filterMoviesArrayByRating = (movieArray, ratingValue) =>
  movieArray.filter(movie => movie.vote_average >= ratingValue);

// pure function to return genres names from ids
export const getGenres = genresArray =>
  genresArray.map(genreId => genres[genreId]);
