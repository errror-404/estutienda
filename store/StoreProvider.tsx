import { getAuth } from "firebase/auth";
import {
  collection,
  documentId,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { database } from "../firebaseConfig";
import { ProductState } from "../interfaces/interfaces";
import { Basket, Dish } from "../utils/types/Dish";
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
  const [init, setinit] = useState<Dish[]>([]);
  const obtenerDatos = async () => {
    try {
      const idTokenResult = await getAuth().currentUser?.getIdTokenResult();
      const collectref = collection(database, "/basket");
      const q = query(
        collectref,
        where("iduser", "==", idTokenResult?.claims.sub)
      );
      const querySnapshot = await getDocs(q);

      for (const r of querySnapshot.docs) {
        const idProduct: string = r.data().idproduct;
        const unit: number = r.data().units;

        onSnapshot(
          query(
            collection(database, "/supplements"),
            where(documentId(), "==", idProduct)
          ),
          (querySnapshot) => {
            const data: Dish[] = querySnapshot.docs.map((doc) => ({
              description: doc.data().category,
              title: doc.data().name,
              price: doc.data().scoops,
              id: doc.id,
              image: doc.data().image,
              units: unit,
              idrestaurant: doc.data().idrestaurant,
            }));
            setinit(data);
          }
        );
      }
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  obtenerDatos();
  initial.products = init;
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
