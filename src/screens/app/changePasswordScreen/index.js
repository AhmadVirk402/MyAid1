import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { COLORS, FontSizes, Fonts } from '../../../utilities'
import React from 'react'
import {
    widthPercentageToDP as responsiveWidth,
    heightPercentageToDP as responsiveHeight,
    responsiveFont,
} from 'react-native-responsive-hook';
import { GoBack, NotificationComponent, ProfileItemComponent, InputField, Button, MiniInputField } from '../../../components'
import { Image } from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import { goBack } from '../../../navigation/rootNavigation';

const ChangePasswordScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <GoBack name={'Add New Address'} />
            <View style={styles.mainContainer}>

                <View style={styles.mainInputView}>



                <InputField
                        name={'Current Password'}
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
                    <InputField
                        name={'Confirm New Password'}
                        inputName={'minimum 8 characters'}
                        iconName1={'lock'}
                        iconType1={'Material'}
                        iconName2={'eye'}
                        iconType2={'material-community'}
                    />






                </View>
                <View style={styles.buttonView}>
                    <Button name={'Save Changes'} onPress={() => navigation.goBack('')} />
                </View>




            </View>
        </View>
    )
}

export default ChangePasswordScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    mainContainer: {
        marginHorizontal: responsiveWidth(5),
        alignItems: 'center',
        alignContent: 'center'
    },
    mainInputView: {
        marginTop: responsiveHeight(1)
    },
    inputView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: responsiveWidth('85%'),
    },

    buttonView: {
        marginTop: responsiveHeight(45)
    }


})