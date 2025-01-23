import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { AuthProvider, useAuth } from '../services/AuthContext'; // Import AuthProvider and useAuth

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { session, loading } = useAuth();

  if (loading) {
    return null; // Replace with a loading spinner or screen
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={session ? 'MainStack' : 'AuthStack'}>
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainStack"
          component={MainStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainRout = () => {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

export default MainRout;