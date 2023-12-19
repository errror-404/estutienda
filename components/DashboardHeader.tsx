import { FlatList, View, Text } from "react-native";
import React from "react";
import CustomChip from "../components/CustomChip";
import { StyleSheet } from "react-native";

const DashboardHeader = () => {
  const mockedArray = [
    { name: "comida", imagen: require("../img/comida.png") },
    { name: "postre", imagen: require("../img/postre.png") },
    { name: "bebida", imagen: require("../img/bebida.png") },
    { name: "vino", imagen: require("../img/vino.png") },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <FlatList
        data={mockedArray}
        renderItem={({ item }) => (
          <CustomChip title={item.name} image={item.imagen} />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    marginBottom: 50,
  },
  title: {
    marginVertical: 16,
    padding: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DashboardHeader;
