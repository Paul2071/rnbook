import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name, setName] = useState("Paul")
  const [person, setPerson ] = useState({name: "Paul", age: 36})

  const clickHandler = () => {
    setName("Sasha")
    setPerson({name: "Sasha", age: 26})
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>  
        <Text style={styles.boldText}>My name is {name}</Text>      
      </View>
        <View style={styles.body}>
          <Text style={styles.boldText}> Their name is {person.name} and they are {person.age} years old</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatum cumque laudantium rerum expedita accusamus. </Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatum cumque laudantium rerum expedita accusamus. </Text>
          <View styles={styles.buttonContainer}>
            <Button 
            title="update name"
            onPress={clickHandler}  
            />
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
   }
});
