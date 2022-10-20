import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={className.container}>
      <Text style={className.para}>This is first React-Native Programme</Text>
      <Text style={className.para}>
        Day 1 Completed with Text and Design Part
      </Text>
    </View>
  );
};

const className = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    padding: 30,
  },

  para: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
export default App;
