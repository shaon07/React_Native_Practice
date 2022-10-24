import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import Explorepage from "../Pages/ExplorePage/Explorepage";
import Homepage from "../Pages/Homepage/Homepage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";


const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Explore" component={Explorepage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})