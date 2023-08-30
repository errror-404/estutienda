import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigation from "./AuthNavigation";
import DashboardNavigation from "./DashboardNavigation";

const MainStack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={"authStack"} component={AuthNavigation} />
      <MainStack.Screen name={"HomeStack"} component={DashboardNavigation} />
    </MainStack.Navigator>
  );
};

export default MainNavigation;
