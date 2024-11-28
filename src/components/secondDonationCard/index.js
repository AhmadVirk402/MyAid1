import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { COLORS, Fonts, FontSizes } from '../../utilities';
import {
    widthPercentageToDP as responsiveWidth,
    heightPercentageToDP as responsiveHeight,
    responsiveFont,
} from 'react-native-responsive-hook';

const SecondDonationCard = ({ img1, name, raisedOf, raisedGoal, onPress }) => {
    return (
        <View style={styles.donateCard}>
            <Image source={img1} style={styles.cardImage} />

            <View style={{ padding: 10 }}>
                <Text style={styles.cardTitle}>{name}</Text>
            </View>
            <View style={styles.cardFooter}>
                <View >
                    <Text style={styles.realAmount}>Participants</Text>
                    <View style={styles.cardpics}>
                        <Text style={styles.people}>5 People Donated</Text>
                        <View style={styles.addView}>
                            <Image source={require('../../assets/images/plus.png')} style={styles.add} />
                        </View>
                        <Image source={require('../../assets/images/cardpic3.png')} style={styles.cardpic2} />
                        <Image source={require('../../assets/images/cardpic2.png')} style={styles.cardpic2} />
                        <Image source={require('../../assets/images/cardpic1.png')} style={styles.cardpic1} />

                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: responsiveWidth(1) }}>
                        <Text style={styles.amount}>Raised of </Text>
                        <Text style={styles.realAmount}>{raisedOf}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.raise} >
                            <Text style={styles.amount} >
                                Raise Goal
                            </Text>
                        </View>
                        <View>
                            <Text>{raisedGoal}</Text>
                        </View>
                    </View>

                </View>
                <TouchableOpacity style={styles.donateButton} onPress={onPress}>
                    <Text style={styles.donateText}>View Details</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SecondDonationCard;

const styles = StyleSheet.create({
    donateCard: {
        backgroundColor: COLORS.white,
        borderRadius: responsiveHeight(1),

        marginVertical: responsiveWidth(2.5),
        shadowColor: COLORS.grey,
        borderColor: COLORS.grey,
        borderWidth: 0.5,
        shadowOpacity: 50,
        shadowOffset: 50,
    },
    cardImage: {
        width: '100%',
        height: responsiveHeight(13),
        borderTopLeftRadius: responsiveWidth(2.5),
        borderTopRightRadius: responsiveWidth(2.5),
    },
    cardimg2: {
        marginVertical: responsiveHeight(0.5),
        alignContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'


    },
    spacer: {
        marginHorizontal: responsiveWidth(1)
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: FontSizes.h5,
        marginTop: responsiveHeight(0.1)
    },

    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 0.5,
        marginTop: responsiveHeight(0.5),
        borderColor: COLORS.grey,
        padding: responsiveHeight(1)
    },
    cardpics: {
        flexDirection: 'row-reverse',
        marginVertical: responsiveHeight(1),
        width: responsiveWidth(55),
        alignItems:'center'
    },
    cardpic1: {

    },
    cardpic2: {
        marginLeft: -10,
    },
    addView:{
        backgroundColor:COLORS.primary,
        padding:responsiveHeight(1),
        width:responsiveWidth(7),
        alignItems:'center',
        borderRadius:responsiveHeight(3.5),
        marginLeft:-10
       },
       add:{
        height:responsiveHeight(1.5),
        width:responsiveWidth(4)
       },
       people:{ 
        fontSize:FontSizes.medium,
        fontFamily:Fonts.RobotoMedium,
        textAlign:'center',
        marginLeft:responsiveHeight(1)
       },
    amount: {
        fontFamily: Fonts.RobotoBold,
        color: COLORS.green,
        fontSize: FontSizes.regular,
        textAlign: 'center'
    },
    realAmount: {
        fontFamily: Fonts.RobotoBold,
        color: COLORS.dark,
        fontSize: FontSizes.regular
    },
    raise: {
        color: COLORS.green,
        backgroundColor: COLORS.bgColor2,
        fontSize: FontSizes.small,
        width: responsiveWidth(20),
        height: responsiveHeight(3),
        borderRadius: responsiveWidth(2.5),
        textAlign: 'center',
        justifyContent: 'center'
    },
    donateButton: {
        backgroundColor: COLORS.primary,
        borderRadius: responsiveHeight(1),
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(5),
        marginTop: responsiveHeight(8),
        marginRight:responsiveHeight(4)
    },
    donateText: { color: COLORS.white },
})