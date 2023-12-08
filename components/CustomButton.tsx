import {
  TouchableOpacityProps,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  variant: "outlined" | "filled" | "link";
  size?: "small" | "large";
}

const CustomButton = ({ title, variant, size, ...rest }: CustomButtonProps) => {
  return variant === "outlined" ? (
    <TouchableOpacity
      style={{ ...styles.container, width: size === "small" ? 150 : "100%" }}
      {...rest}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  ) : variant === "filled" ? (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: "black",
        width: size === "small" ? 150 : "100%",
      }}
      {...rest}
    >
      <Text style={styles.titleFilled}>{title}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={{
        ...styles.linkContainer,
        width: size === "small" ? 150 : "100%",
      }}
      {...rest}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 6,
    margin: 10,
    height: 40,
  },

  titleFilled: { fontSize: 16, textAlign: "center", color: "white" },
  linkContainer: { marginVertical: 10 },
  title: {
    fontSize: 16,
    textAlign: "center",
  },
});
