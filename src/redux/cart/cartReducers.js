import { DELETE_ITEM, Get_CART_SUCCESS } from "./cart.acton.types";
let cart = [];
export const cartReducers = (state = cart, { type, payload }) => {
  switch (type) {
    case Get_CART_SUCCESS: {
      const exists = state.find((x) => x.id === payload.id);
      if (exists) {
        return state.map((item) =>
          item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [
          ...state,
          {
            ...payload,
            qty: 1,
            loading: false,
            error: true,
            success: false,
          },
        ];
      }
    }
    case DELETE_ITEM: {
      const exists1 = state.find((item) => item.id === payload.id);
      if (exists1.qty === 1) {
        return state.filter((item) => item.id !== exists1.id);
      } else {
        return state.map((item) =>
          item.id === payload.id ? { ...item, qty: item.qty - 1 } : item
        );
      }
    }
    default:
      return state;
  }
};
