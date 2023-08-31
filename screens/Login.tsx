import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Iniciar Sesion</Text>
        <View>
          <CustomTextInput placeholder="Correo electronico" />
          <CustomTextInput placeholder="Contraseña" />
          <CustomButton title="¿Olvidaste tu contraseña?" variant="link" />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Iniciar sesion"
            variant="outlined"
            onPress={() => navigation.navigate("HomeStack")}
          />
          <CustomButton
            title="Registrarse"
            variant="filled"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </View>
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
  card: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    maxHeight: 500,
  },
  title: {
    fontSize: 18,
    marginBottom: 12,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row",
  },
});
