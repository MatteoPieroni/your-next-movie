import React from "react";
import { shallow } from "enzyme";
import { StarIcon } from "../StarIcon";

describe("StarIcon Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StarIcon />);
  });

  it("renders an svg", () => {
    expect(wrapper.find("svg").length).toEqual(1);
  });
});
