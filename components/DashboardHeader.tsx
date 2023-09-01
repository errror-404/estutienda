import { FlatList, View } from "react-native";
import React from "react";
import CustomChip from "../components/CustomChip";
import { StyleSheet } from "react-native";

const DashboardHeader = () => {
  const mockedArray = ["Gomitas", "Chocolates", "Galletas"];
  return (
    <View style={styles.container}>
      <FlatList
        data={mockedArray}
        renderItem={({ item }) => <CustomChip title={item} />}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
});

export default DashboardHeader;
