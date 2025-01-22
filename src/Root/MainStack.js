import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigation from './TabScreen';
import HomeScreen from '../Views/HomeScreens/HomeScreen';
import MenuScreen from '../Views/Screens/MenuScreen';
import ProfileScreen from '../Views/HomeScreens/ProfileScreen';



const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName='TabNavigation'>
      <Stack.Screen name='TabNavigation' component={TabNavigation} options={{headerShown:false}}/>
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
      <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})