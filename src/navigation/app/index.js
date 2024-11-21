import React from 'react';
import { StyleSheet,View,Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HomeScreen,NeedAndWantsScreen,TrackDonationsScreen,AccountScreen,MyDonationsScreen,AddDonationScreen,LocationScreen,DropOffLocationScreen,DonationConfirmScreen,DeliveryScreen } from '../../screens/app';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, FontSizes } from '../../utilities';
import { CustomTabBar } from '../../components';
import { routes } from '../../utilities/constant';

const Stack = createNativeStackNavigator();
// Tab Navigator
const Tab = createBottomTabNavigator();


const BottomNavigation = () => {
  return (
  

<Tab.Navigator
    tabBar={(props) => <CustomTabBar props={props} />}
    screenOptions={{
      headerShown: false,
      tabBarHideOnKeyboard: true,
      unmountOnBlur: true,
    }}>
        <Tab.Screen name={routes.home} component={HomeScreen} />
        <Tab.Screen name={routes.needAndWant} component={NeedAndWantsScreen} />
        <Tab.Screen name={routes.trackDonations} component={TrackDonationsScreen} />
        <Tab.Screen name={routes.account} component={AccountScreen} />
      </Tab.Navigator>
  );
};

const AppNavigation = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="BottomTab" component={BottomNavigation} />
      <Stack.Screen name="MyDonationScreen" component={MyDonationsScreen} />
      <Stack.Screen name="AddDonationScreen" component={AddDonationScreen} />
      <Stack.Screen name="LocationScreen" component={LocationScreen} />
      <Stack.Screen name="DropOffLocationScreen" component={DropOffLocationScreen} />
      <Stack.Screen name="DonationConfirmScreen" component={DonationConfirmScreen} />
      <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} />
    </Stack.Navigator>
    )
  }

export default AppNavigation;

