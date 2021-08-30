import React from "react";
import {
  Text,
  Platform,
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <Text style={styles.headerContent}>Simple Todo List</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    backgroundColor: "#0066cc",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerContent: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    marginVertical: 20,
    marginHorizontal: 20,
  },
});

export default Header;
