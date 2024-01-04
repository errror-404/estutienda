import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { View } from "react-native";
import CustomButton from "../components/CustomButton";
import { useStripe } from "@stripe/stripe-react-native";
import { StoreContext } from "../store/StoreProvider";
import {
  collection,
  documentId,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { database } from "../firebaseConfig";
import { Restaurtants } from "../utils/types/Dish";

export default function CheckoutScreen() {
  const { productState } = useContext(StoreContext);
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const [idres, setidres] = useState<String>("");

  const API_URL = "http://localhost:3000/";
  const total = productState.products.map((e) => {
    const t = +e.price * e.units;
    return t;
  });
  onSnapshot(
    query(
      collection(database, "/restaurants"),
      where(documentId(), "==", productState.products[0].idrestaurant)
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

  const subscribe = async () => {
    console.log("si " + idres);

    const response = await fetch(`${API_URL}payments/intents`, {
      method: "POST",
      body: JSON.stringify({
        amount: total[0] * 100,
        destination: "acct_1LZS9jQqxFkDJ8Fl",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { paymentIntent, ephemeralKey, customer } = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };
  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer } = await subscribe();

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
  };

  return (
    <View>
      <CustomButton
        variant="outlined"
        title="Checkout"
        onPress={() => initializePaymentSheet()}
      />
    </View>
  );
}
