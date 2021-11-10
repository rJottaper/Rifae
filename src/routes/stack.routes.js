import React from 'react';
import { Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import NewRaffle from '../screens/NewRaffle';
import FinishRaffle from '../screens/FinishRaffle';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#EC7149',
        tabBarStyle: {backgroundColor: '#F8F8F8'}
      }}
    >
      <Tab.Screen  
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: () => (
            <Image source={require('../assets/tickets.png')} />
          ),
        }}   
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome name='user' size={size} color="#EC7149" />
          )
        }} 
      />
    </Tab.Navigator>
  )
};

const Routes = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeScreen" component={Tabs} />
      <Stack.Screen name="NewRaffle" component={NewRaffle} />
      <Stack.Screen name="FinishRaffle" component={FinishRaffle} />
    </Stack.Navigator>
  )
};

export default Routes;