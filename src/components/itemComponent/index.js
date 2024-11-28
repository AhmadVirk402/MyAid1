import React,{useState}from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, Fonts, FontSizes } from '../../utilities';
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';

const ItemComponent = ({name,img,onPress,isPressed}) => {
  // const [isPressed, setIsPressed] = useState(false);
  return (
    <TouchableOpacity
    
    onPress={() => {
      // setIsPressed(!isPressed)
      onPress&&onPress()
    }} style={styles.category}>
    <View style={[styles.categoryimg,
      isPressed && styles.categoryimg2,
    ]}>
    <Image source={img}
    style={isPressed && styles.img2}
    />
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
          categoryimg2: { 
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor: COLORS.primary,
            width:responsiveWidth(20),
            height:responsiveHeight(10),
            borderRadius:responsiveHeight(5),
            borderColor:COLORS.primary,
            borderWidth:2
            },
            img2:{
              tintColor:COLORS.white
            },
          itemText:{
            fontSize:FontSizes.regular,
            fontFamily:Fonts.RobotoMedium
          },
})