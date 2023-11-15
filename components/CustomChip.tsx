import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageSourcePropType,
  View,
} from "react-native";
import React from "react";

interface CustomChipProps extends TouchableOpacityProps {
  title: string;
  image: ImageSourcePropType;
}

const CustomChip = ({ title, image }: CustomChipProps) => {
  return (
    <TouchableOpacity style={styles.container} >
      <View style={styles.contentContainer}>
      <Image style={styles.image} source={image} />
      </View>
      <Text style={styles.titlle}>{title}</Text>
    </TouchableOpacity>

  );
};

export default CustomChip;

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginRight:12, 
  },
  contentContainer: {
    height: 90,
    width: 90,
    borderRadius: 20,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  titlle: {
    textAlign: "center",
    marginVertical: 8,
  },
  image: {
    resizeMode: "contain",
    width:40 ,
    height:40
  },
});
