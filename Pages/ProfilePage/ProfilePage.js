import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ProfilePage = ({ navigation }) => {
  const handleNavigate = () => {
    navigation.push("Explore")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>This is Profile Page</Text>
      <TouchableOpacity style={styles.touchable} onPress={handleNavigate}>
        <Text style={{ color: "white" }}>Goto Explore</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfilePage

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