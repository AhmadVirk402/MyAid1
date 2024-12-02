import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, FlatList, Modal, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, Fonts, FontSizes } from '../../../utilities';
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import { Icon } from '@rneui/themed';
import { ItemComponent, MainHeader, SecondDonationCard, RegisterInput, Button, ModalGoBack, ModalItem, TrackDonationComponent } from '../../../components';
import { useNavigation } from '@react-navigation/native';



const TrackDonationsScreen = () => {
  const navigation = useNavigation();

const buttonData = [
  {
    id: '1',
    name: 'Active',
    textColor: COLORS.dark,
    bdColor: COLORS.white,
    bColor: COLORS.primary,
    onPress1: () => navigation.navigate('ActiveDeliveryScreen'),
  },
  {
    id: '2',
    name: 'Active',
    textColor: COLORS.dark,
    bdColor: COLORS.white,
    bColor: COLORS.primary,
    onPress1: () => navigation.navigate('ActiveDeliveryScreen'),
  },
  {
    id: '3',
    name: 'Active',
    textColor: COLORS.dark,
    bdColor: COLORS.white,
    bColor: COLORS.primary,
    onPress1: () => navigation.navigate('ActiveDeliveryScreen'),

  },
  {
    id: '4',
    name: 'Active',
    textColor: COLORS.dark,
    bdColor: COLORS.white,
    bColor: COLORS.primary,
    onPress1: () => navigation.navigate('ActiveDeliveryScreen'),
  },
  {
    id: '5',
    name: 'Scheduled',
    textColor: COLORS.dark,
    bdColor: COLORS.bdColor3,
    bColor: COLORS.borderColor,
    onPress1: () => navigation.navigate('ActiveDeliveryScreen'),
  },
  {
    id: '6',
    name: 'Delivered',
    textColor: COLORS.white,
    bdColor: COLORS.primary,
    bColor: COLORS.primary,
    onPress1: () => navigation.navigate('DeliveredScreen'),

  },
  {
    id: '7',
    name: 'Cancelled',
    textColor: COLORS.white,
    bdColor: COLORS.red,
    bColor: COLORS.red,
    onPress1: () => navigation.navigate('CancelledScreen'),

  },

  {
    id: '8',
    name: 'Delivered',
    textColor: COLORS.white,
    bdColor: COLORS.primary,
    bColor: COLORS.primary,
    onPress1: () => navigation.navigate('DeliveredScreen'),
  },

  {
    id: '9',
    name: 'Delivered',
    textColor: COLORS.white,
    bdColor: COLORS.primary,
    bColor: COLORS.primary,
    onPress1: () => navigation.navigate('DeliveredScreen'),
  },

]

  //const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Active");
  const [fileredData, setFiltered] = useState([]);

  const tabs = ["Active", "Scheduled", "Received", "History"];


  useEffect(()=>{
const tempFiltered=handleFilterData()
setFiltered(tempFiltered)
  },[activeTab,buttonData])

  const handleFilterData = () => {
    let _filteredData = [...buttonData]
    _filteredData = _filteredData.filter((item, index) => {
      const showStatuses = activeTab === 'Active' ?
        item.name === 'Active':
        activeTab === 'Scheduled' ?
          item.name === 'Scheduled' :
          activeTab === 'Received' ?
          item.name === 'Active' :
          activeTab === 'History' ?
          (item.name != 'Active'&& item.name != 'Scheduled') :null
      return (showStatuses)
    })
    return _filteredData
  }


  return (
    <View>
      <ScrollView >
        {/* Header */}
        <MainHeader />

        <View style={styles.container}>

          <View style={styles.tabBar}>
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.tab,
                  activeTab === tab && styles.activeTab,
                ]}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === tab && styles.activeTabText,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <FlatList
            data={fileredData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TrackDonationComponent
                name={item.name}
                textColor={item.textColor}
                bColor={item.bColor}
                bgColor={item.bdColor}
                onPress1={item.onPress1}
              />
            )}
            showsVerticalScrollIndicator={false}
          />



        </View>

      </ScrollView >





    </View >


  );
};
export default TrackDonationsScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: responsiveHeight(2),
    backgroundColor: COLORS.white,

  },


  tabBar: {
    flexDirection: "row",
    backgroundColor: COLORS.bdColor,
    padding: responsiveHeight(0.5),
    borderRadius: responsiveHeight(1),
    marginVertical: responsiveHeight(2)
  },
  tab: {
    flex: 1,
    paddingVertical: responsiveHeight(1.5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: responsiveHeight(1),
    backgroundColor: COLORS.bdColor,
    marginHorizontal: responsiveWidth(1),
    marginVertical: responsiveHeight(1),
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  activeTab: {
    backgroundColor: COLORS.primary,
    borderWidth: 0,
  },
  tabText: {
    color: COLORS.dark,
    fontSize: FontSizes.regular,
    fontFamily: Fonts.RobotoMedium,
  },
  activeTabText: {
    color: COLORS.white,
    fontWeight: "bold",
  },





});


