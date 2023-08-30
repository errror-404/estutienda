import { Button, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Dashboard</Text>
      <Button title="Cart" onPress={() => navigation.navigate("Cart")} />
    </View>
  );
};

export default Dashboard;
