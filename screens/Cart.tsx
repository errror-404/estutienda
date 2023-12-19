import { FlatList, View, StyleSheet, Text } from "react-native";
import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import CustomCardCard from "../components/CustomCardCart";
import { RoutesProps } from "../utils/types/Navigatetype";

const Cart = () => {
  const { productState } = useContext(StoreContext);
  const navigation = useNavigation();

  const { navigate } = useNavigation<RoutesProps>();

  return (
    <View style={styles.container}>
      <View style={{ left: 20, top: 50 }}>
        <CustomButton
          title="< Back"
          variant="link"
          onPress={() => navigation.goBack()}
        />
      </View>
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
      <View
        style={{ justifyContent: "center", alignItems: "center", bottom: 10 }}
      >
        <CustomButton title="Continuar" variant="filled" onPress={() => {}} />
      </View>
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
