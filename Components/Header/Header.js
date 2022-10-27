import { faRotate } from '@fortawesome/free-solid-svg-icons/faRotate';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {

  const [countryName, setCountryName] = useState([])

  const options = {
    method: 'GET',
    headers: {
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': '76b2aef6b3msh0e774d18ce1b12cp1b99fcjsnc15ea215f65d',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/languages?target=en', options)
      .then(response => response.json())
      .then(response => setCountryName(response.data.languages))
      .catch(err => console.error(err));
  }, [])

  console.log(countryName)

  return (
    <View style={styles.homePageHeader}>
      <View style={styles.TranslateLang}>
        <Text style={styles.selectText}>English</Text>
        <FontAwesomeIcon icon={faRotate} style={styles.rotateIcon} size={30} />
        <Text style={styles.selectText}>Bangla</Text>
      </View>

      <View style={styles.selectLang}>
        <Text style={styles.LangText}>
          Select Country
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