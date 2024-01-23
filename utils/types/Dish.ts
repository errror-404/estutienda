export interface Dish {
  id: string;
  image: string;
  name: string;
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
export interface Orders {
  active: boolean;
  id: string;
  iduser: string;
  products: Dish[];
  status: string;
  palco: string;
  asiento: string;
  idrestaurant: string;
}
