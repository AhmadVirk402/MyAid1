import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FontSizes, Fonts } from '../../../utilities'
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,

} from 'react-native-responsive-hook';
import { Icon } from '@rneui/themed';
import { Button, GoBack, MiniRadioButton, CustomRadioImg, InputField } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps



const DeliveryScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <GoBack name={'Delivery'} />
      <View style={styles.container2}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>


      <View style={styles.mainView}>
        <View >

          <View style={styles.spacerH} />
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: responsiveWidth(4) }}>

            <Image source={require('../../../assets/images/box1.png')} style={styles.img} />
            <Text style={styles.startText}>Donation Delivery</Text>
          </View>

          <View style={styles.spacerV} />

          <CustomRadioImg />
          <View>
            <Text style={styles.startText2}>Billing</Text>
            <MiniRadioButton />
          </View>
          <View style={styles.inputView}>
            <InputField
              name={'Delivery Company'}
              inputName={'FedEx'}
              iconName1={'van-utility'}
              iconType1={'material-community'}
              iconName2={'keyboard-arrow-down'}
              iconType2={'MaterialIcons'}
            />
            <InputField
              name={'Payment Method'}
              inputName={'**** **** 0582 5466'}
              iconName1={'creditcard'}
              iconType1={'antdesign'}
              iconName2={'keyboard-arrow-down'}
              iconType2={'MaterialIcons'}
            />
          </View>
        </View>





      </View>
    </View>
  )
}

export default DeliveryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignContent: 'center',
  },

  container2: {
    //   ...StyleSheet.absoluteFillObject,
    height: responsiveHeight(22),
    width: responsiveWidth('100%'),
    marginTop: responsiveHeight(),
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mainView: {
    borderTopLeftRadius: responsiveHeight(2.5),
    borderTopRightRadius: responsiveHeight(2.5),
    marginTop: responsiveHeight(-1),
    backgroundColor: COLORS.white,


  },
  startText: {
    fontSize: FontSizes.h5,
    fontFamily: Fonts.RobotoBold,
    marginVertical: responsiveHeight(1.5),
    textAlign: 'left',
    marginLeft: responsiveHeight(2)
  },
  startText2: {
    fontSize: FontSizes.h5,
    fontFamily: Fonts.RobotoBold,
    marginVertical: responsiveHeight(1.5),
    textAlign: 'left',
    marginLeft: responsiveHeight(4)
  },
  spacerV: {
    marginVertical: responsiveHeight(0.8)
  },
  spacerH: {
    marginVertical: responsiveHeight(1)
  },
  img: {
    marginLeft: responsiveHeight(2)
  },
  inputView: {
    width: responsiveWidth('100%'),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },



})