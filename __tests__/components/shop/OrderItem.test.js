import React from "react";
import OrderItem from "../../../components/shop/OrderItem";
import renderer from "react-test-renderer";

describe("OrderItem component tests", () => {
  test("OrderItem component renders correctly", () => {
    const tree = renderer
      .create(<OrderItem navigation={{ getParam: jest.fn() }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
