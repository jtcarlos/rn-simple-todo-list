import React, { Fragment } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

import ItemAdder from "./ItemAdder";
import TodoListItem from "./TodoListItem";

const TodoList = ({ tasks, setTasks }) => {
  return (
    <Fragment>
      <ItemAdder setTasks={setTasks} />
      {tasks.length === 0 && (
        <View style={styles.emptyMessage}>
          <Text>Your task list is empty!</Text>
        </View>
      )}
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TodoListItem setTasks={setTasks} item={item} />
        )}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  emptyMessage: {
    padding: 20,
    borderRadius: 5,
    borderLeftWidth: 4,
    backgroundColor: "#fff5cc",
    borderLeftColor: "#ffd11a",
  },
});

export default TodoList;
