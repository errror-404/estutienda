import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import { Dish } from "../utils/types/Dish";

const UseProduct = () => {
  const { productState, Agregar, Eliminar } = useContext(StoreContext);
  const { products } = productState;
  return {
    products: products,
    Agregar,
    Eliminar,
  };
};

export default UseProduct;
