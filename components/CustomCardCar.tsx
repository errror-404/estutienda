import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React from "react";
import { Dish } from "../utils/types/Dish";
import UseProduct from "../hooks/UseProduct";

interface CustomCardProps extends TouchableOpacityProps {
  dish: Dish;
}

const CustomCardCar = ({ dish, ...rest }: CustomCardProps) => {
  const { Agregar, products, Eliminar } = UseProduct();

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View>
        <Image
          source={{
            uri: dish?.image,
          }}
          style={styles.image}
        />
      </View>
      <View style={{ margin: 10 }}>
        <Text style={styles.title}>{dish?.title}</Text>
        <Text style={styles.price}>$ {dish?.price}</Text>
        <View style={{ display: "flex", flexDirection: "row", padding: 2 }}>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: "#D9D9D9" }}
            onPress={() => Eliminar(dish)}
          >
            <Text style={styles.title}>- </Text>
          </TouchableOpacity>
          <Text style={{ ...styles.title, padding: 4 }}> {dish?.units}</Text>
          <TouchableOpacity style={styles.button} onPress={() => Agregar(dish)}>
            <Text style={{ ...styles.title, color: "white" }}> +</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomCardCar;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: 800,
    height: 180,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
  },
  image: {
    margin: 15,
    borderRadius: 8,
    height: 150,
    width: 150,
  },
  textContainer: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlignVertical: "center",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "300",
    marginVertical: 2,
  },
  price: {
    color: "#fcb126",
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: "#5C5C5C",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});