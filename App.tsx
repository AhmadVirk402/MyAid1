import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { PreSplash,Splash } from './src/screens/auth';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';

const App = () => {
  const [ispreSplashVisible, setPreSplashVisible] = useState(true)
   const [isSplashVisible, setSplashVisible] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setPreSplashVisible(false)
    }, 500);
  },[])

  useEffect(()=>{
    setTimeout(() => {
      setSplashVisible(false)
    }, 2500);
  },[])

  if (ispreSplashVisible)
    return (
      <PreSplash />
    )
  else

  if (isSplashVisible)
    return (
      <Splash />
    )
  else

    return (
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>

    )
}

export default App