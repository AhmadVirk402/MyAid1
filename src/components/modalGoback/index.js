import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, Fonts, FontSizes } from '../../utilities'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';

const ModalGoBack = ({name,onPress}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.header}>
     <View style={styles.arrowBackView}>
      <TouchableOpacity onPress={onPress} >
     <Icon name="arrow-back" size={25} color={COLORS.dark} />
     </TouchableOpacity>
     </View>
     <View style={styles.textView}>
       <Text style={styles.text}>{name}</Text>
     </View>
   
    </View>

    
 )
}

export default ModalGoBack

const styles=StyleSheet.create({
 header:{
   flexDirection:'row',
   marginVertical:responsiveHeight(4),
   paddingHorizontal: responsiveWidth(10),
   width:responsiveWidth('100%'),
  
  
 },

 text:{
   fontSize:FontSizes.h5,
   fontFamily:Fonts.RobotoBold,
  marginLeft:responsiveWidth('15%'),
   textAlign:'center'
   
 },
 
})