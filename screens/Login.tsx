import { StyleSheet, Text, View } from "react-native";
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
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Iniciar Sesion</Text>
        <View>
          <CustomTextInput
            onChangeText={(value) => setEmail(value)}
            placeholder="Correo electronico"
          />
          <CustomTextInput
            onChangeText={(text) => setPassword(text)}
            placeholder="Contraseña"
          />
          <CustomButton title="¿Olvidaste tu contraseña?" variant="link" />
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
