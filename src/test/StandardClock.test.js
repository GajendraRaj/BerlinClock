import React from "react";
import { shallow } from "enzyme";
import StandardClock from "../component/StandardClock";

describe("StandardClock component", () => {
  const wrapper = shallow(<StandardClock time={"15:33:12"} />);

  test("Should display the time in hh:mm:ss format", () => {
    expect(wrapper.find("div").text()).toBe("15:33:12");
  });
});
