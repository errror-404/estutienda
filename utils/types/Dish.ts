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
}
export interface User {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
  units: number;
}
export interface Basket {
  units: number;
  id: string;
  idproduct: string;
  iduser: string;
}
