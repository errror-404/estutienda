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

const CustomCardCheck = ({ dish, ...rest }: CustomCardProps) => {
  return (
    <View style={styles.container}>
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
      </View>
    </View>
  );
};

export default CustomCardCheck;

const styles = StyleSheet.create({
  container: {
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
