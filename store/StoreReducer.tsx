import { ProductState } from "../interfaces/interfaces";
import { Dish } from "../utils/types/Dish";
type ProductAction =
  | { type: "AddProduct"; paylod: Dish }
  | { type: "Delete"; paylod: Dish };

export const StoreReducer = (
  state: ProductState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case "AddProduct":
      const i = state.products.findIndex(
        (item) => item.id === action.paylod.id
      );

      i >= 0 ? (state.products[i].units += 1) : null;

      return {
        ...state,
        products:
          i >= 0 ? [...state.products] : [...state.products, action.paylod],
      };

    case "Delete":
      const d = state.products.findIndex(
        (item) => item.id === action.paylod.id
      );

      state.products[d].units > 1
        ? (state.products[d].units -= 1)
        : state.products.splice(d, 1);

      return {
        ...state,
        products: [...state.products],
      };

    default:
      return state;
  }
};
