import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, Fonts, FontSizes } from '../../utilities';
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';

const ItemComponent = ({name,img,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.category}>
    <View style={styles.categoryimg}>
    <Image source={img}/>
    </View>
    <Text style={styles.itemText}>{name}</Text>
  </TouchableOpacity>

  )
}

export default ItemComponent

const styles=StyleSheet.create({
    category: { 
        alignItems: 'center',
         marginBottom: responsiveHeight(3),
        borderRadius:responsiveHeight(5)
        },
        categoryimg: { 
          alignItems: 'center',
          justifyContent:'center',
          backgroundColor: COLORS.bdColor,
          width:responsiveWidth(20),
          height:responsiveHeight(10),
          borderRadius:responsiveHeight(5),
          borderColor:COLORS.primary,
          borderWidth:2
          },
          itemText:{
            fontSize:FontSizes.regular,
            fontFamily:Fonts.RobotoMedium
          },
})