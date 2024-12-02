import { View, Text, StyleSheet } from 'react-native'
import { COLORS,FontSizes,Fonts } from '../../../utilities'
import React from 'react'
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import { GoBack } from '../../../components'
import { Image } from 'react-native-animatable';
import { Icon } from '@rneui/base';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <GoBack name={'Notifications'}/>
      <View style={styles.mainContainer}>
      <Text style={styles.mainText}>Today</Text>

      <View  style={styles.notificationView}>
        <View>
          <Image source={require('../../../assets/images/img6.png')}/>
        </View>
        <View>
          <Text style={styles.nText1}>Lorem ipsum dolor sit ame...</Text>
          <Text style={styles.nText2}>Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh... </Text>
          <Text style={styles.nText2}>9:34am</Text>
        </View>
        <View style={{justifyContent:'center'}}>
          <Icon name='keyboard-arrow-right' type='material'/>
        </View>
      </View>



      </View>
    </View>
  )
}

export default NotificationScreen

const styles=StyleSheet.create({
  container: {
    flex: 1,
},
mainContainer:{
  paddingHorizontal:responsiveWidth(4)
},
mainText:{
 fontSize:FontSizes.h5,
 fontFamily:Fonts.RobotoMedium,
 marginVertical:responsiveHeight(2)
},
notificationView:{
  flexDirection:'row',
  width:responsiveWidth('80%'),
  justifyContent:'space-between'
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