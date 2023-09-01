import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React from "react";
import { Dish } from "../utils/types/Dish";

interface CustomCardProps extends TouchableOpacityProps {
  dish?: Dish;
}

const CustomCard = ({ dish, ...rest }: CustomCardProps) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image
        source={{
          uri: "https://chedrauimx.vtexassets.com/arquivos/ids/16650816-800-auto?v=638253929464470000&width=800&height=auto&aspect=true",
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{dish?.title}</Text>
        <Text style={styles.subtitle}>{dish?.description}</Text>
        <Text style={styles.price}>$ {dish?.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    maxWidth: 300,
    minHeight: 200,
    borderRadius: 8,
    marginHorizontal: 16,
  },
  image: {
    borderRadius: 8,
    height: 150,
  },
  textContainer: {
    flex: 1,
    padding: 8,
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
  },
});
