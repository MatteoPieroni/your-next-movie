import React from "react";
import { shallow } from "enzyme";
import { Rating } from "../Rating";

describe("Rating Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Rating />);
  });

  it("renders a container div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
  it("renders a span element with a title");
});
