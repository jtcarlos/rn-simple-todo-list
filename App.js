import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import Header from "./components/Header";
import TodoList from "./components/TodoList";

export default function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.todoListContainer}>
          <TodoList tasks={tasks} setTasks={setTasks} />
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todoListContainer: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
  },
});
