import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, Fonts, FontSizes } from '../../utilities';

import {
    widthPercentageToDP as responsiveWidth,
    heightPercentageToDP as responsiveHeight,
    responsiveFont,
} from 'react-native-responsive-hook';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const PictureView = ({name}) => {
  return (
    <View style={styles.mainPicView}>
                  <Text style={styles.picText}>{name}</Text>
                  <TouchableOpacity>
                  <View style={styles.PicView}>
                    <Image source={require('../../assets/images/img4.png')}/>
                  </View>
                  </TouchableOpacity>
                 </View>
  )
}

export default PictureView

const styles=StyleSheet.create({
mainPicView:{
    marginTop:responsiveHeight(2.5)
  },  
  picText:{
    fontSize:FontSizes.h6,
    fontFamily:Fonts.RobotoBold
  },
 PicView:{
  height:responsiveHeight(17),
  width:responsiveWidth(86),
  borderWidth:responsiveWidth(0.4),
  borderColor:Colors.primary,
  borderRadius:responsiveWidth(3),
  justifyContent:'center',
  marginTop:responsiveHeight(2)
 },
})