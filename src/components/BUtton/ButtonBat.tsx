import { StyleSheet, Text, Pressable } from "react-native";

export default function InputText() {
  return (
    <>
      <Pressable
        onPress={() => {
          console.log("teu cu");
        }}
        style={style.button}
      >
        <Text style={style.text}>GENERATE</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          console.log("teu cu");
        }}
        style={style.button}
      >
        <Text style={style.text}>⚡COPY</Text>
      </Pressable>
    </>
  );
}

const style = StyleSheet.create({
  button: {
    marginTop: 4,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 40,
    borderRadius: 4,
    backgroundColor: "black",
  },
  text: {
    color: "yellow",
    fontSize: 16,
  },
});
