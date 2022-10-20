import React from "react";
import { View, Text, StyleSheet } from "react-native";

const List = ({ title }) => {
  return (
    <View style={className.container}>
      <Text style={className.para}>{title}</Text>
    </View>
  );
};

const className = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: 20,
    margin: 10,
  },

  para: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});

export default List;
