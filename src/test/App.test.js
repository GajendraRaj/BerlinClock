import React from "react";
import { shallow } from "enzyme";
import App from "../component/App";

describe("App component", () => {
  const wrapper = shallow(<App />);

  it("Should have the application title", () => {
    expect(wrapper.find("h1").text()).toEqual("The Berlin Clock");
  });

  it("Should render the StandardClock component", () => {
    expect(wrapper.find("StandardClock").length).toEqual(1);
  });

  it("Should render the BerlinClock component", () => {
    expect(wrapper.find("BerlinClock").length).toEqual(1);
  });
});
