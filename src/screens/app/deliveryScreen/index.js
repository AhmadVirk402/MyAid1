import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FontSizes, Fonts } from '../../../utilities'
import {
    widthPercentageToDP as responsiveWidth,
    heightPercentageToDP as responsiveHeight,
    responsiveFont,

} from 'react-native-responsive-hook';
import { Icon } from '@rneui/themed';
import { Button, GoBack, MainItemBox, Radiobutton, InputField } from '../../../components';
import { useNavigation } from '@react-navigation/native';




const DeliveryScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <GoBack name={'Delivery'} />
            <View style={styles.mainView}>





            </View>
        </View>
    )
}

export default DeliveryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingBottom: responsiveHeight(13)

    },
  


})