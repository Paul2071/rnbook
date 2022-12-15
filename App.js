import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState();
  const [age, setAge] = useState();

 

  return (
    <View style={styles.container}>
      <Text>What is your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name here..."
        onChangeText={(value) => setName(value)}
      />
      <Text>What is your age?</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.age}
        placeholder="Enter age here..."
        onChangeText={(value) => setAge(value)}
      />


      <View style={styles.header}>
        <Text style={styles.boldText}>My name is {name} and I am {age} years old</Text>
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
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
    color: "red",
  },
  body: {
    backgroundColor: "purple",
    padding: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 150,
  },
  age: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 150,
  },
});
