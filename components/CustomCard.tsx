import { StyleSheet, Text, View, ViewProps } from "react-native";
import React from "react";
import { Dish } from "../utils/types/Dish";

interface CustomCardProps extends ViewProps {
  dish?: Dish;
}

const CustomCard = ({ dish }: CustomCardProps) => {
  return (
    <View style={styles.container}>
      <Text>{dish?.title}</Text>
      <Text>{dish?.description}</Text>
      <Text>{dish?.price}</Text>
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
  },
});
