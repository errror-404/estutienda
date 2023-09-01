import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import Dashboard from "../screens/Dashboard";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import Orders from "../screens/Orders";
import { useNavigation } from "@react-navigation/native";
import { Navigation, RoutesProps } from "../utils/types/Navigatetype";
import DishDetail from "../screens/DishDetail";

const HomeStack = createNativeStackNavigator<Navigation>();

const DashboardNavigation = () => {
  const navigation = useNavigation<RoutesProps>();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Dashboard}
        options={{
          headerRight: () => (
            <AntDesign
              name="shoppingcart"
              size={24}
              color="black"
              onPress={() => navigation.navigate("Cart")}
            />
          ),
        }}
      />
      <HomeStack.Screen name="Cart" component={Cart} />
      <HomeStack.Screen name="DishDetail" component={DishDetail} />
    </HomeStack.Navigator>
  );
};
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={DashboardNavigation}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
