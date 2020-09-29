import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as fromOrdersActions from "../../../store/actions/orders";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  const initialState = {
    orders: [],
  };

  it("should dispatch actions of ConstantA and ConstantB", () => {
    const expectedActions = [
      { type: fromOrdersActions.SET_ORDERS, payload: "b" },
    ];

    const store = mockStore(initialState);
    store.dispatch(fromOrdersActions.fetchOrders);

    expect(store.getActions()).toEqual(expectedActions);
  });
});
