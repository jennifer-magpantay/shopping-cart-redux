import React from "react";
import { Catalog } from "./components/Catalog";
import { Cart } from "./components/Cart";

export const App = () => {
  return (
    <div>
      <Cart />
      <Catalog />
    </div>
  );
};
