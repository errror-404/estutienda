import { Text, View } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
const Logout = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};
const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
      <CustomButton title="Aceptar" variant="filled" onPress={() => Logout()} />
    </View>
  );
};

export default Profile;
