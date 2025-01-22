import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Views/HomeScreens/HomeScreen';
import ProfileScreen from '../Views/HomeScreens/ProfileScreen';
import Icon, { Icons } from '../Constants/icons';


const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  
  // Custom tab bar style
  
  const customTabBarStyle = {
    style: {},
    labelStyle: {
      fontSize: 12,
      fontWeight: 'bold', // Bold labels
    },
  };

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        keyboardHidesTabBar: true,
        tabBarStyle: {
          height: 80,
          paddingTop: 10,
          backgroundColor:'#19173D',
          borderRadius:20,
        },
        headerShown: false,
      }}
      tabBarOptions={{
        ...customTabBarStyle,
        keyboardHidesTabBar: true, // Hide tab bar when keyboard is open
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon type={Icons.Entypo} name={'home'} color={focused? "#AF52DE": "white"} size={25}   />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="profile"
        options={{
          activeTintColor:()=>"red",
          tabBarLabel: '',
          tabBarIcon: ({ color,focused }) => (
            <Icon type={Icons.Entypo} name={'home'} color={focused? "#AF52DE": "white"} size={25} />
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
