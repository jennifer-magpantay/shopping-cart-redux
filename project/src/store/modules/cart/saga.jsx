import { call, select, takeLatest, put } from "redux-saga/effects";
import { api } from "../../../services/api";
import { addProductToCartFailure, addProductToCartSuccess } from "./actions";

// takeLeading => get the first action from an specific function
// takeLatest => get the lastest action from an specific function
// takeEvery =>get the all actions from an specific function

function* checkProductStock(action) {
  //console.log(action);
  const { product } = action.payload;
  // get the product quantity on products list
  const currentProductQuantity = yield select(
    (state) =>
      state.cart.products.some((item) => item.id === product.id).quantity || 0
  );
  //console.log(currentProductQuantity);
  const productAvailability = yield call(api.get, `/products/${product.id}`);
  const currentProductStock = productAvailability.data.stock;
  //console.log(currentProductStock);
  if (currentProductStock > currentProductQuantity) {
    yield put(addProductToCartSuccess(product));
    //console.log("adding to a cart");
  } else {
    yield put(addProductToCartFailure(product.id));
    //console.log("low stock");
  }
}

export default function* saga() {
  yield takeLatest("ADD_PRODUCT_TO_CART_REQUEST", checkProductStock);
}
