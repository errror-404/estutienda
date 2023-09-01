import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigation from "./AuthNavigation";
import DashboardNavigation from "./DashboardNavigation";
import { auth, onAuthStateChanged } from "../firebaseConfig";

const MainStack = createNativeStackNavigator();

const MainNavigation = () => {
  const [user, setUser] = useState("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user?.uid;
      setUser(uid);
    } else {
      setUser("");
    }
  });

  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      {user !== "" ? (
        <MainStack.Screen name={"HomeStack"} component={DashboardNavigation} />
      ) : (
        <MainStack.Screen name={"authStack"} component={AuthNavigation} />
      )}
    </MainStack.Navigator>
  );
};

export default MainNavigation;
