import React from "react";
import { ProductState } from "../interfaces/interfaces";
import { Dish } from "../utils/types/Dish";

export const initialstore: Dish[] = [];

type ProductAction = { type: "AddProduct"; paylod: Dish };
export default function StoreReducer(
  state: ProductState,
  action: ProductAction
): ProductState {
  switch (action.type) {
    case "AddProduct":
      return {
        ...state,
        products: [...state.products, action.paylod],
      };
    default:
      return state;
  }
}
