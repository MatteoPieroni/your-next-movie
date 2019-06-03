import React from "react";
import { mount } from "enzyme";
import { Genre } from "../Genre";

describe("Genre Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Genre />);
  });

  it("renders a p element", () => {
    expect(wrapper.find("p").length).toEqual(1);
  });
});
