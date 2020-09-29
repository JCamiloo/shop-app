import "react-native";
import React from "react";
import CartScreen from "../../../screens/shop/CartScreen";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

describe("CartScreen tests", () => {
  test("CartScreen renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <CartScreen navigation={{ getParam: jest.fn() }} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
