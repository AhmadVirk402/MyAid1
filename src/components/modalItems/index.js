import React,{useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, Fonts, FontSizes } from '../../utilities';
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ModalItem = ({name,img,onPress,}) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <TouchableOpacity  
    onPress={() => setIsPressed(!isPressed)||onPress}

    style={styles.category}>
    <View style={[
      styles.categoryimg,
      { backgroundColor: isPressed ? COLORS.primary : COLORS.white },]}>
    <Image source={img} style={{tintColor:isPressed? COLORS.white:COLORS.primary}} />
    </View>
    <Text style={styles.itemText}>{name}</Text>
  </TouchableOpacity>

  )
}

export default ModalItem

const styles=StyleSheet.create({
    category: { 
        alignItems: 'center',
         marginBottom: responsiveHeight(3),
        borderRadius:responsiveHeight(5),
        marginHorizontal:responsiveWidth(1),
        marginTop:responsiveHeight(0)
        },
        categoryimg: { 
          alignItems: 'center',
          justifyContent:'center',
          backgroundColor: COLORS.white,
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