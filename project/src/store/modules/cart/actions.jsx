export const addProductToCartRequest = (product) => {
  return {
    type: "ADD_PRODUCT_TO_CART_REQUEST",
    payload: { product },
  };
};

export const addProductToCartSuccess = (product) => {
  return {
    type: "ADD_PRODUCT_TO_CART_SUCCESS",
    payload: { product },
  };
};

export const addProductToCartFailure = (productID) => {
  return {
    type: "ADD_PRODUCT_TO_CART_FAILURE",
    payload: { productID },
  };
};
