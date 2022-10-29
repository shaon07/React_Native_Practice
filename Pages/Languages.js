import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Languages = ({ route, navigation }) => {

  const { countryName, setCountryName } = route.params;

  const handleBtn = (item) => {
    setCountryName(item);
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={countryName}
        keyExtractor={(item) => item.name + (Math.random())}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.btnContainer} onPress={() => handleBtn(item)}>
              <Text style={styles.Text}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default Languages

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    padding: 10
  },
  Text: {
    color: "white",
    backgroundColor: "gray",
    margin: 5,
    padding: 10,
    borderRadius: 5
  },
  btnContainer: {
    // backgroundColor: "gray",
  }
})