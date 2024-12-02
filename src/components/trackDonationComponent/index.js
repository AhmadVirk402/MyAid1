import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, FlatList, Modal, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, Fonts, FontSizes } from '../../utilities';
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
const TrackDonationComponent=({name,bgColor,bColor,textColor,onPress1})=>{
    return(
        <View style={styles.mainItemView}>
        <View style={styles.riderPN}>
          <View style={styles.riderIViews}>
            <Image source={require('../../assets/images/img6.png')} />
            <View>
              <Text style={styles.rName}>Cristopert Dastin</Text>
              <View style={{ flexDirection: 'row', marginLeft: responsiveWidth(1) }}>
                <Image source={require('../../assets/images/miniStar.png')} />
                <Text style={{ fontFamily: Fonts.RobotoBlack }}>5.0</Text>
              </View>
            </View>
          </View>

          <View style={styles.riderIViews}>
            <TouchableOpacity style={styles.iconView}>
              <Icon name='mail-outline' type='material' color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.imgView}>
              <Image source={require('../../assets/images/bike.png')} style={styles.img} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignContent: 'space-between' }}>
          <Text style={styles.rName}>Your Delivery</Text>

          <TouchableOpacity style={[styles.miniButton, {backgroundColor:bgColor,borderColor:bColor}]} onPress={onPress1}>
            <Text style={[styles.buttonN,{color:textColor}]}>{name==='Active'?'Track':name}</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.mainTimeView}>
          <Icon name='calendar-month' type='material' color={COLORS.primary} />
          <Text style={styles.timeText}>Feb 17-20|4 Days {'\n'} Estimateted 8:30pm - 9:15 pm 4 hours</Text>
        </View>
        <View style={styles.line}/>
        <Text style={styles.rName}>Items & Delivery Amount</Text>

        <View style={styles.priceView}>
          <Text style={styles.timeText}>5 Items</Text>
          <Text style={styles.price}>$20</Text>
        </View>
      </View>


    )
}
export default TrackDonationComponent

const styles=StyleSheet.create({

    mainItemView: {
        borderColor: COLORS.grey,
        borderWidth: 0.5,
        borderRadius: responsiveHeight(2),
        marginTop: responsiveHeight(2),
        marginBottom:responsiveHeight(1)
        
      },
      riderPN: {
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: responsiveHeight(1.5),
        paddingVertical: responsiveHeight(1),
        borderRadius: responsiveHeight(2)
      },
      rName: {
        fontSize: FontSizes.large,
        fontFamily: Fonts.RobotoMedium,
        marginLeft: responsiveWidth(2.1),
      },
      iconView: {
        backgroundColor: COLORS.primary,
        padding: responsiveHeight(1),
        borderRadius: responsiveHeight(1),
        marginRight: responsiveHeight(1),
      },
      img: {
        height: responsiveHeight(2.5),
        width: responsiveWidth(6)
      },
      imgView: {
        padding: responsiveHeight(1),
        borderRadius: responsiveHeight(1),
        borderWidth: 0.5,
        borderColor: COLORS.primary,
      },
      riderIViews: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      line: {
        width: responsiveWidth('85%'),
        backgroundColor: COLORS.dark,
        height: .5,
        marginVertical:responsiveHeight(1),
        marginHorizontal:responsiveHeight(1.5),
        alignItems:'center'
      },
      miniButton: {
        backgroundColor: COLORS.bdColor,
        width: responsiveWidth(20),
        borderRadius: responsiveHeight(1),
        justifyContent: 'center',
        borderColor: COLORS.primary,
        borderWidth: 1,
        marginLeft: responsiveWidth(40)
    
      },
      buttonN: {
        textAlign: 'center',
        color: COLORS.dark,
        marginVertical: responsiveHeight(0.7)
      },
      timeText: {
        fontSize: FontSizes.regular,
        color: COLORS.grey
      },
      mainTimeView: {
        flexDirection: 'row',
        paddingHorizontal: responsiveHeight(1)
      },
      priceView:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:responsiveHeight(1),
        marginBottom:responsiveHeight(2)
    },
    price:{
        fontSize:FontSizes.large,
        color:COLORS.primary,
        fontFamily:Fonts.RobotoBold
    },
    
})