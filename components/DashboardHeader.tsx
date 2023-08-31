import { FlatList } from "react-native";
import React from "react";
import CustomChip from "../components/CustomChip";

const DashboardHeader = () => {
  const mockedArray = ["Gomitas", "Chocolates", "Galletas"];
  return (
    <FlatList
      data={mockedArray}
      renderItem={({ item }) => <CustomChip title={item} />}
      horizontal={true}
    />
  );
};

export default DashboardHeader;
