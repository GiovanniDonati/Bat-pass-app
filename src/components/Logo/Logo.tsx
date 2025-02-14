import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import logo from "../../../assets/BatLogo.png";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.Logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  Logo: {
    resizeMode: "contain",
    width: "100%",
    height: 200,
    margin: 10,
  },
});
