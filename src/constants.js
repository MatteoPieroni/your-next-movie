/***************************************
 * This file contains the main constants
 * used in the app
 **************************************/
const baseURl = "https://api.themoviedb.org/3/movie";

export const urls = {
  nowPlaying: baseURl + "/now_playing"
};

// this is used as is now, but could
// be built upon in the future
export const i18n = {
  language: "en-GB",
  region: "GB"
};

// without calling the api to get genres (as requested)
// we map the genres to their id, which will be type forced
// into strings
export const genres = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western"
};

export const errors = {
  GENERIC: "Sorry, there has been an error. Please refresh the page.",
  NO_MOVIES: "We couldn't find any movies"
};
