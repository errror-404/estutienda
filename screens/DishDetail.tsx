import { Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Navigation } from "../utils/types/Navigatetype";

type Props = NativeStackScreenProps<Navigation, "DishDetail">;

const DishDetail = ({ route }: Props) => {
  const { dish } = route.params;
  return (
    <View>
      <Text>{dish.title}</Text>
      <Text>{dish.description}</Text>
      <Text>{dish.price}</Text>
    </View>
  );
};

export default DishDetail;
