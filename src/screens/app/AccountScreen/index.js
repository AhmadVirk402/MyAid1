import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import { COLORS, FontSizes, Fonts } from '../../../utilities'
import React, { useState } from 'react'
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import { AmountComponent, GoBack, MainHeader, NotificationComponent, OrganizationCard, PersonCard } from '../../../components'


const personData = [
  { id: "1", name: "John Doe", date: "19/03/2024", price: "$26.82", },
  { id: "2", name: "John Doe", date: "19/03/2024", price: "$26.82", },
  { id: "3", name: "John Doe", date: "19/03/2024", price: "$26.82", },
  { id: "4", name: "John Doe", date: "19/03/2024", price: "$26.82", },
  { id: "5", name: "John Doe", date: "19/03/2024", price: "$26.82", },
  { id: "6", name: "John Doe", date: "19/03/2024", price: "$26.82", },
];

const organizationData = [
  { id: "1", name: "Orphanage", buttonName: "Donated $ 60", image: require('../../../assets/images/img7.png') },
  { id: "2", name: "Orphanage", buttonName: "Donated $ 60", image: require('../../../assets/images/img9.png') },
  { id: "3", name: "Orphanage", buttonName: "Donated $ 60", image: require('../../../assets/images/img10.png') },
];

const AccountScreen = () => {
  const [activeTab, setActiveTab] = useState("Person");

  return (
    <View style={styles.container}>
      <MainHeader />

      <View style={[styles.mainContainer, { flex: 1 }]}>
        <AmountComponent />

        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[styles.button, activeTab === "Person" && styles.activeButton]}
            onPress={() => setActiveTab("Person")}
          >
            <Text style={[styles.buttonText, activeTab === "Person" && styles.activeButtonText]}>
              Person
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, activeTab === "Organization" && styles.activeButton]}
            onPress={() => setActiveTab("Organization")}
          >
            <Text style={[styles.buttonText, activeTab === "Organization" && styles.activeButtonText]}>
              Organization
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          {activeTab === "Person" ? (
            <FlatList
              data={personData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <PersonCard
                  name={item.name}
                  date={item.date}
                  price={item.price}
                />
              )}

            />

          ) : (

            <FlatList
              data={organizationData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <OrganizationCard
                  name={item.name}
                  img1={item.image}
                  buttonName={item.buttonName}
                />
              )}

            />
          )}
        </View>
      </View>


    </View>
  )
}

export default AccountScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mainContainer: {
    paddingHorizontal: responsiveWidth(4)
  },



  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.bdColor,
    borderRadius: responsiveHeight(2),
    padding: responsiveHeight(1),
    marginVertical: responsiveHeight(2),
  },
  button: {
    flex: 1,
    alignItems: "center",
    paddingVertical: responsiveHeight(1),
    borderRadius: responsiveHeight(1),
  },
  activeButton: {
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    fontSize: FontSizes.medium,
    color: COLORS.dark,
    fontFamily: Fonts.RobotoMedium
  },
  activeButtonText: {
    color: COLORS.white,
    fontFamily: Fonts.RobotoMedium,
  },

})