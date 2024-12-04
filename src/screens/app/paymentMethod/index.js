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

const PaymentMethod = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <GoBack name={'Payment Mathod'} />
            <View style={styles.mainContainer}>



                <View>

                    <View style={styles.locView}>
                        <View style={styles.locViewIn}>
                            <Icon name='location-pin' type='material' />
                            <View>
                                <Text style={styles.locText}>Card 1</Text>
                                <Text style={styles.locTextin}>**** **** **** 1231 {'\n'}Expiry: 03/30</Text>
                            </View>
                            <TouchableOpacity>
                                <Image source={require('../../../assets/images/Pencil.png')} style={styles.icons} />
                            </TouchableOpacity>
                        </View>

                    </View>



                    <View style={styles.locView}>
                        <View style={styles.locViewIn}>
                            <Icon name='location-pin' type='material' />
                            <View>
                                <Text style={styles.locText}>Card 2</Text>
                                <Text style={styles.locTextin}>**** **** **** 1231 {'\n'}Expiry: 03/30</Text>
                            </View>
                            <TouchableOpacity>
                                <Image source={require('../../../assets/images/Pencil.png')} style={styles.icons} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>



                <View style={styles.line} />

                <TouchableOpacity style={styles.newAddress} onPress={()=>navigation.navigate('AddNewAddress')}>
                    <Image source={require('../../../assets/images/plus.png')} style={{ tintColor: COLORS.primary, width: 25, height: 25 }} />
                    <Text style={{ color: COLORS.primary, fontSize: FontSizes.large }}>Add new card</Text>
                </TouchableOpacity >


            </View>
        </View>
    )
}

export default PaymentMethod
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
    line: {
        width: responsiveWidth('100%'),
        borderBottomWidth: 0.5,
        borderBottomColor: COLORS.grey,
        marginTop: responsiveHeight(2),


    },
    locView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        borderWidth: 0.4,
        padding: responsiveHeight(2.9),
        borderRadius: responsiveWidth(3),
        marginTop: responsiveHeight(1.9)


    },
    locViewIn: {
        flexDirection: 'row'
    },
    locText: {
        marginLeft: responsiveWidth(2),
        fontSize: FontSizes.medium,
        fontFamily: Fonts.RobotoBlack,
        width: responsiveWidth('68%')
    },
    locTextin: {
        marginLeft: responsiveWidth(2),
        fontSize: FontSizes.medium,
        color: COLORS.dark

    },
    itemImg: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemStyle: {
        width: responsiveWidth(26),
    },
    newAddress: {
        flexDirection: 'row',
        marginTop: responsiveHeight(2),
    },


})