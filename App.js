import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { 
  Button, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  ScrollView,
  FlatList,
  TouchableOpacity  } from "react-native";

export default function App() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [ people, setPeople ] = useState([
    {name: "Fjor", id: 1},
    {name: "Magne", id: 2 },
    {name: "Laurits", id: 3 },
    {name: "Saxa", id: 4},
    {name: "Isolde", id: 5},
    {name: "Edda", id: 6},
    {name: "Iman", id: 7},
    {name: "Odin", id: 8},
  ])

const pressHandler = (id) => {
  console.log(id);
  setPeople( (previousPeople) => {
    return previousPeople.filter( ( person ) => person.id != id );
  }
    )
} 

const resetState = () => {
  setPeople([
    {name: "Fjor", id: 1},
    {name: "Magne", id: 2 },
    {name: "Laurits", id: 3 },
    {name: "Saxa", id: 4},
    {name: "Isolde", id: 5},
    {name: "Edda", id: 6},
    {name: "Iman", id: 7},
    {name: "Odin", id: 8},
  ])
}


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

        
      <Button 
      title={"reset"} 
      onPress={resetState}
      />



      <FlatList 
        numColumns={4}        
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={( { item } ) => (
        <TouchableOpacity onPress={ () => pressHandler(item.id)} >    
          <Text style={styles.element}> {item.name}</Text>
         </TouchableOpacity>  

        )}
      />
      

      {/* <ScrollView>
       {people.map((element) => {
        return (
          <View key={element.key}>
            <Text style={styles.element}>{element.name}</Text>
          </View>
        )
        })}
      </ScrollView>  */}

    </View>
  );
}

const styles = StyleSheet.create({
  element: {
    marginTop: 10,
    marginLeft: 10,
    padding: 15,
    backgroundColor: "teal",
    fontSize: 15
  },
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
