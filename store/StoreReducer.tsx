import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { database } from "../firebaseConfig";
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
      // eslint-disable-next-line no-case-declarations
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
      // eslint-disable-next-line no-case-declarations
      const d = state.products.findIndex(
        (item) => item.id === action.paylod.id
      );
      // eslint-disable-next-line no-case-declarations
      const update = () => {
        state.products[d].units -= 1;
        getAuth()
          .currentUser?.getIdTokenResult()
          .then(async (idTokenResult) => {
            const collectref = collection(database, "/basket");
            console.log(d);
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
      // eslint-disable-next-line no-case-declarations
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
      console.log("cont" + state.products[d].units);
      state.products[d].units > 1 ? update() : delet();
      return {
        ...state,
        products: [...state.products],
      };

    default:
      return state;
  }
};
