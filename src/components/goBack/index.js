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
const GoBack = ({name}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     <View style={styles.header}>
      <View style={styles.arrowBackView}>
       <TouchableOpacity onPress={() => navigation.goBack('')} >
      <Icon name="arrow-back" size={25} color={COLORS.dark} />
      </TouchableOpacity>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>{name}</Text>
      </View>
    
     </View>
     <View style={styles.line}></View>
     
    </View>
  )
}

export default GoBack

const styles=StyleSheet.create({
  header:{
    flexDirection:'row',
    marginTop:responsiveHeight(2.5),
    marginLeft:responsiveWidth(4),
   
  },

  text:{
    fontSize:FontSizes.h5,
    fontFamily:Fonts.RobotoBold,
   marginLeft:responsiveWidth('20%'),
    textAlign:'center'
    
  },
  line:{
    borderWidth:responsiveWidth(.05),
    borderBottomColor:COLORS.grey,
    marginTop:responsiveHeight(2)
  }
})