import { Text, View, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Navigation, RoutesProps } from "../utils/types/Navigatetype";
import CustomButton from "../components/CustomButton";
import UseProduct from "../hooks/UseProduct";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";

type Props = NativeStackScreenProps<Navigation, "DishDetail", "Cart">;

const DishDetail = ({ route }: Props) => {
  const { dish } = route.params;
  const navigation = useNavigation<RoutesProps>();
  const { Agregar } = UseProduct();

  const agregarProducto = () => {
    getAuth()
      .currentUser?.getIdTokenResult()
      .then((idTokenResult) => {
        console.log(idTokenResult.claims.sub);
        navigation.navigate("Cart");
      })
      .catch((error) => {
        console.log(error);
      });
    Agregar(dish);
  };

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
        Detalles del producto
      </Text>
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
          paddingBottom: 40,
        }}
      >
        <Image
          source={{
            uri: dish.image,
          }}
          style={styles.image}
        />
      </View>

      <View style={{ margin: 16 }}>
        <Text style={styles.title}>{dish.title}</Text>
        <Text>${dish.price}</Text>
        <CustomButton
          title="Agregar"
          variant="filled"
          onPress={() => agregarProducto()}
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
  image: {
    height: 180,
    width: 380,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 24,
  },
});

export default DishDetail;
