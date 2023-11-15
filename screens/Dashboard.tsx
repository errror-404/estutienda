import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CustomCard from "../components/CustomCard";
import { Dish } from "../utils/types/Dish";
import DashboardHeader from "../components/DashboardHeader";
import { useNavigation } from "@react-navigation/native";
import { RoutesProps } from "../utils/types/Navigatetype";
import { database } from "../firebaseConfig";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";


const Dashboard = () => {
  
  const navigation = useNavigation<RoutesProps>();
  const [mockedItem, Setsuplement] = useState<Dish[]>();

  useEffect(() => {
    const collectref = collection(database, "/supplements");
    const q = query(collectref, orderBy("name", "desc"));

    const unscribe = onSnapshot(q, (querySnapshot) => {
      const data: Dish[] = querySnapshot.docs.map((doc) => ({
        description: doc.data().category,
        title: doc.data().name,
        price: doc.data().scoops,
        id: doc.id,
        image: doc.data().image,
        units: 1,
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
            <CustomCard
              dish={item}
              onPress={() => navigation.navigate("DishDetail", { dish: item })}
            />
          </>
        )}
        data={mockedItem}
        numColumns={2}
        ListHeaderComponent={() => <DashboardHeader />}
      />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
