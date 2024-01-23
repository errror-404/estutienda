import { FlatList, Text, View } from "react-native";
import React, { useState } from "react";
import CustomCardCheck from "../components/CustomCardCheck";
import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  documentId,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { database } from "../firebaseConfig";
import { Orders } from "../utils/types/Dish";
import CustomCardOrder from "../components/CustomCardOrder";

const Orderss = () => {
  const [orders, setorder] = useState<Orders[]>();
  getAuth()
    .currentUser?.getIdTokenResult()
    .then(async (idTokenResult) => {
      onSnapshot(
        query(
          collection(database, "/orders"),
          where("iduser", "==", idTokenResult.claims.sub),
          where("active", "==", true)
        ),
        (querySnapshot) => {
          const data: Orders[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            iduser: doc.data().iduser,
            products: doc.data().products,
            active: doc.data().active,
            status: doc.data().status,
            palco: doc.data().palco,
            asiento: doc.data().asiento,
            idrestaurant: doc.data().idrestaurant,
          }));
          setorder(data);

          //          setinit(data);
        }
      );
    });

  return (
    <View>
      <FlatList
        renderItem={({ item }) => (
          <>
            <CustomCardOrder order={item} />
          </>
        )}
        data={orders}
      />
    </View>
  );
};

export default Orderss;
