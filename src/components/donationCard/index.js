import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { COLORS, Fonts, FontSizes } from '../../utilities';
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';

const DonationCard = ({img1,name,raisedOf,raisedGoal}) => {
  return (
    <View style={styles.donateCard}>
    <Image source={img1} style={styles.cardImage} />

    <View style={{ padding: 10 }}>
      <Text style={styles.cardTitle}>{name}</Text>
      <View style={styles.cardimg2}>
        <Image source={require('../../assets/images/img8.png')} />
        <View style={styles.spacer}/>
        <Text>by John Doe</Text>
      </View>
    </View>
    <View style={styles.cardFooter}>
      <View > 

        <View style={{ flexDirection: 'row', marginLeft:responsiveWidth(1) }}>
       <Text style={styles.amount}>Raised of </Text>
        <Text style={styles.realAmount}>{raisedOf}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.raise} >
            <Text style={styles.amount} >
              Raise Goal
            </Text>
          </View>
          <View>
            <Text>{raisedGoal}</Text>
          </View>
        </View>

      </View>
      <TouchableOpacity style={styles.donateButton}>
        <Text style={styles.donateText}>Donate</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default DonationCard

const styles=StyleSheet.create({
    donateCard: {
        backgroundColor: COLORS.white,
        borderRadius: responsiveHeight(1),
    
        marginVertical: responsiveWidth(2.5),
        shadowColor: COLORS.grey,
        borderColor: COLORS.grey,
        borderWidth: 0.5,
        shadowOpacity: 50,
        shadowOffset: 50,
      },
      cardImage: {
        width: '100%',
        height: responsiveHeight(13),
        borderTopLeftRadius: responsiveWidth(2.5),
        borderTopRightRadius: responsiveWidth(2.5),
      },
      cardimg2: {
        marginVertical: responsiveHeight(0.5),
        alignContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    
    
      },
      spacer: {
        marginHorizontal: responsiveWidth(1)
      },
      cardTitle: {
        fontWeight: 'bold',
        fontSize: FontSizes.h5,
        marginTop: responsiveHeight(0.1)
      },
    
      cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth:0.5,
        marginTop:responsiveHeight(0.5),
        borderColor:COLORS.grey,
        padding:responsiveHeight(1)
      },
      amount: {
        fontFamily: Fonts.RobotoBold,
        color: COLORS.green,
        fontSize: FontSizes.regular,
        textAlign:'center'
      },
      realAmount: {
        fontFamily: Fonts.RobotoBold,
        color: COLORS.dark,
        fontSize: FontSizes.regular
      },
      raise: {
        color: COLORS.green,
        backgroundColor: COLORS.bgColor2,
        fontSize: FontSizes.small,
        width: responsiveWidth(20),
        height: responsiveHeight(3),
        borderRadius: responsiveWidth(2.5),
        textAlign: 'center',
        justifyContent: 'center'
      },
      donateButton: {
        backgroundColor:COLORS.primary,
         borderRadius: responsiveHeight(1),
          paddingVertical: responsiveHeight(1),
          paddingHorizontal: responsiveWidth(10)
         },
      donateText: { color: COLORS.white },
})