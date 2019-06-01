import axios from "axios";
const MockAdapter = require("axios-mock-adapter");

import { fetchMovies } from "../api";
import { urls, errors } from "../../constants";

// This sets the mock adapter on the default instance
let mock;

describe("API methods", () => {
  // set up our mock object
  beforeEach(() => {
    mock = new MockAdapter(axios);
  });
  // teardown our mock object
  afterEach(() => {
    mock.reset();
  });

  it("returns the data from a successful call", async () => {
    // mock expected data
    const expectedData = {
      results: [
        {
          name: "My Movie",
          rating: 3
        },
        {
          name: "My Awesome Movie",
          rating: 5
        },
        {
          name: "My Awful Movie",
          rating: 1
        }
      ]
    };
    // mock call to get movies
    mock.onGet(urls.nowPlaying).reply(200, expectedData);

    const movies = await fetchMovies();

    expect(movies.length).toEqual(expectedData.length);
  });
  // needs to become async to handle the promise throwing
  it("returns the specific error if no movies are returned", async () => {
    // need a wrapper to make sure mock acts on the axios call in fetchMovies
    const wrapper = async () => {
      mock.onGet(urls.nowPlaying).reply(200, {});
      await fetchMovies();
    };

    await expect(wrapper()).rejects.toThrow(errors["NO_MOVIES"]);
  });
  // needs to become async to handle the promise throwing
  it("returns the generic error if there were problems fetching", async () => {
    // need a wrapper to make sure mock acts on the axios call in fetchMovies
    const wrapper = async () => {
      mock.onGet(urls.nowPlaying).reply(400, {});
      await fetchMovies();
    };

    await expect(wrapper()).rejects.toThrow(errors["GENERIC"]);
  });
});
