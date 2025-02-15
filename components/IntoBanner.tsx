import { View, Image, StyleSheet, Text } from "react-native";
import React from "react";
import colors from "@/constants/Colors";

const IntoBanner = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={require("../assets/images/icon.png")}
        style={styles.image}
      />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }}>
        Welcome to SphereID
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.textprimary,
  },
  image: {
    width: 150,
    height: 150,
    objectFit: "cover",
  },
});

export default IntoBanner;
