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


const AddAddress = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <GoBack name={'Set Up Account'}/>
      <View style={styles.mainView}>


        <View style={styles.mainInputView}>


        <InputField 
            name={'Country'} 
            inputName={'Select here'}
            iconName2={'keyboard-arrow-down'}
            iconType2={'MaterialIcons'}
            />

             <InputField 
            name={'Street'} 
            inputName={'Type here'}
            />

            
            <View style={styles.inputView}>
                <MiniInputField 
                name={'City'}
                inputName={'Select'}
                iconName1={'person'}
                iconName2={'keyboard-arrow-down'}
                iconType2={'MaterialIcons'}
                />
                <MiniInputField
                name={'State'}
                inputName={'Select'}
                iconName1={'person'}
                iconName2={'keyboard-arrow-down'}
                iconType2={'MaterialIcons'}
                />
            </View>

            <View style={styles.inputView}>
                <MiniInputField 
                name={'ZIP / Postal Code'}
                inputName={'Select'}
                iconName1={'person'}
                iconName2={'keyboard-arrow-down'}
                iconType2={'MaterialIcons'}
                />
                <MiniInputField
                name={'Country'}
                inputName={'Select'}
                iconName1={'person'}
                iconName2={'keyboard-arrow-down'}
                iconType2={'MaterialIcons'}
                />
            </View>
          
          

        </View>
        <View style={styles.buttonView}>
            <Button name={'Next'}/>
        </View>

      </View>
    </View>
  )
}

export default AddAddress

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
    viewsMargin:{
        marginHorizontal:responsiveWidth(2)
    },
    mainInputView:{
        marginTop:responsiveHeight(3),
    },

    nonActiveView:{
        height:responsiveHeight(1),
        width:responsiveWidth(18),
        backgroundColor:COLORS.light,
        borderRadius:responsiveWidth(2.5)
    },
    inputView:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:responsiveWidth('85%'),
    },

    buttonView:{
     marginTop:responsiveHeight(33)
    }

  
  })