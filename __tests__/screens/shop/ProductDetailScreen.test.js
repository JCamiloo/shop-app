import "react-native";
import React from "react";
import ProductDetailScreen from "../../../screens/shop/ProductDetailScreen";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

describe("ProductDetailScreen tests", () => {
  test("ProductDetailScreen renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ProductDetailScreen navigation={{ getParam: jest.fn() }} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
