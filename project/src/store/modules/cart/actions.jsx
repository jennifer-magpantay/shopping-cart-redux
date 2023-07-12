export const addProductToCart = (product) => {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: { product },
  };
};

export const updateStockList = (list) => {
  return {
    type: "UPDATE_STOCK_LIST",
    payload: { list },
  };
};
