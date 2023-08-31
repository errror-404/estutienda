import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import CustomCard from "../components/CustomCard";
import { Dish } from "../utils/types/Dish";
import DashboardHeader from "../components/DashboardHeader";

const Dashboard = () => {
  const mockedItem: Dish[] = [
    {
      id: 1,
      title: "Articulo 1",
      description: "descripcion",
      price: 100,
    },
    {
      id: 2,
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
        numColumns={2}
        ListHeaderComponent={() => <DashboardHeader />}
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
