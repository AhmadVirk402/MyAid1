import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity,
    StyleSheet
} from 'react-native';
import { COLORS, FontSizes, Fonts } from '../../utilities'
import {
    widthPercentageToDP as responsiveWidth,
    heightPercentageToDP as responsiveHeight,
    responsiveFont,

} from 'react-native-responsive-hook';
import { Image } from 'react-native-animatable';

const CustomRadioButton = ({ label, selected, onSelect, img, label1 }) => (
    <View style={styles.container1}>
        <TouchableOpacity
            style={[styles.radioButton,
            { borderColor: selected ? COLORS.primary : COLORS.white },
            { backgroundColor: selected ? COLORS.white : COLORS.light }]}
            onPress={onSelect}
        >
            <Image source={img} />


            {/* <View>
         <Text style={[styles.radioButtonText,
        { color: selected ? COLORS.white : COLORS.dark }]}>
            {label}
        </Text> 
    </View> */}

        </TouchableOpacity>

        <View >
            <Text style={styles.radioButtonText}>
                {label}
            </Text>
            <Text style={styles.radioButtonText}>
                {label1}
            </Text>
        </View>

    </View>

);



const CustomRadioImg = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    return (
        <View style={styles.container}>
            <CustomRadioButton
                img={require('../../assets/images/bike.png')}
                label="Bike"
                label1='$10'
                selected={selectedValue === 'option1'}
                onSelect={() => setSelectedValue('option1')}
            />



            <CustomRadioButton
                img={require('../../assets/images/car.png')}
                 label="Car"
                 label1='$50'
                selected={selectedValue === 'option2'}
                onSelect={() => setSelectedValue('option2')}
            />
            <CustomRadioButton
                img={require('../../assets/images/van.png')}
                 label="Mini-Van"
                 label1='$100'
                selected={selectedValue === 'option3'}
                onSelect={() => setSelectedValue('option3')}
            />
            <CustomRadioButton
                img={require('../../assets/images/mini-van.png')}
                 label="Van"
                 label1='$100'
                selected={selectedValue === 'option4'}
                onSelect={() => setSelectedValue('option4')}
            />
        </View>
    );
};

export default CustomRadioImg;


const styles = StyleSheet.create({
    container1:{
        alignItems:'center'
    },
    container: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: responsiveWidth(4),
    },
    radioButton: {
        height: responsiveHeight(10),
        width: responsiveWidth(19),
        borderRadius: responsiveHeight(1.5),
        marginHorizontal: 8,
        borderWidth: 1,
        borderColor: COLORS.white,
        backgroundColor: COLORS.light,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioButtonText: {
        fontSize: FontSizes.medium,
        fontFamily:Fonts.RobotoMedium
    },
});