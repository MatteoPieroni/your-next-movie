import React from "react";
import { mount } from "enzyme";
import { StarIcon, StyledSvg } from "../StarIcon";

describe("StarIcon Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<StarIcon className="3-half" />);
  });

  it("renders an svg", () => {
    expect(wrapper.find("svg").length).toEqual(1);
  });
});
