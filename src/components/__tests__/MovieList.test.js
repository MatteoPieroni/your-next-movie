import React from "react";
import { shallow, mount } from "enzyme";
import axios from "axios";
const MockAdapter = require("axios-mock-adapter");

import { MovieList } from "../MovieList";
import { MovieCard } from "../MovieCard";
import { urls } from "../../constants";

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
   * This last test cannot run for the time being, because enzyme hasn't yet integrated
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
});
