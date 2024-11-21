import React, { useState } from 'react';
import { View, Text,StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { COLORS, Fonts, FontSizes } from '../../utilities';
import { Icon } from '@rneui/themed';
import {
    widthPercentageToDP as responsiveWidth,
    heightPercentageToDP as responsiveHeight,
    responsiveFont,
    
} from 'react-native-responsive-hook';


const Radiobutton = ({onPress,iconName2,iconType2,inputName}) => {
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
                        color={COLORS.primary}
                       
                    />
                    <Text style={styles.radioLabel}>
                        Organization
                    </Text>
                </View>


                <View >
            <View style={styles.textInput}>
                <Icon name={'person'} type={'Ionicons'} size={25} color={COLORS.dark} style={styles.icon} />
                <TextInput placeholder={'NGO'} style={styles.input} />
                <TouchableOpacity onPress={onPress}>
                
                  
                    <Icon name={iconName2||'keyboard-arrow-down'} type={iconType2||'MaterialIcons'} size={25} color={COLORS.dark} style={styles.secondIcon} />
                    
                </TouchableOpacity>
            </View>
        </View>

                <View style={styles.radioButton}>
                    <RadioButton.Android
                        value="option1"
                        status={selectedValue === 'option2' ? 
                                'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('option2')}
                        color={COLORS.primary}
                    />
                    <Text style={styles.radioLabel}>
                        Person
                    </Text>
                </View>


                <View >
            <View style={styles.textInput}>
                <Icon  name={'person'} type={'Ionicons'} size={25} color={COLORS.dark} style={styles.icon} />
                <TextInput placeholder={'Type here'} style={styles.input} />
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

              
            </View>
        </View>
    );
};

export default Radiobutton;


const styles = StyleSheet.create({
    container: {
        //justifyContent: 'center',
        //alignItems: 'center',
        //width:responsiveWidth('80%')
    },
    radioGroup: {
  
        backgroundColor: 'white',
       
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioLabel: {
        marginLeft:responsiveWidth(1),
        fontSize:FontSizes.regular,
        fontFamily:Fonts.RobotoMedium
    },

    icon: {
        marginVertical: responsiveHeight(1.5),
        marginHorizontal:responsiveWidth(2.5),

    },

    secondIcon: {
        marginVertical: responsiveHeight(1.5),
        marginRight: responsiveWidth(2),
    },
    textInput: {
        borderWidth:responsiveWidth(0.2),
        borderColor: COLORS.grey,
        borderRadius: responsiveHeight(1.5),
        height: responsiveHeight(7),
        flexDirection: 'row',
        paddingLeft: responsiveWidth(2.5),
        height:responsiveHeight(7),
        width:responsiveWidth('85%')
    },
    input:{
        height:responsiveHeight(7),
        width:responsiveWidth(60)
    }
});