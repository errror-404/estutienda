import {
  TouchableOpacityProps,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  variant: "outlined" | "filled";
}

const CustomButton = ({ title, variant, ...rest }: CustomButtonProps) => {
  return variant === "outlined" ? (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.containerFilled} {...rest}>
      <Text style={styles.titleFilled}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderColor: "#000",
    borderWidth: 1,
    width: 150,
    borderRadius: 6,
    marginTop: 10,
  },
  containerFilled: {
    backgroundColor: "#000",
    width: 150,
    borderRadius: 6,
    marginTop: 10,
    padding: 8,
  },
  titleFilled: { fontSize: 16, textAlign: "center", color: "white" },

  title: {
    fontSize: 16,
    textAlign: "center",
  },
});
