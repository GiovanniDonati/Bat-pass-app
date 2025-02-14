import { TextInput, StyleSheet } from "react-native";

interface TextInputProps{
  pass:string
}

export default function InputText(props: TextInputProps) {
  return (
    <>
      <TextInput 
        style={style.input} 
        placeholder="PASS"
        value={props.pass}/>
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
