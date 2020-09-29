import React from "react";
import ProductItem from "../../../components/shop/ProductItem";
import renderer from "react-test-renderer";

describe("ProductItem component tests", () => {
  test("ProductItem component renders correctly", () => {
    const tree = renderer
      .create(<ProductItem navigation={{ getParam: jest.fn() }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
