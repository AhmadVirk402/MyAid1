import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS,FontSizes,Fonts } from '../../utilities';
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';

const Button = ({name,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
    <Text style={styles.buttonText}>{name}</Text>
  </View>
  </TouchableOpacity>
  )
}

export default Button

const styles= StyleSheet.create({
    button:{
        width:responsiveWidth('85%'),
        height:responsiveHeight(6.5),
        backgroundColor:COLORS.primary,
        borderRadius:responsiveWidth(2.5),
        justifyContent:'center',
        marginTop:responsiveHeight(2.5),
       
      },
      buttonText:{
        fontSize:FontSizes.h6,
        color:COLORS.white,
        fontFamily:Fonts.RobotoRegular,
        textAlign:'center',
      },
})