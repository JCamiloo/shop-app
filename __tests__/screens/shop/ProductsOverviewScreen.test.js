import "react-native";
import React from "react";
import ProductsOverviewScreen from "../../../screens/shop/ProductsOverviewScreen";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

describe("ProductsOverviewScreen tests", () => {
  test("ProductsOverviewScreen renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ProductsOverviewScreen navigation={{ getParam: jest.fn() }} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
