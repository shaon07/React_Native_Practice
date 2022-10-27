import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const TextBody = () => {

  const [value, setValue] = useState("");

  const onChangeText = (v) => {
    setValue(v)
  }

  return (

    <View style={styles.container}>
      <ScrollView style={styles.bodyCurrentText}>
        <View>

          <TextInput
            style={[styles.currentText, styles.bodyText]}
            multiline={true}
            numberOfLines={5}
            onChangeText={onChangeText}
            value={value}
            placeholder="Enter Text To Translate"
            placeholderTextColor="#cbcbcb"
          />

        </View>
      </ScrollView>
      <ScrollView style={styles.bodyTranslateText}>
        <View>
          <Text style={[styles.translateText, styles.bodyText]}>
            {value}
          </Text>
        </View>
      </ScrollView>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Copy</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default TextBody

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 5,
  },
  bodyText: {
    fontSize: 18,
  },

  bodyCurrentText: {
    textAlign: "center",
    margin: 10,
    borderRadius: 5,
    // height: 300
  },

  bodyTranslateText: {
    backgroundColor: "#292440",
    margin: 10,
    padding: 10,
    borderRadius: 5,
    height: 300
  },
  currentText: {
    textAlign: "left",
    maxHeight: 300,
    padding: 10,
    backgroundColor: "#192335",
    color: "white",
    borderRadius: 5
  },
  translateText: {
    textAlign: "left",
    color: "white",
    paddingBottom: 25
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    backgroundColor: "#40407a",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5
  },
  buttonWrapper: {
    width: "100%",
    alignItems: "center"
  }
})