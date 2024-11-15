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

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <Image source={require('../../../assets/images/img1.png')} style={styles.img}/>
        <Text style={styles.mainText}>Sign up to your account</Text>
        <View style={styles.secandryView}>
          <InputField 
          name={'Email'} 
          inputName={'example@email.com'}
          iconName1={'mail'}
          iconType1={'Material'}
          />
           <InputField 
          name={'Password'} 
          inputName={'minimum 8 characters'}
          iconName1={'lock'}
          iconType1={'Material'}
          iconName2={'eye'}
          iconType2={'material-community'}
          />
          <InputField 
          name={'Confirm Password'} 
          inputName={'minimum 8 characters'}
          iconName1={'lock'}
          iconType1={'Material'}
          iconName2={'eye'}
          iconType2={'material-community'}
          />
          <View style={styles.lineView}>
            <View style={styles.markView}></View>
            <View style={styles.textView}>
              <Text style={styles.rememberText}>I agree with</Text>
              <TouchableOpacity>
              <Text style={styles.forgetText}>T&C & Privacy Policy</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonView}>
            <Button name={'Sign Up'} onPress={()=>navigation.navigate('SetUp')}/>
          </View>

        </View>
        <View style={styles.lastView}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('LogIn')}>
          <Text style={styles.secondText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SignUp
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
    borderWidth:responsiveWidth(0.5),
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
    borderBottomColor:COLORS.primary,
    borderBottomWidth:responsiveWidth(0.4)
    
  },
  buttonView:{
    marginTop:responsiveHeight(2)
  },
  lastView:{
    flexDirection:'row',
    marginTop:responsiveHeight(11)
  },
  secondText:{
    fontSize:FontSizes.medium,
    fontFamily:Fonts.RobotoBold,
   }

})