import React from "react";
import { shallow } from "enzyme";
import { MovieCard } from "../MovieCard";

describe("MovieCard Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieCard movie={{ title: "test title" }} />);
  });

  it("renders successfully", () => {
    expect(wrapper.find("article").length).toEqual(1);
  });
});
