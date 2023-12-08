import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Dish } from "./Dish";

export type Navigation = {
  Home: undefined;
  HomeStack: undefined;
  Register: undefined;
  Cart: undefined;
  PaymentScreen: undefined;
  DishDetail: {
    dish: Dish;
  };
};

export type RoutesProps = NativeStackNavigationProp<Navigation>;
