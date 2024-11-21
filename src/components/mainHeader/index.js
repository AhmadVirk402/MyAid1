import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, Fonts, FontSizes } from '../../utilities';
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
const MainHeader = () => {
  return (
    <View style={styles.header}>
        <View style={styles.logoStyle}>
          <Image source={require('../../assets/images/img1.png')} style={styles.logoImg}/>
          <Text style={styles.logoText}>My Aid</Text>
        </View>
        <View style={styles.logoStyle}>

         <TouchableOpacity>
        <View style={styles.headerIcon}>
        <Ionicons name="notifications" size={15} color={COLORS.dark} />
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.imgBorder}>
          <Image source={require('../../assets/images/img6.png')}/>
        </View>
        </TouchableOpacity>

        </View>
      </View>

  )
}

export default MainHeader

const styles=StyleSheet.create({
    header: { 
        flexDirection: 'row',
         justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth:0.7,
          borderColor:COLORS.grey,
          padding:responsiveWidth(4),
          backgroundColor:COLORS.white,
        },
      logoStyle:{
        flexDirection:'row',
        alignItems:'center'
      },
      logoImg:{
        width:responsiveWidth(13),
        height:responsiveHeight(6)
      },
      logoText:{
        fontSize:FontSizes.h5,
        fontFamily:Fonts.RobotoMedium,
        marginLeft:responsiveWidth(2)
      },
      headerIcon:{
        backgroundColor:COLORS.light,
        height:responsiveHeight(6),
        width:responsiveWidth(12),
        borderRadius:responsiveHeight(7),
        justifyContent:'center',
        alignItems:'center',
        
      },
      imgBorder:{
        borderColor:COLORS.primary,
        borderWidth:3,
        borderRadius:responsiveHeight(7),
        padding:responsiveHeight(.1),
        marginLeft:responsiveWidth(2)
      },
    })