import { FlatList, View, Text } from "react-native";
import React from "react";
import CustomChip from "../components/CustomChip";
import { StyleSheet } from "react-native";

const DashboardHeader = () => {
  const mockedArray = ["Gomitas", "Chocolates", "Galletas"];
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.subtitle, paddingBottom: 0 }}>Categorias</Text>
      <FlatList
        data={mockedArray}
        renderItem={({ item }) => <CustomChip title={item} />}
        horizontal={true}
      />
      <Text style={styles.subtitle}>Favoritos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  subtitle: {
    padding: 8,
    paddingBottom: 20,
    fontSize: 18,
  },
});

export default DashboardHeader;
