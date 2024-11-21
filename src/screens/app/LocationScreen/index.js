import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FontSizes, Fonts } from '../../../utilities'
import {
    widthPercentageToDP as responsiveWidth,
    heightPercentageToDP as responsiveHeight,
    responsiveFont,
} from 'react-native-responsive-hook';
import { Button, GoBack, InputField, MiniInputField } from '../../../components';
import { useNavigation } from '@react-navigation/native';


const LocationScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <GoBack name={'Location'} />

            <View style={styles.mainView}>
                <View style={styles.startTextView}>
                    <Text style={styles.startText}>Pickup Location</Text>
                </View>


                <View style={styles.mainInputView}>

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
                    <Button name={'Add'} onPress={()=>navigation.navigate('AddDonationScreen')}/>
                </View>

            </View>
        </View>
    )
}

export default LocationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    mainView: {
        alignContent: 'center',
        alignItems: 'center',
    },
    startTextView:{
        width:responsiveWidth('85%')
    },
    startText: {
        fontSize: FontSizes.h5,
        fontFamily: Fonts.RobotoBold,
        marginVertical: responsiveHeight(1.5)
    },

    views: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: responsiveHeight(3),
        width: responsiveWidth(60)
    },

  

  
    inputView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: responsiveWidth('85%'),
    },

    buttonView: {
        marginTop: responsiveHeight(41)
    }


})