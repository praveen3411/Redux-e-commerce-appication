import { DELETE_ITEM, Get_CART_SUCCESS } from "./cart.acton.types";

export const addcartitem = (products) => {
  return {
    type: Get_CART_SUCCESS,
    payload: products,
  };
};

export const deleteCart = (products) => {
  return {
    type: DELETE_ITEM,
    payload: products,
  };
};
