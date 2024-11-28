import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import { COLORS, FontSizes, Fonts } from '../../../utilities'
import {
    widthPercentageToDP as responsiveWidth,
    heightPercentageToDP as responsiveHeight,
    responsiveFont,
} from 'react-native-responsive-hook';
import { Icon } from '@rneui/themed';
import { Button, GoBack, InputField, ItemBox } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { BackgroundImage } from '@rneui/base';


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

const ClothesDonationScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <GoBack name={'Clothes Donation'} />
            <View style={styles.mainView}>

                <View style={styles.mainLogo}>
                    <Image source={require('../../../assets/images/img11.png')} />
                </View>

                <View
                style={styles.imgView}>
                    <Image source={require('../../../assets/images/image.png')}/>
                </View>

                
                <InputField name={'Title'} inputName={'Type here....'}/>

                <View style={styles.textView}>
                    <Text style={styles.uploadText}>Items Required</Text>
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
                



                <View style={styles.buttonView} >
                    <Button name={'Next'} onPress={()=>navigation.navigate('SecondClothesDonationScreen')}/>
                </View>







            </View>
        </View>
    )
}

export default ClothesDonationScreen

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
        marginVertical: responsiveHeight(2)
    },
    imgView:{
        borderColor:COLORS.primary,
        borderWidth:1,
        width:responsiveWidth('85%'),
        height:responsiveHeight(15),
        justifyContent:'center',
        borderRadius:responsiveHeight(2),
        alignItems:'center'
    },

    textView: {
        textAlign: 'left',
        width: responsiveWidth('80%'),
        marginVertical: responsiveHeight(1)
    },
    uploadText: {
        fontSize: FontSizes.h5,
        fontFamily: Fonts.RobotoMedium,

    },


    buttonView: {
        marginTop: responsiveHeight(2)
    }


})