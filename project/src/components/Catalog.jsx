import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  updateStockList,
} from "../store/modules/cart/actions";

import { api } from "../services/api";

export const Catalog = () => {
  const [catalog, setCatalog] = useState([]);
  const dispatch = useDispatch();

  // basic way to fetch data from server
  useEffect(() => {
    const fetchCatalogData = async () => {
      const response = await api.get("/products");
      const data = await response.data;

      if (data) {
        // add quantity prop to data objs
        const formatedData = data.map((item) => {
          const obj = { ...item, quantity: 1 };
          return obj;
        });
        setCatalog(formatedData);
        // update stock list
        const formatedDataStock = data.map((item) => {
          const stockObject = {
            id: item.id,
            quantity: item.stock,
          };
          return stockObject;
        });
        dispatch(updateStockList(formatedDataStock));
      }
    };
    fetchCatalogData();
  }, []);

  // passing the item as param on button event, will pass all info about the product item
  // there is no need to pass an event, get event.target.id and then find the correspondent id within catalog list
  const handleAddProductToCart = useCallback(
    (item) => {
      dispatch(addProductToCart(item));
    },
    [dispatch]
  );

  return (
    <div>
      Catalog
      {catalog ? (
        <ul>
          {catalog.map((item) => (
            <li key={item.id}>
              <span>{item.title}</span>
              <span>{item.description}</span>
              <span>{item.brand}</span>
              <span>{item.price}</span>
              <button
                type="button"
                onClick={() => handleAddProductToCart(item)}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};
