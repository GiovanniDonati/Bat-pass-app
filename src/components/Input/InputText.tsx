import { TextInput, StyleSheet } from "react-native";

export default function InputText() {
  return (
    <>
      <TextInput style={style.input} placeholder="PASS"></TextInput>
    </>
  );
}

const style = StyleSheet.create({
  input: {
    width: "80%",
    borderRadius: 4,
    backgroundColor: "yellow",
    color: "black",
    textAlign: "center",
  },
});
