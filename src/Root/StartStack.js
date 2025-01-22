import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../Views/Screens/SplashScreen';
import OnBoarding from '../Views/Screens/OnBoarding';


const Stack = createStackNavigator();
const StartStack = () => {
  return (
    <Stack.Navigator initialRouteName='SplashScreen'>
      <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown:false}}/>
      <Stack.Screen name='OnBoard' component={OnBoarding} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default StartStack

const styles = StyleSheet.create({})