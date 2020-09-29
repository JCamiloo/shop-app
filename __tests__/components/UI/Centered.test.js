import React from "react";
import Centered from "../../../components/UI/Centered";
import renderer from "react-test-renderer";

describe("Centered component tests", () => {
  test("Centered component renders correctly", () => {
    const tree = renderer.create(<Centered />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
