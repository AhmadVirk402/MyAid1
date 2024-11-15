import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS,FontSizes,Fonts } from '../../../utilities'
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import { Button, GoBack, InputField, MiniInputField, PictureView } from '../../../components';
import {useNavigation} from '@react-navigation/native';


const SecondSetUp = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <GoBack name={'Set Up Account'}/>
      <View style={styles.mainView}>

        <View style={styles.views}>
            <View style={styles.activeView}></View>
            <View style={styles.activeView}></View>
            <View style={styles.nonActiveView}></View>
        </View>

        <View style={styles.textView}>
            <Text style={styles.mainText}>National ID Card  Info🪪</Text>
            <Text style={styles.regularText}>Regulations require you to upload national identity card. Don't worry, your data will stay safe and private.</Text>
        </View>
        <PictureView name={'ID Picture Front'}/>
        <PictureView name={'ID Picture Back'}/>


        <View style={styles.buttonView}>
            <Button name={'Next'} onPress={()=>navigation.navigate('ThirdSetUp')}/>
        </View>

      </View>
    </View>
  )
}

export default SecondSetUp

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
        textView:{
            marginHorizontal:responsiveWidth(5)
        },
        mainText:{
            fontSize:FontSizes.h4,
            fontFamily:Fonts.RobotoBold
        },
        regularText:{
            fontSize:FontSizes.regular,
            fontFamily:Fonts.RobotoMedium,
            marginTop:responsiveHeight(1)
        },

    buttonView:{
     marginTop:responsiveHeight(10.5)
    }

  
  })