import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { cartReducers } from "./cart/cartReducers";

let rootReducers = combineReducers({
  cart: cartReducers,
});
let composereducers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose();

export const store = legacy_createStore(
  rootReducers,
  composereducers(applyMiddleware(thunk))
);
