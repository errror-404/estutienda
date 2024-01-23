import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Alert, FlatList, View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import { useStripe } from "@stripe/stripe-react-native";
import { StoreContext } from "../store/StoreProvider";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  documentId,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { database } from "../firebaseConfig";
import { Restaurtants, User } from "../utils/types/Dish";
import CustomCardCheck from "../components/CustomCardCheck";
import { getAuth } from "firebase/auth";
import UseProduct from "../hooks/UseProduct";
import { useNavigation } from "@react-navigation/native";
import { RoutesProps } from "../utils/types/Navigatetype";
import CustomTextInput from "../components/CustomTextInput";

export default function CheckoutScreen() {
  const { productState } = useContext(StoreContext);
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const [palco, setpalco] = useState<string>();
  const [asiento, setasiento] = useState<string>();
  const date = new Date();
  const { refresh } = UseProduct();
  const [user, Setuser] = useState<User>();
  const navigation = useNavigation<RoutesProps>();
  const [idres, setidres] = useState("");
  const API_URL = "http://localhost:3000/";
  const total = productState.products.map((e) => {
    const t = +e.price * e.units;
    return t;
  });
  onSnapshot(
    query(
      collection(database, "/restaurants"),
      where("restaurantId", "==", productState.products[0].idrestaurant)
    ),
    (querySnapshot) => {
      const data: Restaurtants[] = querySnapshot.docs.map((doc) => ({
        stripeCustomerId: doc.data().stripeCustomerId,
        restid: doc.id,
        name: doc.data().name,
        image: doc.data().image,
      }));
      setidres(data[0].stripeCustomerId);
    }
  );
  const obtenerDatos = async () => {
    const idTokenResult = await getAuth().currentUser?.getIdTokenResult();
    const collectref = collection(database, "/Users");
    const q = query(collectref, where("id", "==", idTokenResult?.claims.sub));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) =>
        Setuser({
          name: doc.data().name,
          email: doc.data().email,
          id: doc.data().id,
        })
      );
      return user;
    });
    console.log(user);
  };

  const onCheckout = async () => {
    await obtenerDatos();
    console.log(user?.name);
    const response = await fetch(`${API_URL}payments/intents`, {
      method: "POST",
      body: JSON.stringify({
        amount: total[0] * 100,
        destination: idres,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { paymentIntent, ephemeralKey, customer } = await response.json();
    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: "Jane Doe",
      },
    });
    if (!error) {
      setLoading(true);
    }

    const present = await presentPaymentSheet();

    if (present.error) {
      Alert.alert(`Error code: ${present.error.code}`, present.error.message);
      console.log(`Error code: ${present.error.code}`, present.error.message);
    } else {
      Alert.alert("Success", "Your order is confirmed!");
      onCreateOrder();
      navigation.popToTop();
    }
  };

  const onCreateOrder = async () => {
    getAuth()
      .currentUser?.getIdTokenResult()
      .then(async (idTokenResult) => {
        console.log(productState.products);
        addDoc(collection(database, "/orders"), {
          fecha: date.toLocaleDateString(),
          iduser: idTokenResult.claims.sub,
          active: true,
          products: productState.products,
          status: "pedido",
          palco: palco == null ? 0 : palco,
          asiento: asiento == null ? 0 : asiento,
          idrestaurant: productState.products[0].idrestaurant,
          total: total,
          pago: "Realizado",
          nameuser: user?.name,
          email: user?.email,
        });

        const collectref = collection(database, "/basket");

        const q = query(
          collectref,
          where("iduser", "==", idTokenResult.claims.sub)
        );

        const querySnapshot = getDocs(q);

        (await querySnapshot).forEach((r) => {
          const docRef = doc(database, "/basket", r.id);
          deleteDoc(docRef);
        });
        refresh();
      });
  };

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={({ item }) => (
          <>
            <CustomCardCheck dish={item} />
          </>
        )}
        data={productState.products}
      />
      <View style={styles.container2}>
        <CustomTextInput
          variant="secundary"
          placeholder="No. Palco"
          onChangeText={(e) => {
            setpalco(e);

            palco == "" ? setLoading(false) : setLoading(true);
          }}
        ></CustomTextInput>
        <View
          style={{
            alignItems: "center",
            margin: 20,
          }}
        >
          <Text style={styles.title}>o</Text>
        </View>
        <CustomTextInput
          variant="secundary"
          placeholder="No. Asiento"
          onChangeText={(e) => {
            setasiento(e);

            asiento == "" ? setLoading(false) : setLoading(true);
          }}
        ></CustomTextInput>
      </View>
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
          margin: 20,
        }}
      >
        <Text style={styles.title}>Total : {total}</Text>
      </View>
      <View
        style={{ justifyContent: "center", alignItems: "center", bottom: 10 }}
      >
        <CustomButton
          disabled={!loading}
          variant="filled"
          title="Checkout"
          onPress={() => onCheckout()}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFfe",
  },
  container2: {
    display: "flex",
    alignItems: "center",
    margin: 10,
  },
  title: {
    fontSize: 18,
  },
});
