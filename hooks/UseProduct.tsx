import { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";

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
