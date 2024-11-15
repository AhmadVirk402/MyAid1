import React, { useRef,useState } from 'react';
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { COLORS,FontSizes,Fonts } from '../../utilities';
import {
    widthPercentageToDP as responsiveWidth,
    heightPercentageToDP as responsiveHeight,
    responsiveFont,
} from 'react-native-responsive-hook';


const RegisterInput = () => {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput
         
          ref={input1Ref}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(text) => {
            if (text) input2Ref.current.focus();
          }}
          autoFocus
        />
        <TextInput
          ref={input2Ref}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(text) => {
            if (text) input3Ref.current.focus();
          }}
        />
        <TextInput
          ref={input3Ref}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(text) => {
            if (text) input4Ref.current.focus();
          }}
        />
        <TextInput
          ref={input4Ref}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
    padding: responsiveHeight(2),
  },
  input: {
    width: responsiveWidth(15),
    height:responsiveHeight(10),
    borderWidth:responsiveWidth(0.4),
    borderColor:COLORS.primary,
    textAlign: 'center',
    fontSize:FontSizes.h5,
    marginHorizontal:responsiveWidth(2.5),
    borderRadius:responsiveWidth(2.5),
  },
});

export default RegisterInput;
