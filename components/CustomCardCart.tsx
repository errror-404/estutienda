import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { Dish } from "../utils/types/Dish";
import UseProduct from "../hooks/UseProduct";

interface CustomCardProps extends ViewStyle {
  dish: Dish;
}

const CustomCardCard = ({ dish, ...rest }: CustomCardProps) => {
  const { Agregar, Eliminar } = UseProduct();

  return (
    <View style={styles.container} {...rest}>
      <View>
        <Image
          source={{
            uri: dish?.image,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{dish?.title}</Text>
        <Text style={styles.subtitle}>{dish?.title}</Text>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonSubContainer}>
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: "#D9D9D9" }}
              onPress={() => Eliminar(dish)}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={{ ...styles.quantityText }}> {dish?.units}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Agregar(dish)}
            >
              <Text style={{ ...styles.buttonText, color: "white" }}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.price}> Precio: ${dish?.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomCardCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  image: {
    marginHorizontal: 15,
    borderRadius: 8,
    height: 90,
    width: 90,
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "300",
    marginVertical: 2,
  },
  price: {
    color: "#fcb126",
    marginLeft: 24,
  },
  button: {
    justifyContent: "center",
    width: 30,
    height: 30,
    backgroundColor: "#5C5C5C",
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonSubContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 8,
  },
});
