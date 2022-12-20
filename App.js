
import { useState } from "react";
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import Addtodo from "./components/addtodo";
import Sandbox from "./components/sandbox";


export default function App() {
  const [todos, setTodos] = useState([
    { text: "Listen to music", key: "1" },
    { text: "Practice coding", key: "2" },
    { text: "Go to the gym", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {

    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });

    } else { 
      Alert.alert('Oh no!', 'List items must be over 3 chars long', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }

  };

  return (
<Sandbox/>
  //   <TouchableWithoutFeedback onPress={()=> {
  //     Keyboard.dismiss()
  //   }}>
  //       <View style={styles.container}>
  //         <Header />

  //         <View style={styles.content}>
  //           <Addtodo submitHandler={submitHandler} />

  //           <View style={styles.list}>
  //             <FlatList
  //               data={todos}
  //               renderItem={({ item }) => (
  //                 <TodoItem item={item} pressHandler={pressHandler} />
  //               )}
  //             />
  //           </View>
  //         </View>
  //       </View>
  // </TouchableWithoutFeedback>
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
