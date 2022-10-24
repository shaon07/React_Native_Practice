import React from "react";
import { StyleSheet, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={className.container}>

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
