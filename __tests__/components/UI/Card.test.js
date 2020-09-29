import React from "react";
import Card from "../../../components/UI/Card";
import renderer from "react-test-renderer";

describe("Card component tests", () => {
  test("Card component renders correctly", () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
