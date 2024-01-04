import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Dish, Restaurtants } from "./Dish";

export type Navigation = {
  Home: undefined;
  Dishes: { Restaurant: Restaurtants };
  HomeStack: undefined;
  Register: undefined;
  Cart: undefined;
  Checkout: undefined;
  DishDetail: {
    dish: Dish;
  };
};

export type RoutesProps = NativeStackNavigationProp<Navigation>;
