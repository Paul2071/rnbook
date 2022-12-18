import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  } from "react-native";
  import Header from "./components/header";
  import TodoItem from "./components/todoItem";
  import Addtodo from "./components/addtodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Listen to music", key: "1" },
    { text: "Practice coding", key: "2" },
    { text: "Go to the gym", key: "3" },
  ]);

const pressHandler = (key) => {
  setTodos( (prevTodos) => {
    return prevTodos.filter(todo => todo.key != key)
  })
}

const submitHandler = (text) => {

setTodos( (prevTodos) => {
  return [
    { text: text, key: Math.random().toString()},
    ...prevTodos 
  ]
})

}


  return (
    <View style={styles.container}>
     
      <Header/>

      <View style={styles.content}>
      <Addtodo submitHandler={submitHandler}/>

        <View style={styles.list}>

          <FlatList
            data={todos}
            renderItem={({ item }) => <TodoItem item={item} pressHandler={pressHandler}/>}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
    
   
  },
});
