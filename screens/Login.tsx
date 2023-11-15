import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import { RoutesProps } from "../utils/types/Navigatetype";
import { auth, signInWithEmailAndPassword } from "../firebaseConfig";

export default function Login() {
  const navigation = useNavigation<RoutesProps>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const iniciosesion = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate("HomeStack");
      })
      .catch((error) => {
        const errorcode = error.code;
        const errorMessage = error.message;
        console.log(errorcode);
        errorcode === "auth/invalid-email"
          ? Alert.alert("Invalid User", "Contraseña o usario invalido", [
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ])
          : console.log();
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title2}>Sign in</Text>
      <View style={styles.container2}></View>
      <View style={styles.card}>
        <Text style={styles.title}>Logo</Text>
        <View style={styles.textInputContainers}>
          <CustomTextInput
            onChangeText={(value) => setEmail(value)}
            placeholder="Correo electronico"
          />
          <CustomTextInput
            onChangeText={(text) => setPassword(text)}
            placeholder="Contraseña"
            secureTextEntry

          />
          <CustomButton title="¿Olvidaste tu contraseña?" variant="link" style={styles.link}/>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Iniciar sesion"
            variant="outlined"
            onPress={() => iniciosesion()}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#92C5FC",
    textAlign: "left",
  },
  container2: {
    justifyContent: "flex-end",
  },
  textInputContainers:{
    marginVertical: 24,
   
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "center",
    top: 180,
    width: 425,
    borderRadius: 45,
  },
  title: {
    margin: 80,
    fontSize: 18,
    marginBottom: 12,
  },
  title2: {
    margin: 20,
    fontSize: 28,
    top: 180,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    marginBottom: 12,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    marginVertical:12
  },
  link:{
    marginTop:24
  },
  textInput:{
    
  }
});
