import React from "react";
import { shallow, mount } from "enzyme";
import axios from "axios";
const MockAdapter = require("axios-mock-adapter");

import { MovieList, initialState, reducer } from "../MovieList";
import { MovieCard } from "../MovieCard";
import { urls } from "../../constants";
import { RatingInput } from "../RatingInput";

describe("State Reducer", () => {
  it("returns initial state by default", () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });
  it("returns a state containing the passed movieArray", () => {
    const mockMovieArray = [
      {
        id: 1,
        title: "One"
      },
      {
        id: 2,
        title: "Two"
      },
      {
        id: 3,
        title: "Three"
      }
    ];

    // send the  after-fetch action to the reducer
    const newState = reducer(initialState, {
      type: "SET_MOVIES",
      movieArray: mockMovieArray
    });

    expect(newState.allMovies).toEqual(mockMovieArray);
  });
  it("returns a state containing the filtered movies when filter is changed", () => {
    const mockMovieArray = [
      {
        id: 1,
        title: "One",
        vote_average: 10,
        popularity: 75
      },
      {
        id: 2,
        title: "Two",
        vote_average: 5,
        popularity: 80
      },
      {
        id: 3,
        title: "Three",
        vote_average: 3.5,
        popularity: 10
      }
    ];
    // our expected list, ordered and filtered
    const expectedMovieList = [
      {
        id: 2,
        title: "Two",
        vote_average: 5,
        popularity: 80
      },
      {
        id: 1,
        title: "One",
        vote_average: 10,
        popularity: 75
      }
    ];

    // send after-fetch action to reducer
    const fetchedMoviesState = reducer(initialState, {
      type: "SET_MOVIES",
      movieArray: mockMovieArray
    });

    // send filter-change action to reducer
    const changedFiltersState = reducer(fetchedMoviesState, {
      type: "CHANGE_FILTER",
      filter: 4
    });

    expect(changedFiltersState.movieList).toEqual(expectedMovieList);
  });
});

describe("MovieList component", () => {
  let wrapper;
  let mock;

  beforeEach(() => {
    wrapper = shallow(<MovieList />);
  });

  it("renders successfully", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it("renders initially without any movies", () => {
    expect(wrapper.containsMatchingElement(<MovieCard />)).toEqual(false);
  });
  /**
   * This test cannot run for the time being, because enzyme hasn't yet integrated
   * support for the useEffect hooks, but the implementation shows how it would work
   * SEE https://github.com/airbnb/enzyme/issues/2073
   */
  // it("renders with the fetched movies", () => {
  //   // mock data
  //   const expectedData = {
  //     results: [
  //       {
  //         title: "My Movie",
  //         rating: 3,
  //         id: 1
  //       },
  //       {
  //         title: "My Awesome Movie",
  //         rating: 5,
  //         id: 2
  //       },
  //       {
  //         title: "My Awful Movie",
  //         rating: 1,
  //         id: 3
  //       }
  //     ]
  //   };
  //   // mock call to get movies
  //   mock = new MockAdapter(axios);
  //   mock.onGet(urls.nowPlaying).reply(200, expectedData);

  //   wrapper = mount(<MovieList />);

  //   expect(wrapper.containsMatchingElement(<MovieCard />)).toEqual(true);
  // });
  it("renders a RatingInput component", () => {
    expect(wrapper.containsMatchingElement(<RatingInput />)).toEqual(true);
  });
});
