import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AddAddress, Forgot, SecondSetUp, SetUp,LogIn,SignUp, ThirdSetUp  } from '../../screens/auth';
const AuthStack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown:false}}>
    <AuthStack.Screen name="LogIn" component={LogIn} />
     <AuthStack.Screen name="Forgot" component={Forgot} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
    <AuthStack.Screen name="SetUp" component={SetUp} />
    <AuthStack.Screen name="AddAddress" component={AddAddress} />
     <AuthStack.Screen name="SecondSetUp" component={SecondSetUp} />
     <AuthStack.Screen name="ThirdSetUp" component={ThirdSetUp} />  

  </AuthStack.Navigator>
  )
}

export default AuthNavigation