import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { COLORS, FontSizes, Fonts } from '../../../utilities'
import {
    widthPercentageToDP as responsiveWidth,
    heightPercentageToDP as responsiveHeight,
    responsiveFont,

} from 'react-native-responsive-hook';
import { Icon } from '@rneui/themed';
import { Button, GoBack, MainItemBox, Radiobutton, InputField } from '../../../components';
import { useNavigation } from '@react-navigation/native';




const AddDonationScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <GoBack name={'Add Donation Details'} />
            <View style={styles.mainView}>

                <View>
                    <Text style={styles.startText}>Items</Text>
                    <MainItemBox />
                </View>


                <View>
                    <Text style={styles.startText2}>Donate to</Text>

                    <View>
                        <Radiobutton />

                    </View>
                </View>


                <View>
                    <Text style={styles.startText2}>Location</Text>
                    <InputField
                        name={'Pick up'}
                        inputName={'Add Address'}
                        iconName1={'location-pin'}
                        iconName2={'keyboard-arrow-down'}
                        iconType2={'MaterialIcons'}
                        onPress={() => navigation.navigate('LocationScreen')}
                    />

                    <InputField
                        name={'Dropoff'}
                        inputName={'Add Address'}
                        iconName1={'location-pin'}
                        iconName2={'keyboard-arrow-down'}
                        iconType2={'MaterialIcons'}
                        onPress={() => navigation.navigate('DropOffLocationScreen')}
                    />

                </View>



                <View style={styles.buttonView} >
                    <Button name={'next'} onPress={() => navigation.navigate('DonationConfirmScreen')} />
                </View>







            </View>
        </View>
    )
}

export default AddDonationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    mainView: {
        paddingHorizontal: responsiveHeight(4),
        marginBottom: responsiveHeight(2)
    },
    startText: {
        fontSize: FontSizes.h5,
        fontFamily: Fonts.RobotoBold,
        marginVertical: responsiveHeight(1.5)
    },

    startText2: {
        fontSize: FontSizes.h5,
        fontFamily: Fonts.RobotoBold,
        marginTop: responsiveHeight(1),

    },

    buttonView: {
        marginTop: responsiveHeight(0.5)
    }


})