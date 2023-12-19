import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../firebaseConfig";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const createuser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("User creado");
      })
      .catch((error) => {
        const errorCode = error.code;
        errorCode === "auth/weak-password"
          ? Alert.alert("Password", "Ingrese minimo 6 caracteres", [
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ])
          : errorCode === "auth/email-already-in-use"
          ? Alert.alert("User", "El correo ya esta registrado en una cuenta", [
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ])
          : null;
      });
  };

  return (
    <View style={styles.container}>
      <CustomButton
        title="<"
        variant="filled"
        onPress={() => navigation.goBack()}
      />
      <CustomTextInput
        onChangeText={(value) => setEmail(value)}
        placeholder="Correo electronico"
        variant="secundary"
      />
      <CustomTextInput
        onChangeText={(text) => setPassword(text)}
        placeholder="Contraseña"
        variant="secundary"
        secureTextEntry
      />
      <CustomTextInput
        onChangeText={(text) => setPassword(text)}
        placeholder="Confirmar contraseña"
        variant="secundary"
        secureTextEntry
      />
      <CustomButton
        title="Aceptar"
        variant="filled"
        onPress={() => createuser()}
      />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    width: 400,
    height: 350,
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
