import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Listen to music", key: "1" },
    { text: "Practice coding", key: "2" },
    { text: "Go to the gym", key: "3" },
  ]);

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ ele }) => (<Text>{ele.text}</Text>)}
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
    padding: 400,
  },
  list: {
    marginTop: 20,
  },
});
