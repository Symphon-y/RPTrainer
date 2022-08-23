import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import LoginScreen from './screens/LoginScreen.js';
import HomeScreen from './screens/HomeScreen.js'
import Onboarding from './screens/Onboarding.js'
import AddLiftForm from './screens/AddLiftForm.js'
import PlateCalcView from './screens/PlateCalcView.js'
import OrmCalcView from './screens/OrmCalcView.js'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Onboarding" component={Onboarding} />
        <Stack.Screen options={{headerShown: false}} name="AddLift" component={AddLiftForm} />
        <Stack.Screen options={{headerShown: false}} name="PlateCalc" component={PlateCalcView} />
        <Stack.Screen options={{headerShown: false}} name="ORMCalc" component={OrmCalcView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
