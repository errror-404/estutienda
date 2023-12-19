import { Text, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { database } from "../firebaseConfig";
import { User } from "../utils/types/Dish";

const auth = getAuth();
const Logout = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch(() => {});
};
const Profile = () => {
  const navigation = useNavigation();
  const [user, Setuser] = useState<User>();
  const obtenerDatos = async () => {
    try {
      const idTokenResult = await getAuth().currentUser?.getIdTokenResult();
      const collectref = collection(database, "/Users");
      const q = query(collectref, where("id", "==", idTokenResult?.claims.sub));
      onSnapshot(q, (querySnapshot) => {
        console.log(querySnapshot.size);
        querySnapshot.docs.map((doc) =>
          Setuser({
            name: doc.data().name,
            email: doc.data().email,
            id: doc.data().id,
          })
        );
        console.log(user);
      });
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  obtenerDatos();

  return (
    <View style={styles.container}>
      <View style={{ margin: 20, top: 30 }}>
        <CustomButton
          title="< Back"
          variant="link"
          onPress={() => navigation.goBack()}
        />
      </View>

      <Text style={styles.title2}>Hola {user?.name}</Text>
      <View style={styles.card}>
        <View style={styles.textInputContainers}>
          <CustomButton
            title="Log out"
            variant="filled"
            onPress={() => Logout()}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;

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
