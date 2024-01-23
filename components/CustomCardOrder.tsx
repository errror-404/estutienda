import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacityProps,
  View,
} from "react-native";
import React from "react";
import { Dish, Orders } from "../utils/types/Dish";
import UseProduct from "../hooks/UseProduct";

interface CustomCardProps extends TouchableOpacityProps {
  order: Orders;
}

const CustomCardOrders = ({ order, ...rest }: CustomCardProps) => {
  return order.status == "pedido" ? (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: order?.products[0].image,
          }}
          style={styles.image}
        />
      </View>
      <View style={{ margin: 10 }}>
        <View style={styles.status}>
          <Text style={styles.title}>{order?.status}</Text>
        </View>
        <Text style={styles.price}>$ {order?.asiento}</Text>
        <Text style={styles.price}>$ {order?.palco}</Text>
      </View>
    </View>
  ) : order.status == "en proceso" ? (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: order?.products[0].image,
          }}
          style={styles.image}
        />
      </View>
      <View style={{ margin: 10 }}>
        <View style={styles.status2}>
          <Text style={styles.title}>{order?.status}</Text>
        </View>
        <Text style={styles.price}>$ {order?.asiento}</Text>
        <Text style={styles.price}>$ {order?.palco}</Text>
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: order?.products[0].image,
          }}
          style={styles.image}
        />
      </View>
      <View style={{ margin: 10 }}>
        <View style={styles.status3}>
          <Text style={styles.title}>{order?.status}</Text>
        </View>

        <Text style={styles.price}>$ {order?.asiento}</Text>
        <Text style={styles.price}>$ {order?.palco}</Text>
      </View>
    </View>
  );
};

export default CustomCardOrders;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: 800,
    height: 180,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
  },
  image: {
    margin: 15,
    borderRadius: 8,
    height: 150,
    width: 150,
  },
  textContainer: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlignVertical: "center",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "300",
    marginVertical: 2,
  },
  price: {
    color: "#fcb126",
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: "#5C5C5C",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  status: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BBDEFB",
    width: 150,
    height: 40,
  },
  status2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FDFD96",
    width: 150,
    height: 40,
  },
  status3: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BDECB6",
    width: 150,
    height: 40,
  },
});
