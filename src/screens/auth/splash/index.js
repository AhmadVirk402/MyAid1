import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import { COLORS, Fonts, FontSizes } from '../../../utilities'
import {
    widthPercentageToDP as responsiveWidth,
    heightPercentageToDP as responsiveHeight,
    responsiveFont,
} from 'react-native-responsive-hook';
const Splash = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
      <Image source={require('../../../assets/images/img1.png')} style={styles.img}/>
      <Text style={styles.mainText}>My Aid</Text>
      </View>
      <Text style={styles.secondryText}>
      A cloth donation App
      </Text>
    </View>
  )
}

export default Splash
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        justifyContent:'center',
    },
    mainView:{
        alignContent:'center',
        alignItems:'center',
    },
    img:{
       height:responsiveHeight(20),
       width:responsiveWidth(45),
       marginTop:responsiveHeight(42)

    },
    mainText:{
        fontSize:FontSizes.h5,
        fontFamily:Fonts.RobotoBold,
        marginTop:responsiveHeight(2)
    },
    secondryText:{
        fontSize:FontSizes.medium,
        fontFamily:Fonts.RobotoBlack,
        textAlign:'center',
        marginTop:responsiveHeight(22)
    }
})