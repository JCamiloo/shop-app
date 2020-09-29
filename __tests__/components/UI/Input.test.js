import React from "react";
import Input from "../../../components/UI/Input";
import renderer from "react-test-renderer";

describe("Input component tests", () => {
  test("Input component renders correctly", () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
