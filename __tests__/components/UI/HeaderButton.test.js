import React from "react";
import HeaderButton from "../../../components/UI/HeaderButton";
import renderer from "react-test-renderer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

describe("HeaderButton component tests", () => {
  test("HeaderButton component renders correctly", () => {
    const tree = renderer
      .create(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Add Place" />
        </HeaderButtons>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
