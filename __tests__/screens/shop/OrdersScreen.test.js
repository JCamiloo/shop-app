import "react-native";
import React from "react";
import OrdersScreen from "../../../screens/shop/OrdersScreen";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

describe("OrdersScreen tests", () => {
  test("OrdersScreen renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <OrdersScreen navigation={{ getParam: jest.fn() }} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
