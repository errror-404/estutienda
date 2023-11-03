import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";

interface CustomChipProps extends TouchableOpacityProps {
  title: string;
}

const CustomChip = ({ title }: CustomChipProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.titlle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomChip;

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: 90,
    borderRadius: 60,
    padding: 8,
    marginVertical: 16,
    marginRight: 20,
    backgroundColor: "#BDBDBD",
  },
  titlle: {
    textAlign: "center",
  },
});
