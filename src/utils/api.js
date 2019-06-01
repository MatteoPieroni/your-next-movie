/***************************************
 * This file covers the methods for
 * interacting with the api
 **************************************/
import axios from "axios";

import { urls, i18n } from "../constants";

export const fetchMovies = async () => {
  try {
    const movies = axios(
      `${urls.nowPlaying}?api_key=${process.env.TMDB_API_KEY}&language=${
        i18n.language
      }&page=1&region=${i18n.region}`
    );
    // TODO add error handling
    if (!movies || !movies.results)
      throw new Error("We couldn't find any movies");

    return movies;
  } catch (e) {
    throw new Error("We couldn't find any movies");
  }
};
