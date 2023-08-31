import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Dish } from "./Dish";

export type Navigation = {
  HomeStack: undefined;
  Register: undefined;
  Cart: undefined;
  DishDetail: {
    dish: Dish;
  };
};

export type RoutesProps = NativeStackNavigationProp<Navigation>;
