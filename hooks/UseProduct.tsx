import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import { Dish } from "../utils/types/Dish";

const UseProduct = () => {
  const { productState, Agregar } = useContext(StoreContext);
  const { products } = productState;

  return {
    products: products,
    Agregar,
  };
};

export default UseProduct;
