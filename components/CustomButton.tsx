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
}

const CustomButton = ({ title, variant, ...rest }: CustomButtonProps) => {
  return variant === "outlined" ? (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  ) : variant === "filled" ? (
    <TouchableOpacity
      style={{ ...styles.container, backgroundColor: "black" }}
      {...rest}
    >
      <Text style={styles.titleFilled}>{title}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.linkContainer} {...rest}>
      <Text style={title == "< Back" ? styles.title2 : styles.title}>
        {title}
      </Text>
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
    margin: 10,
    height: 40,
  },

  titleFilled: { fontSize: 16, textAlign: "center", color: "white" },
  linkContainer: { marginVertical: 10 },
  title: {
    fontSize: 16,
    textAlign: "center",
    color: "#1f6feb",
  },
  title2: {
    fontSize: 18,
    color: "black",
  },
});
