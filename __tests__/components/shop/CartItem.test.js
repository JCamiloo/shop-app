import React from "react";
import CartItem from "../../../components/shop/CartItem";
import renderer from "react-test-renderer";

describe("CartItem component tests", () => {
  test("CartItem component renders correctly", () => {
    const tree = renderer
      .create(<CartItem navigation={{ getParam: jest.fn() }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
