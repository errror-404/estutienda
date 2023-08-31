import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigation from "./AuthNavigation";
import DashboardNavigation from "./DashboardNavigation";

const MainStack = createNativeStackNavigator();

const MainNavigation = () => {
  const isLoggedIn = true;
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <MainStack.Group>
          <MainStack.Screen
            name={"HomeStack"}
            component={DashboardNavigation}
          />
        </MainStack.Group>
      ) : (
        <MainStack.Group>
          <MainStack.Screen name={"authStack"} component={AuthNavigation} />
        </MainStack.Group>
      )}
    </MainStack.Navigator>
  );
};

export default MainNavigation;
