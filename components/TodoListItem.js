import React, { Fragment } from "react";
import {
  Text,
  View,
  Alert,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

const TodoListItem = ({ item, setTasks }) => {
  const handleItemOnPress = ({ item }) => {
    Alert.alert(
      "Confirm Delete",
      `Are you sure you want to delete the following task: "${item.title}"?`,
      [
        {
          text: "Delete",
          onPress: () => handleItemDeletion({ item }),
        },
        {
          text: "Cancel",
        },
      ]
    );
  };

  const handleItemDeletion = ({ item }) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== item.id)
    );
    ToastAndroid.show("Item successfully deleted!", ToastAndroid.SHORT);
  };

  return (
    <TouchableOpacity onPress={() => handleItemOnPress({ item })}>
      <View style={styles.listItem}>
        <MaterialIcons name="delete-forever" color="#ff4d4d" size={20} />
        <Text style={styles.item}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
    paddingVertical: 10,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "dashed",
    paddingHorizontal: 20,
    borderColor: "#737373",
  },
  item: {
    marginLeft: 15,
    fontSize: 16,
  },
});

export default TodoListItem;
