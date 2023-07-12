import { combineReducers } from "redux";
import { cartReducer } from "./cart/reducer";

export const rootReducers = combineReducers({
  cart: cartReducer,
});
