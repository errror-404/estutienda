import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesion</Text>
      <TextInput style={styles.textInput} placeholder="Correo electronico" />
      <TextInput style={styles.textInput} placeholder="Contraseña" />
      <CustomButton
        title="Login"
        variant="outlined"
        onPress={() => navigation.navigate("HomeStack")}
      />
      <CustomButton
        title="Register"
        variant="filled"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    marginBottom: 12,
  },
  textInput: {
    borderColor: "#eee",
    borderWidth: 1,
    padding: 6,
    borderRadius: 6,
    width: 300,
    marginBottom: 12,
  },
});
