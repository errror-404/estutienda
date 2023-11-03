import React, { createContext, useReducer } from "react";
import StoreReducer from "./StoreReducer";
import { ProductState } from "../interfaces/interfaces";
import UseProduct from "../hooks/useProduct";
import { Dish } from "../utils/types/Dish";

interface Props {
  children: React.ReactNode;
}
const initial: ProductState = {
  products: [],
};
type global = {
  productState: ProductState;
  Agregar: (nuevo: Dish) => void;
};

const StoreContext = createContext<global>({} as global);

interface Props {
  children: React.ReactNode;
}
const StoreProvider = ({ children }: Props) => {
  const [productState, dispatch] = useReducer(StoreReducer, initial);
  const Agregar = (nuevo: Dish) => {
    dispatch({ type: "AddProduct", paylod: nuevo });
  };

  return (
    <StoreContext.Provider value={{ productState, Agregar }}>
      {children}
    </StoreContext.Provider>
  );
};
export { StoreContext };
export default StoreProvider;
