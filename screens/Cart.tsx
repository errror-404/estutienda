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
import { Navigation, RoutesProps } from "../utils/types/Navigatetype";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
type Props = NativeStackScreenProps<Navigation, "Cart", "Checkout">;

const Cart = ({ route }: Props) => {
  const { productState } = useContext(StoreContext);
  const navigation = useNavigation<RoutesProps>();

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
        renderItem={({ item }) => (
          <>
            <CustomCardCar dish={item} />
          </>
        )}
        data={productState.products}
      />
      <View
        style={{ justifyContent: "center", alignItems: "center", bottom: 10 }}
      >
        <CustomButton
          title="Continuar"
          variant="filled"
          onPress={() => {
            navigation.navigate("Checkout");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
