/* eslint-disable no-case-declarations */
// https://dummyjson.com/products
// {
//   id: 1,
//   title: "iPhone 9",
//   description: "An apple mobile which is nothing like apple",
//   price: 549,
//   discountPercentage: 12.96,
//   rating: 4.69,
//   stock: 94,
//   brand: "Apple",
//   category: "smartphones",
//   thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//   images: [
//     "https://i.dummyjson.com/data/products/1/1.jpg",
//     "https://i.dummyjson.com/data/products/1/2.jpg",
//     "https://i.dummyjson.com/data/products/1/3.jpg",
//     "https://i.dummyjson.com/data/products/1/4.jpg",
//     "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//   ],
// },

const INITIAL_STATE = {
  products: [],
  stock: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  //console.log(state, action);
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      const { product } = action.payload;
      // check if the product already exists
      const productIndex = state.products.findIndex(
        (item) => item.id === product.id
      );
      // is yes, increase quantity
      if (productIndex !== -1) {
        // Item already exists in the cart, update the quantity
        const updatedItems = [...state.products];
        updatedItems[productIndex].quantity++;
        return {
          ...state,
          products: updatedItems,
        };
      } else {
        // Item does not exist in the cart, add it
        return {
          ...state,
          products: [...state.products, product],
        };
        //ps.: always return the prev value, if you want reducer to consider it - also to avoid errors
      }

    case "UPDATE_STOCK_LIST":
      const { list } = action.payload;
      return {
        ...state,
        stock: [...state.stock, list],
      };

    default:
      return INITIAL_STATE;
  }
};
