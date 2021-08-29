import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Keyboard} from "react-native";

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const buttonPressed = (e, calculate) => {
    if (calculate === "+") setResult(parseInt(number1) + parseInt(number2) + "");
    else if (calculate === "-")
      setResult(parseInt(number1) - parseInt(number2) + "");
    else if (calculate === "/")
      setResult(parseInt(number1) / parseInt(number2) + "");
    else if (calculate === "*")
      setResult(parseInt(number1) * parseInt(number2) + "");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.calculator}>Calculator</Text>
      <Text style={{color: 'orange', fontSize: 18}}>Calculator created by: V_Jata</Text>
      <Text> </Text>
      <View style={styles.row}>
        <View style={styles.text}>
          <Text>Number 1:</Text>
        </View>
        <View style={styles.textInput}>
          <TextInput
            placeholder="0"
            value={number1}
            onChangeText={(text) => setNumber1(text)}
            style={{ textAlign: "right" }}
            keyboardType="numeric"
          ></TextInput>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.text}>
          <Text>Number 2:</Text>
        </View>
        <View style={styles.textInput}>
          <TextInput
            placeholder="0"
            value={number2}
            onChangeText={(text) => setNumber2(text)}
            style={{ textAlign: "right" }}
            keyboardType="numeric"
          ></TextInput>
        </View>
      </View>
      <View style={styles.buttonRow}>
        <Button title="  +  " onPress={(e) => buttonPressed(e, "+")} />
        <Button title="  -  " onPress={(e) => buttonPressed(e, "-")} />
        <Button title="  *  " onPress={(e) => buttonPressed(e, "*")} />
        <Button title="  /  " onPress={(e) => buttonPressed(e, "/")} />
      </View>
      <View style={styles.row}>
        <View style={styles.text}>
          <Text>Result:</Text>
        </View>
        <View style={styles.textInput}>
          <TextInput
            placeholder="0"
            value={result}
            style={{ textAlign: "right" }}
            editable={false}
          ></TextInput>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  calculator: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 25,
    color: 'orange'
  },
  row: {
    flexDirection: "row",
    marginTop: 5,
  },
  text: {
    backgroundColor: "lightgrey",
    justifyContent: "center",
    padding: 4,
    width: 100,
  },
  textInput: {
    justifyContent: "center",
    padding: 5,
    borderBottomWidth: 1,
    width: 100,
    marginLeft: 5,
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15,
    justifyContent: "space-around",
    width: 230,
  },
});
