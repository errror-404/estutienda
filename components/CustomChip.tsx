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
    borderColor: "black",
    borderWidth: 1,
    maxWidth: 100,
    borderRadius: 6,
    padding: 8,
    marginVertical: 16,
    marginLeft: 8,
    maxHeight: 36,
  },
  titlle: {
    textAlign: "center",
  },
});
