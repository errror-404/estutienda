import { StyleSheet, TextInput } from "react-native";
import React from "react";
import { TextInputProps } from "react-native";

interface CustomTextInputProps extends TextInputProps {
  placeholder: string;
  variant?: "primary" | "secundary";
}

const CustomTextInput = ({
  placeholder,
  variant,
  ...rest
}: CustomTextInputProps) => {
  return (
    <TextInput
      style={
        variant === "secundary" ? styles.textInputregister : styles.textInput
      }
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#eee",
    borderWidth: 1,
    padding: 8,
    borderRadius: 6,
    width: 300,
    marginBottom: 24,
    fontSize: 16,
  },
  textInputregister: {
    borderColor: "#6C6A6A",
    borderWidth: 0.5,
    padding: 12,
    borderRadius: 40,
    maxWidth: 328,
    minWidth: 300,
    maxHeight: 58,
    minHeight: 50,
    marginBottom: 15,
    fontSize: 18,
  },
});
