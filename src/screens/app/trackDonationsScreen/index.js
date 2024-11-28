import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, FlatList, Modal, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, Fonts, FontSizes } from '../../../utilities';
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import { ItemComponent, MainHeader, SecondDonationCard, RegisterInput, Button, ModalGoBack, ModalItem } from '../../../components';
import { useNavigation } from '@react-navigation/native';
const TrackDonationsScreen = () => {
  return (
    <View>
    <ScrollView >
      {/* Header */}
      <MainHeader />
      <View style={styles.container}>


        



        



    </View>

    </ScrollView>





  </View>


);
};
export default TrackDonationsScreen

const styles = StyleSheet.create({

container: {
  flex: 1,
  paddingHorizontal: 20,
  backgroundColor: COLORS.white,

},


mainText: {
  fontSize: FontSizes.h5,
  fontFamily: Fonts.RobotoBlack,

},
selfView: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginVertical: responsiveHeight(1.5),
  paddingRight: responsiveHeight(0.1)

},
addView: {
  backgroundColor: COLORS.primary,
  padding: responsiveHeight(1),
  width: responsiveWidth(7.5),
  alignItems: 'center',
  borderRadius: responsiveHeight(3),

},
add: {
  height: responsiveHeight(1.5),
  width: responsiveWidth(5)
},

categoryContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: responsiveHeight(1.5),
  width: responsiveWidth('87%')
},
category: {
  alignItems: 'center',
  marginBottom: responsiveHeight(3),
  borderRadius: responsiveHeight(5)
},
categoryimg: {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: COLORS.primary,
  width: responsiveWidth(20),
  height: responsiveHeight(10),
  borderRadius: responsiveHeight(5),

},
itemText: {
  fontSize: FontSizes.regular,
  fontFamily: Fonts.RobotoMedium
},
mainText2: {
  fontSize: FontSizes.h5,
  fontFamily: Fonts.RobotoBlack,
  width: responsiveWidth('85%'),
  marginVertical: responsiveHeight(1)
},

modalOverlay: {
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
},
modalContainer: {
  width: responsiveWidth('100%'),
  backgroundColor: COLORS.white,
  borderTopRightRadius: responsiveWidth(7),
  borderTopLeftRadius: responsiveWidth(7),
  padding: responsiveHeight(2),
  alignItems: 'center',
},
modalRegularText: {
  fontSize: FontSizes.regular,
  width: responsiveWidth(90),
  marginTop: responsiveHeight(3),
  textAlign: 'center'
},
modalButton: {
  marginBottom: responsiveHeight(4)
}, modalOverlay: {
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
},
modalContainer: {
  width: responsiveWidth('100%'),
  backgroundColor: COLORS.white,
  borderTopRightRadius: responsiveWidth(7),
  borderTopLeftRadius: responsiveWidth(7),
  padding: responsiveHeight(2),
  alignItems: 'center',
},
modalRegularText: {
  fontSize: FontSizes.regular,
  width: responsiveWidth(90),
  marginTop: responsiveHeight(3),
  textAlign: 'center'
},
modalButton: {
  marginBottom: responsiveHeight(4)
},



});


