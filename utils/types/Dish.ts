export interface Dish {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
  units: number;
  idrestaurant?: string;
}
export interface Restaurtants {
  restid: string;
  name: string;
  image: string;
  stripeCustomerId: string;
}
export interface User {
  id: string;
  name: string;
  email: string;
}
export interface Basket {
  units: number;
  id: string;
  idproduct: string;
  iduser: string;
}
