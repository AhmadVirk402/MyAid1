import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
//import { COLORS, FontSizes, Fonts } from '../../utilities'
import { COLORS, FontSizes, Fonts } from '../../utilities';
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,

} from 'react-native-responsive-hook';


const MiniRadioButton = () => {
    const [selectedValue, setSelectedValue] = useState('option1');

    return (
        <View style={styles.container}>
            <View style={styles.radioGroup}>
                <View style={styles.radioButton}>
                    <RadioButton.Android
                        value="option1"
                        status={selectedValue === 'option1' ? 
                                'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('option1')}
                        color="#007BFF"
                    />
                    <Text style={styles.radioLabel}>
                        Sender
                    </Text>
                </View>

                <View style={styles.spacer}/>

                <View style={styles.radioButton}>
                    <RadioButton.Android
                        value="option2"
                        status={selectedValue === 'option2' ? 
                                 'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('option2')}
                        color="#007BFF"
                    />
                    <Text style={styles.radioLabel}>
                        Reciver
                    </Text>
                </View>

              
            </View>
        </View>
    );
};
export default MiniRadioButton;

const styles = StyleSheet.create({
    container: {
       justifyContent: 'flex-start',

    },
    radioGroup: {
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: 'white',
        marginLeft:responsiveHeight(3)
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioLabel: {
        marginLeft: responsiveWidth(2),
        fontSize: FontSizes.medium,
        fontWeight: Fonts.RobotoMedium,
    },
    spacer:{
        marginHorizontal:responsiveHeight(4)
    }
});
