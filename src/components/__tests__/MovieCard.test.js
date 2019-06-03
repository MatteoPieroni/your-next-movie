import React from "react";
import { mount } from "enzyme";

import { MovieCard } from "../MovieCard";
import { Rating } from "../Rating";
import { Genre } from "../Genre";

const mockMovie = {
  id: 420817,
  vote_average: 7.3,
  title: "Aladdin",
  poster_path: "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
  genre_ids: [12, 14, 10749, 35, 10751]
};

describe("MovieCard Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<MovieCard movie={mockMovie} />);
  });

  it("renders successfully", () => {
    expect(wrapper.find("article").length).toEqual(1);
  });
  it("renders the movie poster", () => {
    const poster = wrapper.find("img");
    // check the image is there
    expect(poster.length).toEqual(1);
    // check the image has the poster url
    expect(poster.props().src.length).toBeGreaterThan(1);
    // check the image has an alt attribute
    expect(poster.props().alt.length).toBeGreaterThan(1);
  });
  it("renders the rating", () => {
    expect(wrapper.containsMatchingElement(<Rating />)).toEqual(true);
  });
  it("renders the genres", () => {
    expect(wrapper.containsMatchingElement(<Genre />)).toEqual(true);
  });
});
