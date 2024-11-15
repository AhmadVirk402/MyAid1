import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS,FontSizes,Fonts } from '../../../utilities'
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import { Button, InputField } from '../../../components';
import {useNavigation} from '@react-navigation/native';

const LogIn = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <Image source={require('../../../assets/images/img1.png')} style={styles.img}/>
        <Text style={styles.mainText}>Login in your account</Text>
        <View style={styles.secandryView}>
          <InputField 
          name={'Email'} 
          inputName={'example@email.com'}
          iconName1={'mail'}
          iconType1={'Material'}
          />
           <InputField 
          name={'Email'} 
          inputName={'minimum 8 characters'}
          iconName1={'lock'}
          iconType1={'Material'}
          iconName2={'eye'}
          iconType2={'material-community'}
          />
          <View style={styles.lineView}>
            <View style={styles.markView}></View>
            <View style={styles.textView}>
              <Text style={styles.rememberText}>Remember Me</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('Forgot')}>
              <Text style={styles.forgetText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonView}>
            <Button name={'Login'}/>
          </View>

        </View>
        <View style={styles.lastView}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
          <Text style={styles.secondText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default LogIn
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
     height:responsiveHeight(18),
     width:responsiveWidth(35),
     marginTop:responsiveHeight(6)

  },
  mainText:{
      fontSize:FontSizes.h5,
      fontFamily:Fonts.RobotoBold,
      marginVertical:responsiveHeight(2)
  },
  secandryView:{
    
  },
  lineView:{
   flexDirection:'row',
   marginTop:responsiveHeight(2)
  },
  markView:{
    height:responsiveHeight(2.5),
    width:responsiveWidth(4.5),
    borderWidth:responsiveWidth(0.4),
    borderColor:COLORS.primary,
    marginRight:responsiveWidth(2),
    borderRadius:responsiveWidth(1)
  },
  textView:{
    flexDirection:'row',
  },
  rememberText:{
    fontSize:FontSizes.medium,
    fontFamily:Fonts.RobotoMedium,
  },
  forgetText:{
    fontSize:FontSizes.medium,
    fontFamily:Fonts.RobotoMedium,
    color:COLORS.primary,
    marginLeft:responsiveWidth(17)
  },
  buttonView:{
    marginTop:responsiveHeight(2)
  },
  lastView:{
    flexDirection:'row',
    marginTop:responsiveHeight(22)
  },
  secondText:{
    fontSize:FontSizes.medium,
    fontFamily:Fonts.RobotoBold,
   }

})