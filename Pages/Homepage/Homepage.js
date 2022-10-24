import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Homepage = ({ navigation }) => {

  const handleNavigate = () => {
    navigation.push("Profile")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>This is homepage</Text>
      <TouchableOpacity style={styles.touchable} onPress={handleNavigate}>
        <Text style={{ color: "white" }}>Goto Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    backgroundColor: "blue",
    padding: 10,
    margin: 5,
  },
  heading: {
    fontSize: 20,
    marginBottom: 10
  }
})