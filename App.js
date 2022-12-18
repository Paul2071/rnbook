import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [todos, setTodos] = useState([
    { task: "Listen to music", key: "1" },
    { task: "Practice coding", key: "2" },
    { task: "Go to the gym", key: "3" },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            keyExtractor={(item) => item.key}
            data={todos}
            renderItem={({ item }) => <Text>{item.task}</Text>}
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
    padding: 40,
   
  },
});
