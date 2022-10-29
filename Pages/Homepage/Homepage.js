import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from "../../Components/Header/Header";
import TextBody from "../../Components/TextBody/TextBody";


const Homepage = () => {

  // states for Header component
  const [countryName, setCountryName] = useState([]);
  const [firstCountryName, setFirstCountryName] = useState(
    { language: 'en', name: 'English' });
  const [secondCountryName, setSecondCountryName] = useState({ language: 'bn', name: 'Bangla' });

  // state for TextBody component
  const [value, setValue] = useState("");
  const [translatedText, setTranslatedText] = useState()
  const onChangeText = (v) => {
    setValue(v)
  }

  const options = {
    method: 'GET',
    headers: {
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': 'b85ea1d19dmsh7dd7f4377a19c60p1ccabejsn4c0927733f2e',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/languages?target=en', options)
      .then(response => response.json())
      .then(response => setCountryName(response.data.languages))
      .catch(err => console.error(err));
  }, [])

  const encodedParams = new URLSearchParams();
  encodedParams.append("q", value);
  encodedParams.append("target", secondCountryName.language);
  encodedParams.append("source", firstCountryName.language);

  const handlePost = () => {
    const TranslateOptions = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': 'b85ea1d19dmsh7dd7f4377a19c60p1ccabejsn4c0927733f2e',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      body: encodedParams
    };
    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', TranslateOptions)
      .then(response => response.json())
      .then(response => {
        console.log(response, "Line 61")
        return setTranslatedText(response.data.translations[0].translatedText)
      })
      .catch(err => console.error(err, "Line 64"));
  }

  console.log(translatedText)

  return (
    <SafeAreaView style={styles.homePageContainer}>
      <Header
        countryName={countryName}
        firstCountryName={firstCountryName}
        setFirstCountryName={setFirstCountryName}
        secondCountryName={secondCountryName}
        setSecondCountryName={setSecondCountryName}
      />
      <TextBody
        value={value}
        onChangeText={onChangeText}
        handlePost={handlePost}
        translatedText={translatedText}
      />
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