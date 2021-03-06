import React from "react";
import { shallow, mount } from "enzyme";
import BerlinClock from "../component/BerlinClock";
import checkPropTypes from "check-prop-types";
import Seconds from "../component/Seconds";
import Hours from "../component/Hours";
import Minutes from "../component/Minutes";

describe("BerlinClock component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<BerlinClock time={"15:33:12"} />);
  });

  it("Should display Y in even second value", () => {
    const secondsWrapper = wrapper.find(Seconds);
    expect(secondsWrapper.props().seconds).toEqual("Y");
  });

  it("Should display O in odd second value", () => {
    const wrapper = shallow(<BerlinClock time={"15:33:13"} />);
    const secondsWrapper = wrapper.find(Seconds);
    expect(secondsWrapper.props().seconds).toEqual("O");
  });

  it("Should display hours prop value as ['RRRO', 'OOOO']' in hours component", () => {
    const hoursWrapper = wrapper.find(Hours);
    expect(hoursWrapper.props().hours).toEqual(["RRRO", "OOOO"]);
  });

  it("Should display minutes prop value as ['YYYYYYOOOOO', 'YYYO']' in minutes component", () => {
    const minutesWrapper = wrapper.find(Minutes);
    expect(minutesWrapper.props().minutes).toEqual(["YYYYYYOOOOO", "YYYO"]);
  });

  it("Should throw error message if there is no time prop", () => {
    const errorMsg =
      "Failed prop type: The prop `time` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      BerlinClock.propTypes,
      { time: undefined },
      "prop",
      BerlinClock.time
    );

    expect(result).toEqual(errorMsg);
  });

  it("Should throw error message if time prop type is not a string", () => {
    const errorMsg =
      "Failed prop type: Invalid prop `time` of type `number` supplied to `<<anonymous>>`, expected `string`.";

    const result = checkPropTypes(
      BerlinClock.propTypes,
      { time: 12 },
      "prop",
      BerlinClock.time
    );

    expect(result).toEqual(errorMsg);
  });
});
