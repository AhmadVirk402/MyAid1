import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AddAddress, Forgot, SecondSetUp, SetUp,LogIn,SignUp, ThirdSetUp  } from '../screens/auth';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="LogIn" component={LogIn} />
     <Stack.Screen name="Forgot" component={Forgot} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="SetUp" component={SetUp} />
    <Stack.Screen name="AddAddress" component={AddAddress} />
     <Stack.Screen name="SecondSetUp" component={SecondSetUp} />
     <Stack.Screen name="ThirdSetUp" component={ThirdSetUp} /> 

  </Stack.Navigator>
  )
}

export default Navigation