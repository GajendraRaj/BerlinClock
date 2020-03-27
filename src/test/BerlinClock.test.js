import React from "react";
import { shallow } from "enzyme";
import BerlinClock from "../component/BerlinClock";

describe("BerlinClock component", () => {
  it("Should display Y in even second value", () => {
    const wrapper = shallow(<BerlinClock time={"15:33:12"} />);
    expect(wrapper.find("div").text()).toBe("Y");
  });

  it("Should display O in odd second value", () => {
    const wrapper = shallow(<BerlinClock time={"15:33:13"} />);
    expect(wrapper.find("div").text()).toBe("O");
  });
});
