import React from "react";
import { mount } from "enzyme";
import { Rating } from "../Rating";

describe("Rating Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Rating />);
  });

  it("renders a container div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
  it("renders a label element with some text", () => {
    const label = wrapper.find("label");

    // check the label exists
    expect(label.length).toEqual(1);
    // check there is some text inside
    expect(label.text().length).toBeGreaterThan(1);
  });
});
