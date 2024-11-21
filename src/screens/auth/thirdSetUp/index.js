import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FontSizes, Fonts } from '../../../utilities'
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import { Button, GoBack, InputField, MiniInputField, PictureView, RegisterInput } from '../../../components';
import { useNavigation } from '@react-navigation/native';


const ThirdSetUp = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);



  return (
    <View style={styles.container}>
      <GoBack name={'Set Up Account'} />
      <View style={styles.mainView}>

        <View style={styles.views}>
          <View style={styles.activeView}></View>
          <View style={styles.activeView}></View>
          <View style={styles.activeView}></View>
        </View>


        <View style={styles.textView}>
          <Text style={styles.mainText}>Criminal Record Info</Text>
          <Text style={styles.regularText}>Regulations require you to upload Criminal record. Don't worry, your data will stay safe and private.</Text>
        </View>
        <View style={styles.inputView}>
          <InputField
            name={'Criminal Record'}
            inputName={'Select'}
            iconName2={'keyboard-arrow-down'}
            iconType2={'MaterialIcons'}
          />
        </View>

        <PictureView name={'ID Picture Front'} />


        <View style={styles.buttonView}>
          <Button name={'Continue'} onPress={() => setModalVisible(true)} />
        </View>

      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.mainText}>Verify Your Identity</Text>
            <Text style={styles.modalRegularText}>An authentication code has been sent to  johndoe@gmail.com</Text>


            <RegisterInput />

            <View style={styles.modalbutton}>
              {/* <Button name={'Verify'} onPress={() => setSecondModalVisible(true)}/> */}
              <Button
                name={'Verify'}
                onPress={() => {
                  setModalVisible(false)
                  setTimeout(() => {
                    setSecondModalVisible(true)
                  }, 1000);
                }}
              />
            </View>

          </View>
        </View>
      </Modal>



      <Modal
        animationType="slide"
        transparent={true}
        visible={secondModalVisible}
        onRequestClose={() => setSecondModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.mainText}>Success</Text>

            <View style={styles.imgView}>

              <Image source={require('../../../assets/images/img5.png')} />
            </View>
            <Text style={styles.modalRegularText}>Account has been registered successfully</Text>

            <View style={styles.modalbutton}>
              <Button name={'Continue'} onPress={() => {
                setSecondModalVisible(false)
                setTimeout(() => {
                  navigation.replace('App')
                }, 1000);
              }} />
            </View>

          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ThirdSetUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mainView: {
    alignContent: 'center',
    alignItems: 'center',
  },
  views: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: responsiveHeight(4),
    width: responsiveWidth(60)
  },
  activeView: {
    height: responsiveHeight(1),
    width: responsiveWidth(18),
    backgroundColor: COLORS.primary,
    borderRadius: responsiveWidth(2.5)
  },
  viewsMargin: {
    marginHorizontal: responsiveWidth(2)
  },
  textView: {
    marginHorizontal: responsiveWidth(5)
  },
  mainText: {
    fontSize: FontSizes.h4,
    fontFamily: Fonts.RobotoBold
  },
  regularText: {
    fontSize: FontSizes.regular,
    fontFamily: Fonts.RobotoMedium,
    marginTop: responsiveHeight(1)
  },
  inputView: {
    marginVertical: responsiveHeight(2)
  },

  buttonView: {
    marginTop: responsiveHeight(20.5)
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalContainer: {
    width: responsiveWidth('100%'),
    backgroundColor: COLORS.white,
    borderTopRightRadius: responsiveWidth(7),
    borderTopLeftRadius: responsiveWidth(7),
    padding: responsiveHeight(2),
    alignItems: 'center',
  },
  modalRegularText: {
    fontSize: FontSizes.regular,
    width: responsiveWidth(90),
    marginTop: responsiveHeight(3),
    textAlign: 'center'
  },
  modalbutton: {
    marginBottom: responsiveHeight(4)
  },
  imgView: {
    marginVertical: responsiveHeight(3)
  }


})