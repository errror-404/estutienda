import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import CustomCardCar from "../components/CustomCardCar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Navigation } from "../utils/types/Navigatetype";
import CustomButton from "../components/CustomButton";
type Props = NativeStackScreenProps<Navigation, "Cart">;

const Cart = ({ route }: Props) => {
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
      <View>
        <CustomButton title="Continuar" variant="filled" onPress={() => {}} />
      </View>
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
