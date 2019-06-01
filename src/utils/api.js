/***************************************
 * This file covers the methods for
 * interacting with the api
 **************************************/
import axios from "axios";

import { urls, i18n, errors } from "../constants";

export const fetchMovies = async () => {
  try {
    const { data } = await axios(urls.nowPlaying, {
      params: {
        api_key: process.env.TMDB_API_KEY,
        language: i18n.language,
        region: i18n.region,
        page: 1
      }
    });

    if (!data.results) throw new Error("NO_MOVIES");

    return data;
  } catch (e) {
    // check for the specific error or throw the generic one
    throw new Error(
      e.message === "NO_MOVIES" ? errors["NO_MOVIES"] : errors["GENERIC"]
    );
  }
};
