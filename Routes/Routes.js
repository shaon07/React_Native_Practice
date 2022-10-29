import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import Homepage from "../Pages/Homepage/Homepage";
import Languages from "../Pages/Languages";


const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Homepage} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name="Language"
            component={Languages}
            options={{
              title: 'Select First Language Name',
              headerShown: true,
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 15
              },
            }} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})