import React from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import Dashboard from "../screens/Dashboard";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import Orders from "../screens/Orders";
import { useNavigation } from "@react-navigation/native";
import { Navigation, RoutesProps } from "../utils/types/Navigatetype";
import DishDetail from "../screens/DishDetail";
import StoreProvider from "../store/StoreProvider";
import { StyleSheet } from "react-native";
import DashDishes from "../screens/DashDishes";
import { getAuth } from "firebase/auth";

const HomeStack = createNativeStackNavigator<Navigation>();

const DashboardNavigation = () => {
  const navigation = useNavigation<RoutesProps>();

  return (
    <StoreProvider>
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
                style={styles.navbarIcon}
                onPress={() =>
                  getAuth()
                    .currentUser?.getIdTokenResult()
                    .then((idTokenResult) => {
                      console.log(idTokenResult.claims.sub);
                      navigation.navigate("Cart", {
                        userid: idTokenResult.claims.sub,
                      });
                    })
                    .catch((error) => {
                      console.log(error);
                    })
                }
              />
            ),
          }}
        />
        <HomeStack.Screen
          name="Dishes"
          component={DashDishes}
          options={{
            headerRight: () => (
              <AntDesign
                name="shoppingcart"
                size={24}
                color="black"
                style={styles.navbarIcon}
                onPress={() =>
                  getAuth()
                    .currentUser?.getIdTokenResult()
                    .then((idTokenResult) => {
                      console.log(idTokenResult.claims.sub);
                      navigation.navigate("Cart", {
                        userid: idTokenResult.claims.sub,
                      });
                    })
                    .catch((error) => {
                      console.log(error);
                    })
                }
              />
            ),
          }}
        />
        <HomeStack.Screen
          options={{
            headerShown: false,
          }}
          name="Cart"
          component={Cart}
        />
        <HomeStack.Screen name="DishDetail" component={DishDetail} />
      </HomeStack.Navigator>
    </StoreProvider>
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

const styles = StyleSheet.create({
  navbarIcon: {
    marginRight: 12,
  },
});

export default TabNavigator;
