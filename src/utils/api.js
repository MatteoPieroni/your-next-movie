/***************************************
 * This file covers the methods for
 * interacting with the api
 **************************************/
import axios from "axios";

import { urls, i18n } from "../constants";

export const fetchMovies = async () => {
  try {
    const { data } = await axios(
      `${urls.nowPlaying}?api_key=${process.env.TMDB_API_KEY}&language=${
        i18n.language
      }&page=1&region=${i18n.region}`
    );

    // TODO add error handling
    if (!data || !data.results) throw new Error("We couldn't find any movies");

    return data;
  } catch (e) {
    throw new Error("We couldn't find any movies");
  }
};
