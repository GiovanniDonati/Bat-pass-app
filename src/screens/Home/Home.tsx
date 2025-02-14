import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import Logo from "../../components/Logo/Logo";

import styles from "./HomeStyle";
import InputText from "../../components/Input/InputText";
import ButtonBat from "../../components/BUtton/ButtonBat";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>BAT-PASS Generator</Text>
      <Logo />
      <InputText />
      <ButtonBat />
    </View>
  );
}
