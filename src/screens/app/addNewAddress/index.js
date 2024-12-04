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

const AddNewAddress = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <GoBack name={'Add New Address'} />
            <View style={styles.mainContainer}>

                <View style={styles.mainInputView}>
                  


                <InputField
                        name={'Address Name'}
                        inputName={'Home'}
                       
                    />

                    <InputField
                        name={'Location'}
                        inputName={'Select '}
                        iconName2={'keyboard-arrow-down'}
                        iconType2={'MaterialIcons'}
                    />

                    <InputField
                        name={'Street'}
                        inputName={'Type here...'}
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
                    <Button name={'Add'} onPress={()=>navigation.goBack('')}/>
                </View>




            </View>
        </View>
    )
}

export default AddNewAddress
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
    mainInputView:{
        marginTop:responsiveHeight(1)
    },
    inputView:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:responsiveWidth('85%'),
    },

    buttonView:{
     marginTop:responsiveHeight(23)
    }


})