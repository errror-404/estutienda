import { StyleSheet, TextInput } from "react-native";
import React from "react";
import { TextInputProps } from "react-native";

interface CustomTextInputProps extends TextInputProps {
  placeholder: string;
}

const CustomTextInput = ({ placeholder, ...rest }: CustomTextInputProps) => {
  return (
    <TextInput style={styles.textInput} placeholder={placeholder} {...rest} />
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
    marginBottom: 12,
    fontSize: 16,
  },
});
