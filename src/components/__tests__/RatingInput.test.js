import React from "react";
import { shallow } from "enzyme";

import { RatingInput } from "../RatingInput";

describe("RatingInput component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RatingInput />);
  });
  it("returns an input element", () => {
    expect(wrapper.find("input").length).toEqual(1);
  });
  it("returns an input with the passed in value", () => {
    wrapper.setProps({ value: 2 });
    expect(wrapper.find("input").props().value).toEqual(2);
  });
  it("fires the passed in function onChange, passing the selected value as an argument", () => {
    const mockHandleFunction = jest.fn();
    wrapper.setProps({ handleChange: mockHandleFunction });

    wrapper
      .find("input")
      .simulate("change", { target: { value: "test value" } });

    expect(mockHandleFunction).toHaveBeenCalledTimes(1);
    // inspect the argument passed in our mock function call
    expect(mockHandleFunction.mock.calls[0][0]).toEqual("test value");
  });
});
