import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import Logo from "../../components/Logo/Logo";

import styles from "./HomeStyle";
import InputText from "../../components/Input/InputText";
import ButtonBat from "../../components/BUtton/ButtonBat";
import generatePass from "../../services/passwordService";

export default function Home() {
  const [pass, setPass] = useState("")

  function handleGenerateButton() {
    let generateToken = generatePass()
    setPass(generateToken)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>BAT-PASS Generator</Text>
      <Logo />
      <InputText pass={pass} />
      <ButtonBat onGenerate={handleGenerateButton} pass={pass}/>
    </View>
  );
}
