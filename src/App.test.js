import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

it("renders correctly", () => {
  const tree = shallow(<App />);
  expect(toJson(tree)).toMatchSnapshot();
});




