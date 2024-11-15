import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS,FontSizes,Fonts } from '../../../utilities'
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import { Button, GoBack, InputField, MiniInputField } from '../../../components';
import {useNavigation} from '@react-navigation/native';


const SetUp = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <GoBack name={'Set Up Account'}/>
      <View style={styles.mainView}>

        <View style={styles.views}>
            <View style={styles.activeView}></View>
            <View style={styles.nonActiveView}></View>
            <View style={styles.nonActiveView}></View>
        </View>

        <View>
            <Image source={require('../../../assets/images/img3.png')}/>
        </View>

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

            <View style={styles.inputView}>
                <MiniInputField 
                name={'Age'}
                inputName={'20/12/24'}
                iconName1={'calendar-month'}
                iconType1={'MaterialIcon'}
                />
                <MiniInputField
                name={'Gender'}
                inputName={'Female'}
                iconName1={'person'}
                iconName2={'keyboard-arrow-down'}
                iconType2={'MaterialIcons'}
                />
            </View>
            <InputField 
            name={'Address'} 
            inputName={'Add Address'}
            iconName1={'location-pin'}
            iconName2={'keyboard-arrow-down'}
            iconType2={'MaterialIcons'}
            onPress={()=>navigation.navigate('AddAddress')}
            />


             <View style={styles.inputView}>
                <MiniInputField 
                name={'Phone Number'}
                inputName={'+880'}
                iconName1={'call'}
                />
                <MiniInputField
                inputName={'   017741345'}
                />
            </View>

        </View>
        <View style={styles.buttonView}>
            <Button name={'Next'} onPress={()=>navigation.navigate('SecondSetUp')}/>
        </View>

      </View>
    </View>
  )
}

export default SetUp

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
    },
    mainView:{
        alignContent:'center',
        alignItems:'center',
    },
    views:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:responsiveHeight(4),
    width:responsiveWidth(60)
    },
    activeView:{
        height:responsiveHeight(1),
        width:responsiveWidth(18),
        backgroundColor:COLORS.primary,
        borderRadius:responsiveWidth(2.5)
    },
    nonActiveView:{
        height:responsiveHeight(1),
        width:responsiveWidth(18),
        backgroundColor:COLORS.light,
        borderRadius:responsiveWidth(2.5)
    },
    viewsMargin:{
        marginHorizontal:responsiveWidth(2)
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
     marginTop:responsiveHeight(8)
    }

  
  })