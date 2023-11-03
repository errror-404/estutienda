import { FlatList, View, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import CustomCardCar from "../components/CustomCardCar";

const Cart = () => {
  const { productState } = useContext(StoreContext);
  console.log(productState.products);

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={({ item }) => (
          <>
            <CustomCardCar dish={item} />
          </>
        )}
        data={productState.products}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  subtitle: {
    padding: 8,
    paddingBottom: 20,
    fontSize: 18,
  },
});
export default Cart;
