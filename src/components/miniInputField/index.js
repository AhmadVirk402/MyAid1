import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, Fonts, FontSizes } from '../../utilities';
import { Icon } from '@rneui/themed';
import {
    widthPercentageToDP as responsiveWidth,
    heightPercentageToDP as responsiveHeight,
    responsiveFont,
  } from 'react-native-responsive-hook';
const MiniInputField = ({ name, iconName1,iconType1, iconName2,iconType2, inputName,onPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.inputText}>{name}</Text>

            <View style={styles.textInput}>

                <Icon name={iconName1} type={iconType1} size={25} color={COLORS.dark} style={styles.icon} />
                <TextInput placeholder={inputName} />
                <TouchableOpacity onPress={onPress}>
                {
                    iconName2?
                    <Icon name={iconName2||'eye'} type={iconType2||'material-community'} size={25} color={COLORS.dark} style={styles.secondIcon} />
                    :
                    null
                }
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default MiniInputField
const styles = StyleSheet.create({
    inputText: {
        color: COLORS.dark,
        fontSize: FontSizes.regular,
        marginTop: responsiveHeight(1),
        marginBottom:responsiveHeight(0.5),

    },
    icon: {
        marginVertical: responsiveHeight(1.5),
        marginHorizontal:responsiveWidth(2),

    },

    secondIcon: {
        marginVertical: responsiveHeight(1.5),
        marginHorizontal: responsiveWidth(1),
    },
    textInput: {
        borderWidth:responsiveWidth(0.2),
        borderColor: COLORS.grey,
        borderRadius: responsiveHeight(1.5),
        height: responsiveHeight(7),
        flexDirection: 'row',
        paddingLeft: responsiveWidth(1),
        width:responsiveWidth(40)
    }
})