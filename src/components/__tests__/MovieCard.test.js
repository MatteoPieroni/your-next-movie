import React from "react";
import { shallow } from "enzyme";

import { MovieCard } from "../MovieCard";
import { Rating } from "../Rating";

describe("MovieCard Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieCard movie={{ title: "test title" }} />);
  });

  it("renders successfully", () => {
    expect(wrapper.find("article").length).toEqual(1);
  });
  it("renders the movie poster", () => {
    wrapper.setProps({
      movie: {
        poster_path: "/123"
      }
    });
    const poster = wrapper.find("img");
    // check the image is there
    expect(poster.length).toEqual(1);
    // check the image has the poster url
    expect(poster.props().src.length).toBeGreaterThan(1);
    // check the image has an alt attribute
    expect(poster.props().alt.length).toBeGreaterThan(1);
  });
  it("renders the rating", () => {
    wrapper.setProps({
      movie: {
        vote_average: 5
      }
    });
    expect(wrapper.containsMatchingElement(<Rating />)).toEqual(true);
  });
  it("renders the genres", () => {
    wrapper.setProps({
      movie: {
        genre_ids: [99, 18, 10751]
      }
    });
    expect(wrapper.containsMatchingElement(<Genre />)).toEqual(true);
  });
});
