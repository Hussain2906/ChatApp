// Import necessary libraries
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Import the different stacks
import AuthStack from './AuthStack'; // Ensure these paths are correct
import MainStack from './MainStack';


// MainRout component
const MainRout = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'AuthStack'}>
        <Stack.Screen name="AuthStack" component={AuthStack} options={{headerShown:false}} />
        <Stack.Screen name="MainStack" component={MainStack} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Export the MainRout component
export default MainRout;
