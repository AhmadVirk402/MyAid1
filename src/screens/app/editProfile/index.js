import { View, Text, StyleSheet,FlatList, TouchableOpacity } from 'react-native'
import { COLORS,FontSizes,Fonts } from '../../../utilities'
import React from 'react'
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import { GoBack, NotificationComponent, ProfileItemComponent,InputField,Button,MiniInputField } from '../../../components'
import { Image } from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';

const EditProfile = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <GoBack name={'Profile'}/>
    <View style={styles.mainContainer}>
      <View style={styles.profileView}>
        <Image source={require('../../../assets/images/profileImage.png')}/>
       
        <TouchableOpacity style={styles.iconView} onPress={()=>navigation.navigate('EditProfile')}>
            <Image source={require('../../../assets/images/Pencil.png')} style={{tintColor:COLORS.white,height:16,width:16}}/>
        </TouchableOpacity>

      </View>
      <View style={styles.line}/>



      <View style={styles.mainInputView}>
            <View style={styles.inputView}>
                <MiniInputField 
                name={'First Name'}
                inputName={'Type here'}
                iconName1={'person'}
                />
                <MiniInputField
                name={'Second Name'}
                inputName={'Type here'}
                iconName1={'person'}
                />
            </View>

            <InputField 
            name={'Email'} 
            inputName={'example@email.com'}
            iconName1={'location-pin'}
            />


             <View style={styles.inputView}>
                <MiniInputField 
                name={'Phone Number'}
                inputName={'+880'}
                iconName1={'call'}
                iconName2={'keyboard-arrow-down'}
                iconType2={'MaterialIcons'}
                />
                <MiniInputField
                inputName={'   017741345'}
                />
            </View>

        </View>
        <View style={styles.buttonView}>
            <Button name={'Save Changes'} onPress={()=>navigation.goBack('')}/>
        </View>


     



      </View>
    </View>
  )
}

export default EditProfile
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
    },
    mainContainer:{
        marginHorizontal:responsiveWidth(5),
        alignItems:'center',
        alignContent:'center'
    },
    profileView:{
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'center',
        marginVertical:responsiveHeight(2.5)
    },
    iconView:{
        backgroundColor:COLORS.primary,
        padding:responsiveHeight(.5),
        borderRadius:responsiveHeight(2.5),
        marginLeft:responsiveHeight(-3)
    },
    line:{
        width:responsiveWidth('100%'),
        borderBottomWidth:0.5,
        borderBottomColor:COLORS.grey,
        marginLeft:responsiveWidth(-4)

    },
    mainInputView:{
        marginTop:responsiveHeight(3),
    },

   
    inputView:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:responsiveWidth('85%'),
    },

    buttonView:{
     marginTop:responsiveHeight(28)
    }





})