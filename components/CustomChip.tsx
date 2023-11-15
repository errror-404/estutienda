import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";

interface CustomChipProps extends TouchableOpacityProps {
  title: string;
  image: ImageSourcePropType;
}

const CustomChip = ({ title, image }: CustomChipProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.titlle}>{title}</Text>
      <Image style={styles.image} source={image} />
    </TouchableOpacity>
  );
};

export default CustomChip;

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: 90,
    borderRadius: 60,
    padding: 8,
    marginVertical: 16,
    marginRight: 20,
    backgroundColor: "#BDBDBD",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  titlle: {
    textAlign: "center",
  },
  image: {
    height: 50,
    width: 50,
  },
});
