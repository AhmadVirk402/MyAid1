import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { COLORS, FontSizes, Fonts } from '../../../utilities'
import {
    widthPercentageToDP as responsiveWidth,
    heightPercentageToDP as responsiveHeight,
    responsiveFont,
} from 'react-native-responsive-hook';
import { Icon } from '@rneui/themed';
import { Button, GoBack, ItemBox } from '../../../components';
import { useNavigation } from '@react-navigation/native';


const itemData = [
    {
        id: '1',
        name: 'Shirt',
        img: require('../../../assets/images/item1.png'),
        number: '2'
    },
    {
        id: '2',
        name: 'Sweater',
        img: require('../../../assets/images/item6.png'),
        number: '5'
    },
    {
        id: '3',
        name: 'Suit',
        img: require('../../../assets/images/item7.png'),
        number: '1'
    },

]

const MyDonationScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <GoBack name={'My Donations'} />
            <View style={styles.mainView}>

                <View style={styles.mainLogo}>
                    <Image source={require('../../../assets/images/img11.png')} />
                </View>


                <FlatList
                    data={itemData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ItemBox
                            name={item.name}
                            img={item.img}
                            number={item.number}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                />
                <View style={styles.textView}>
                    <Text style={styles.uploadText}>Upload Items Images</Text>
                </View>


                <View style={styles.picturesView}>
                    <View style={styles.picView}>
                        <Image source={require('../../../assets/images/item10.png')}/>
                    </View>


                </View>

                <View style={styles.buttonView} >
                    <Button name={'next'} onPress={()=>navigation.navigate('AddDonationScreen')}/>
                </View>







            </View>
        </View>
    )
}

export default MyDonationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    mainView: {
        alignContent: 'center',
        alignItems: 'center',
    },
    mainLogo: {
        marginVertical: responsiveHeight(4)
    },
    itembox: {
        borderWidth: 0.5,
        borderColor: COLORS.grey,
        height: responsiveHeight(7),
        width: responsiveWidth('85%'),
        borderRadius: responsiveHeight(1),
        justifyContent: 'center',
        paddingHorizontal: responsiveWidth(3),
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    mp: {
        height: responsiveHeight(3),
        width: responsiveHeight(3),
        backgroundColor: COLORS.primary,
        borderRadius: responsiveHeight(3 / 2),
        alignContent: 'center',
        justifyContent: 'center'


    },
    mpsize: {
        fontSize: FontSizes.large,
        color: COLORS.white,

    },

    itemN: {
        fontSize: FontSizes.large,
        fontFamily: Fonts.RobotoMedium,
        marginHorizontal: responsiveWidth(2)

    },
    textView: {
        textAlign: 'left',
        width: responsiveWidth('80%'),
        marginBottom: responsiveHeight(1)
    },
    uploadText: {
        fontSize: FontSizes.h5,
        fontFamily: Fonts.RobotoMedium,

    },

    picturesView:{
        width:responsiveWidth('80%'),
        height:responsiveHeight(24.5),
    },
    picView:{
        backgroundColor:COLORS.bgColor2,
        width:responsiveWidth('25%'),
        height:responsiveHeight(13),
        borderRadius:responsiveHeight(2),
        justifyContent:'center',
        alignItems:'center'
    },

    buttonView: {
       // marginTop: responsiveHeight()
    }


})