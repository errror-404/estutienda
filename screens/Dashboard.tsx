import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Dish, Restaurtants } from "../utils/types/Dish";
import DashboardHeader from "../components/DashboardHeader";
import { useNavigation } from "@react-navigation/native";
import { RoutesProps } from "../utils/types/Navigatetype";
import { database } from "../firebaseConfig";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import CustomCardRestaurants from "../components/CustomCardRestaurants";

const Dashboard = () => {
  const navigation = useNavigation<RoutesProps>();
  const [Restaurants, Setsuplement] = useState<Restaurtants[]>();

  useEffect(() => {
    const collectref = collection(database, "/restaurants");
    const q = query(collectref, orderBy("name", "desc"));

    const unscribe = onSnapshot(q, (querySnapshot) => {
      const data: Restaurtants[] = querySnapshot.docs.map((doc) => ({
        restid: doc.id,
        name: doc.data().name,
        image: doc.data().image,
      }));
      Setsuplement(data);
    });
    return unscribe;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={({ item }) => (
          <>
            <CustomCardRestaurants
              dish={item}
              onPress={() =>
                navigation.navigate("Dishes", { Restaurant: item })
              }
            />
          </>
        )}
        data={Restaurants}
        numColumns={1}
        ListHeaderComponent={() => <DashboardHeader />}
      />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFfe",
  },
});
