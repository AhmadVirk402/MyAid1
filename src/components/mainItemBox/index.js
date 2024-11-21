import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { COLORS, FontSizes, Fonts } from '../../utilities'
import {
    widthPercentageToDP as responsiveWidth,
    heightPercentageToDP as responsiveHeight,
    responsiveFont,
} from 'react-native-responsive-hook';


import { useNavigation } from '@react-navigation/native';




const MainItemBox = () => {
    const navigation = useNavigation();
    return (

                    <View style={styles.mainItemBox}>

                        <View style={styles.itembox}>
                            <View style={styles.itemImgView}>
                                <Image source={require('../../assets/images/item1.png')} style={styles.itemImg} />
                                <Text style={styles.itemText}>Shirt</Text>
                            </View>
                            <View style={styles.itemCounting}>
                                <Text style={styles.itemN}>2</Text>
                            </View>
                        </View>


                        <View style={styles.itembox}>
                            <View style={styles.itemImgView}>
                                <Image source={require('../../assets/images/item6.png')} style={styles.itemImg} />
                                <Text style={styles.itemText}>Shirt</Text>
                            </View>
                            <View style={styles.itemCounting}>
                                <Text style={styles.itemN}>5</Text>
                            </View>
                        </View>


                        <View style={styles.itembox}>
                            <View style={styles.itemImgView}>
                                <Image source={require('../../assets/images/item7.png')} style={styles.itemImg} />
                                <Text style={styles.itemText}>Suit</Text>
                            </View>
                            <View style={styles.itemCounting}>
                                <Text style={styles.itemN}>1</Text>
                            </View>
                        </View>


                    </View>
                
    )
}

export default MainItemBox

const styles = StyleSheet.create({
  
    mainItemBox:{
        borderWidth: 0.4,
        borderColor: COLORS.grey,
        height: 'auto',
        width: responsiveWidth('85%'),
        borderRadius: responsiveHeight(1.5),
        justifyContent: 'center',
        paddingHorizontal: responsiveWidth(3),
        paddingVertical:responsiveHeight(1)
    },
    itembox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: responsiveHeight(1)
    },
    itemImgView: {
        flexDirection: 'row',
        alignItems: 'center',


    },
    itemImg: {
        height: responsiveHeight(3),
        width: responsiveWidth(6),
        tintColor: COLORS.dark
    },
    itemText: {
        fontSize: FontSizes.large,
        fontFamily: Fonts.RobotoMedium,
        marginLeft: responsiveWidth(2)
    },
    itemCounting: {
        flexDirection: 'row',
        alignItems: 'center',

    },
   

    itemN: {
        fontSize: FontSizes.medium,
        marginHorizontal: responsiveWidth(2)

    },


})