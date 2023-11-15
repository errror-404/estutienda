import React, { createContext, useReducer } from "react";
import { ProductState } from "../interfaces/interfaces";
import { Dish } from "../utils/types/Dish";
import { StoreReducer } from "./StoreReducer";

interface Props {
  children: React.ReactNode;
}
const initial: ProductState = {
  products: [],
};
type global = {
  productState: ProductState;
  Agregar: (nuevo: Dish) => void;
  Eliminar: (nuevo: Dish) => void;
};

const StoreContext = createContext<global>({} as global);

interface Props {
  children: React.ReactNode;
}
const StoreProvider = ({ children }: Props) => {
  const [productState, dispatch] = useReducer(StoreReducer, initial);
  const Agregar = (nuevo: Dish) => {
    dispatch({
      type: "AddProduct",
      paylod: nuevo,
    });
  };
  const Eliminar = (nuevo: Dish) => {
    dispatch({
      type: "Delete",
      paylod: nuevo,
    });
  };
  return (
    <StoreContext.Provider value={{ productState, Agregar, Eliminar }}>
      {children}
    </StoreContext.Provider>
  );
};
export { StoreContext };
export default StoreProvider;
