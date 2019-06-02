import React from "react";
import { shallow } from "enzyme";
import { Genre } from "../Genre";

describe("Genre Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Genre />);
  });

  it("renders a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
