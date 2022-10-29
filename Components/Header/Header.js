import { faRotate } from '@fortawesome/free-solid-svg-icons/faRotate';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Header = ({ countryName, firstCountryName, setFirstCountryName, secondCountryName, setSecondCountryName }) => {

  const navigation = useNavigation();

  return (

    <View style={styles.homePageHeader}>
      <View style={styles.TranslateLang}>
        <Text style={styles.selectText}
          onPress={() => navigation.navigate("Language",
            { countryName, setCountryName: setFirstCountryName }
          )}>
          {firstCountryName.name}
        </Text>

        <FontAwesomeIcon icon={faRotate} style={styles.rotateIcon} size={30} />

        <Text style={styles.selectText}
          onPress={() => navigation.navigate("Language",
            { countryName, setCountryName: setSecondCountryName })}
        >
          {secondCountryName.name}
        </Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  homePageHeader: {
    width: "95%",
    padding: 10,
    borderRadius: 10,
  },
  TranslateLang: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  rotateIcon: {
    color: "white"
  },
  selectText: {
    color: "white",
    backgroundColor: "#292440",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5
  },
  selectLang: {
    backgroundColor: "white",
    width: "50%",
    padding: 5,
    borderRadius: 5
  },
  LangText: {
    color: "red",
    backgroundColor: "gray",
    textAlign: "center",
    padding: 5
  }
})