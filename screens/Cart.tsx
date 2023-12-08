import { FlatList, View, StyleSheet, Text } from "react-native";
import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import CustomCardCard from "../components/CustomCardCart";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { RoutesProps } from "../utils/types/Navigatetype";

const Cart = () => {
  const { productState } = useContext(StoreContext);

  const { navigate } = useNavigation<RoutesProps>();

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={({ item }) => <CustomCardCard dish={item} />}
        data={productState.products}
        ListFooterComponent={() => (
          <>
            {productState.products.length === 0 ? (
              <Text style={styles.emptyStateText}>
                No hay productos en el carrito
              </Text>
            ) : (
              <View style={styles.buttonContainer}>
                <CustomButton
                  variant="outlined"
                  title="Pagar"
                  size="large"
                  onPress={() => navigate("PaymentScreen")}
                />
              </View>
            )}
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    margin: 30,
  },
  subtitle: {
    padding: 8,
    paddingBottom: 20,
    fontSize: 18,
  },
  emptyStateText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
  },
  buttonContainer: {
    marginTop: 24,
    paddingRight: 20,
  },
});
export default Cart;
