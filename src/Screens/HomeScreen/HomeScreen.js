import React from "react";
import { View, StyleSheet, Text } from "react-native";
import List from "../../Components/List";

const HomeScreen = () => {
  return (
    <View style={className.container}>
      <Text style={className.header}>Todays Task List</Text>
      <List title="Make A Components" />
      <List title="import and call in another file" />
      <List title="add style and className" />
    </View>
  );
};

const className = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    padding: 10,
  },
  header: {
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
    padding: 15,
    fontSize: 30,
  },
});

export default HomeScreen;
