import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import CustomCard from "../components/CustomCard";
import { Dish } from "../utils/types/Dish";

const Dashboard = () => {
  const mockedItem: Dish[] = [
    {
      title: "Articulo 1",
      description: "descripcion",
      price: 100,
    },
    {
      title: "Articulo 1",
      description: "descripcion",
      price: 100,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        renderItem={({ item }) => <CustomCard dish={item} />}
        data={mockedItem}
      />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
