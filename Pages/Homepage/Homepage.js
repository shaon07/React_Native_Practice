import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from "../../Components/Header/Header";
import TextBody from "../../Components/TextBody/TextBody";


const Homepage = () => {
  return (
    <SafeAreaView style={styles.homePageContainer}>
      <Header />
      <TextBody />
    </SafeAreaView>
  )
}

export default Homepage;

const styles = StyleSheet.create({
  homePageContainer: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

})