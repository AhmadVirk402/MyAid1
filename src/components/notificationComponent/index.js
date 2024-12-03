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

const NotificationComponent = ({borderTopLeftRadius,borderTopRightRadius,borderBottomRightRadius,borderBottomLeftRadius,borderBottomWidth}) => {
  return (
    <View  style={[styles.notificationView,
    {
        borderTopLeftRadius:borderTopLeftRadius,
        borderTopRightRadius:borderTopRightRadius,
        borderBottomRightRadius:borderBottomRightRadius,
        borderBottomLeftRadius:borderBottomLeftRadius,
        borderBottomWidth:borderBottomWidth
        }]}>
    <View>
      <Image source={require('../../assets/images/img6.png')}/>
    </View>
    <View>
      <Text style={styles.nText1}>Lorem ipsum dolor sit ame...</Text>
      <Text style={styles.nText2}>Ut sodales, ex sit amet consectetur accumsan,{'\n'} 
        nibh ex sollicitudin metus, volutpat lacini... </Text>
      <Text style={styles.nText2}>9:34am</Text>
    </View>
    <View style={{justifyContent:'center'}}>
      <Icon name='keyboard-arrow-right' type='material'/>
    </View>
  </View>
  )
}

export default NotificationComponent

const styles=StyleSheet.create({
mainText:{
 fontSize:FontSizes.h5,
 fontFamily:Fonts.RobotoMedium,
 marginVertical:responsiveHeight(2)
},
notificationView:{
  flexDirection:'row',
  width:responsiveWidth('93%'),
  justifyContent:'space-between',
  backgroundColor:COLORS.white,
  padding:responsiveWidth(2),
  borderBottomColor:COLORS.grey,
  
},
nText1:{
  fontSize:FontSizes.large,
  fontFamily:Fonts.RobotoMedium
},
nText2:{
  fontSize:FontSizes.small,
  fontFamily:Fonts.RobotoLight
},

})