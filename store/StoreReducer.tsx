import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "../firebaseConfig";
import { ProductState } from "../interfaces/interfaces";
import { Dish, Basket } from "../utils/types/Dish";
type ProductAction =
  | { type: "AddProduct"; paylod: Dish }
  | { type: "Delete"; paylod: Dish }
  | { type: "refresh" };

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

      i >= 0
        ? getAuth()
            .currentUser?.getIdTokenResult()
            .then(async (idTokenResult) => {
              const collectref = collection(database, "/basket");
              const q = query(
                collectref,
                where("idproduct", "==", state.products[i].id),
                where("iduser", "==", idTokenResult.claims.sub)
              );
              const querySnapshot = getDocs(q);

              (await querySnapshot).forEach((r) => {
                const docRef = doc(database, "/basket", r.id);
                updateDoc(docRef, {
                  units: state.products[i].units,
                });
              });
            })
        : getAuth()
            .currentUser?.getIdTokenResult()
            .then((idTokenResult) => {
              addDoc(collection(database, "/basket"), {
                iduser: idTokenResult.claims.sub,
                idproduct: action.paylod.id,
                units: 1,
                idrestaurant: action.paylod.idrestaurant,
              });
            });

      return {
        ...state,
        products:
          i >= 0 ? [...state.products] : [...state.products, action.paylod],
      };

    case "Delete":
      const d = state.products.findIndex(
        (item) => item.id === action.paylod.id
      );
      const update = () => {
        state.products[d].units -= 1;
        getAuth()
          .currentUser?.getIdTokenResult()
          .then(async (idTokenResult) => {
            const collectref = collection(database, "/basket");
            const q = query(
              collectref,
              where("idproduct", "==", action.paylod.id),
              where("iduser", "==", idTokenResult.claims.sub)
            );

            const querySnapshot = getDocs(q);

            (await querySnapshot).forEach((r) => {
              const docRef = doc(database, "/basket", r.id);
              updateDoc(docRef, {
                units: state.products[d].units,
              });
            });
          });
      };
      const delet = () => {
        state.products.splice(d, 1);
        getAuth()
          .currentUser?.getIdTokenResult()
          .then(async (idTokenResult) => {
            const collectref = collection(database, "/basket");
            const q = query(
              collectref,
              where("idproduct", "==", action.paylod.id),
              where("iduser", "==", idTokenResult.claims.sub)
            );

            const querySnapshot = getDocs(q);

            (await querySnapshot).forEach((r) => {
              const docRef = doc(database, "/basket", r.id);
              deleteDoc(docRef);
            });
          });
      };
      state.products[d].units > 1 ? update() : delet();
      return {
        ...state,
        products: [...state.products],
      };

    default:
      console.log("paso");
      return {
        ...state,
        products: [],
      };
  }
};
