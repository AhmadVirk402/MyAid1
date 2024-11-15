import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS,FontSizes,Fonts } from '../../../utilities'
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import { Button, GoBack, InputField } from '../../../components';
import {useNavigation} from '@react-navigation/native';

const Forgot = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <GoBack name={'Password Reset'}/>
    <View >
        <View style={styles.mainView}>
            <Image source={require('../../../assets/images/img2.png')}/>
            <View>
                <Text style={styles.mainText}>To reset your password please enter you registered email address to receive a password reset link.</Text>
            </View>
            <View style={styles.inputView}>
            <InputField 
          name={'Email'} 
          inputName={'example@email.com'}
          iconName1={'mail'}
          iconType1={'Material'}
          />
          </View>
          <Button name={'Send Link'}/>
        </View>
     
    </View>
    </View>
  )
}

export default Forgot
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
    },
    mainView:{
        alignItems:'center',
        marginTop:responsiveHeight(4),
        marginBottom:responsiveHeight(2),
        paddingHorizontal:responsiveWidth(5)
    },
    mainText:{
        fontSize:FontSizes.regular,
        textAlign:'center',
        fontFamily:Fonts.RobotoMedium,
        marginTop:responsiveHeight(2),
       
    },
    inputView:{
        marginTop:responsiveHeight(3),
    }
})