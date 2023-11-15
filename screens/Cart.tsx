import { FlatList, View, StyleSheet, Text } from "react-native";
import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import CustomCardCar from "../components/CustomCardCar";

const Cart = () => {
  const { productState } = useContext(StoreContext);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 23,
          fontWeight: "bold",
          textAlign: "center",
          margin: 30,
        }}
      >
        {" "}
        Carrito
      </Text>
      <FlatList
        renderItem={({ item }) => (
          <>
            <CustomCardCar dish={item} />
          </>
        )}
        data={productState.products}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: "white",
  },
  subtitle: {
    padding: 8,
    paddingBottom: 20,
    fontSize: 18,
  },
});
export default Cart;
