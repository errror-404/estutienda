import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import CustomCard from "../components/CustomCard";
import { Dish } from "../utils/types/Dish";
import DashboardHeader from "../components/DashboardHeader";
import { useNavigation } from "@react-navigation/native";
import { RoutesProps } from "../utils/types/Navigatetype";

const Dashboard = () => {
  const navigation = useNavigation<RoutesProps>();

  const mockedItem: Dish[] = [
    {
      id: 1,
      image:
        "https://chedrauimx.vtexassets.com/arquivos/ids/16650816-800-auto?v=638253929464470000&width=800&height=auto&aspect=true",
      title: "Articulo 1",
      description: "descripcion",
      price: 100,
    },
    {
      id: 2,
      image:
        "https://chedrauimx.vtexassets.com/arquivos/ids/16650816-800-auto?v=638253929464470000&width=800&height=auto&aspect=true",
      title: "Articulo 2",
      description: "descripcion 2",
      price: 200,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={({ item }) => (
          <CustomCard
            dish={item}
            onPress={() => navigation.navigate("DishDetail", { dish: item })}
          />
        )}
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
