import React, { useState } from "react";
import { TextInput, Button, View, StyleSheet, Alert } from "react-native";

const ItemAdder = ({ setTasks }) => {
  const [textInput, setTextInput] = useState({});
  const [item, setItem] = useState("");

  const handleAddItem = () => {
    if (item.length > 0) {
      setTasks((currentTasks) => [
        ...currentTasks,
        {
          title: item,
          id: Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substr(0, 5),
        },
      ]);
      setItem("");
      textInput.clear();
    } else {
      Alert.alert("Oops", "Please give your task a title.");
    }
  };

  return (
    <View style={styles.itemAdderContainer}>
      <View style={styles.textInputContainer}>
        <TextInput
          clearButtonMode="always"
          ref={(input) => setTextInput(input)}
          onChangeText={(value) => setItem(value)}
          placeholder="ex. Learn React Native"
        />
      </View>
      <Button onPress={handleAddItem} color="#0066cc" title="Add task" />
    </View>
  );
};

const styles = StyleSheet.create({
  itemAdderContainer: {
    marginBottom: 20,
  },
  textInputContainer: {
    borderWidth: 1,
    borderRadius: 3,
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: "#0066cc",
  },
});

export default ItemAdder;
