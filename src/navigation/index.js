import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './auth';
import AppNavigation from './app';
const MainStack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
    <MainStack.Navigator initialRouteName='App' screenOptions={{headerShown:false}}>
    <MainStack.Screen name='Auth' component={AuthNavigation}/>
    <MainStack.Screen name='App' component={AppNavigation}/>
    </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation