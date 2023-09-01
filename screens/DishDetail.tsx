import { Text, View, Image, StyleSheet } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Navigation } from "../utils/types/Navigatetype";
import CustomButton from "../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = NativeStackScreenProps<Navigation, "DishDetail">;

const DishDetail = ({ route }: Props) => {
  const { dish } = route.params;

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: dish.image,
          }}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>{dish.title}</Text>
      <Text>{dish.description}</Text>
      <Text>{dish.price}</Text>
      <View>
        <CustomButton
          title="Agregar"
          variant="filled"
          onPress={() => AsyncStorage.removeItem("isLoggedIn")}
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
    height: 300,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 24,
  },
});

export default DishDetail;
