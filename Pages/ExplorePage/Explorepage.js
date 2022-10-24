import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Explorepage = ({ navigation }) => {
  const handleNavigate = () => {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>This is Profile Page</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.touchable} onPress={handleNavigate}>
          <Text style={{ color: "white" }}>Back to Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable} onPress={() => navigation.popToTop()}>
          <Text style={{ color: "white" }}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Explorepage;

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
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  }
})