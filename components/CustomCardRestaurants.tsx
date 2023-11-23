import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageSourcePropType,
  View,
} from "react-native";
import React from "react";
import { Dish, Restaurtants } from "../utils/types/Dish";

interface CustomChipProps extends TouchableOpacityProps {
  dish?: Restaurtants;
}

const CustomCardRestaurants = ({ dish, ...rest }: CustomChipProps) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View>
        <Image
          style={styles.image}
          source={
            dish?.image != ""
              ? { uri: dish?.image }
              : {
                  uri: "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg",
                }
          }
        />
      </View>
      <Text style={styles.title}>{dish?.name}</Text>
    </TouchableOpacity>
  );
};

export default CustomCardRestaurants;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    maxwidth: 800,
    maxheight: 180,
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
});
