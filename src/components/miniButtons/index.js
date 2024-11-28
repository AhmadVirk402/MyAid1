import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FontSizes, Fonts } from '../../utilities'
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,

} from 'react-native-responsive-hook';

const MiniButtons = ({onPress1,onPress2,name1,name2}) => {
  return (
    <View style={styles.buttonView}>
        <TouchableOpacity style={styles.donateButton1} onPress={onPress1}>
        <Text style={styles.donateText1}>{name1}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.donateButton2} onPress={onPress2}>
        <Text style={styles.donateText2}>{name2}</Text>
      </TouchableOpacity>
      </View>
  )
}

export default MiniButtons
 
const styles=StyleSheet.create({


    donateButton1: {
        backgroundColor:COLORS.bdColor,
         borderRadius: responsiveHeight(1),
          paddingVertical: responsiveHeight(1.5),
          width:responsiveWidth(40),
          borderColor:COLORS.primary,
          borderWidth:1
          
         },
      donateText1: { 
        color: COLORS.dark,
        fontSize:FontSizes.large,
        textAlign:'center'
      },
    donateButton2: {
        backgroundColor:COLORS.primary,
         borderRadius: responsiveHeight(1),
          paddingVertical: responsiveHeight(1.5),
          width:responsiveWidth(40),
          
         },
      donateText2: { 
        color: COLORS.white,
        fontSize:FontSizes.large,
        textAlign:'center'
      },
      buttonView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:responsiveWidth(8)
      }
    
    })