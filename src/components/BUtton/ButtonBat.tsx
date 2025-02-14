import { StyleSheet, Text, Pressable, ToastAndroid } from "react-native";
import * as Clipboard from 'expo-clipboard';

interface ButtonBatProps {
  onGenerate: () => void;
}

export default function ButtonBat({ onGenerate, pass }: ButtonBatProps) {
  function handleCopyButton(){
    Clipboard.setStringAsync(pass)
  }

  const seeToast = () => {
    ToastAndroid.show('copiado com sucesso', ToastAndroid.SHORT)
  }

  return (
    <>
      <Pressable
        onPress={onGenerate}
        style={style.button}
      >
        <Text style={style.text}>GENERATE</Text>
      </Pressable>
      <Pressable
        onPress={() => {handleCopyButton(), seeToast()
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
