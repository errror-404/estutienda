import { Text, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  database,
} from "../firebaseConfig";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const createuser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setDoc(doc(database, "/Users", userCredential.user.uid), {
          name: name,
          id: userCredential.user.uid,
          email: email,
          asiento: "",
        });
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
      <View style={{ margin: 20, top: 30 }}>
        <CustomButton
          title="< Back"
          variant="link"
          onPress={() => navigation.goBack()}
        />
      </View>

      <Text style={styles.title2}>Register</Text>
      <View style={styles.card}>
        <View style={styles.textInputContainers}>
          <CustomTextInput
            onChangeText={(value) => setName(value)}
            placeholder="Nombre"
            variant="secundary"
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
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#92C5FC",
    textAlign: "left",
  },
  container2: {
    justifyContent: "flex-end",
  },
  textInputContainers: {
    top: 100,
    marginVertical: 24,
    alignItems: "center",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    top: 150,
    width: 425,
    borderRadius: 45,
  },
  tinyLogo: {
    width: 400,
    height: 350,
  },

  title: {
    fontSize: 18,
    marginBottom: 12,
  },
  title2: {
    margin: 20,
    fontSize: 28,
    top: 150,
    fontWeight: "bold",
  },

  buttonContainer: {
    backgroundColor: "black",
    borderRadius: 100,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});
