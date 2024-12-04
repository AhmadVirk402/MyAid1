import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FontSizes, Fonts } from '../../../utilities'
import {
    widthPercentageToDP as responsiveWidth,
    heightPercentageToDP as responsiveHeight,
    responsiveFont,

} from 'react-native-responsive-hook';
import { Icon } from '@rneui/themed';
import { Button, GoBack, MainItemBox, Radiobutton, InputField,ModalGoBack } from '../../../components';
import { useNavigation } from '@react-navigation/native';

const MoneyDonationDetails = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <GoBack name={'Add Donation Details'} />

          <ScrollView>
            <View style={styles.mainView}>


                <View>
                    <Text style={styles.startText2}>Donate to</Text>

                    <View>
                        <Radiobutton />

                    </View>
                </View>


                <View>
                    <Text style={styles.startText2}>Add Bank Account</Text>
                    <InputField
                        name={'Select Bank'}
                        inputName={'Bank Loreum'}
                        iconName2={'keyboard-arrow-down'}
                        iconType2={'MaterialIcons'}
                    />

                    <InputField
                        name={'Account ID'}
                        inputName={'Type here...'}                 
                    />

                </View>



                <View>
                    <Text style={styles.startText2}>Location</Text>
                    <InputField
                        name={'Pick up'}
                        inputName={'Add Address'}
                        iconName1={'location-pin'}
                        iconName2={'keyboard-arrow-down'}
                        iconType2={'MaterialIcons'}                      
                    />

                    <InputField
                        name={'Dropoff'}
                        inputName={'Add Address'}
                        iconName1={'location-pin'}
                        iconName2={'keyboard-arrow-down'}
                        iconType2={'MaterialIcons'}                    
                    />

                </View>


                <View style={styles.buttonView} >
                    <Button name={'next'} onPress={() => setModalVisible(true)} />
                </View>



            </View>
            </ScrollView>


            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
          <Text style={styles.mainText}>Add Donation Amount</Text>

          <View style={styles.textView}>
            <Text style={styles.mText1}>Balance</Text>
            <Text style={styles.mText2}>$56,763.20</Text>
          </View>

            <InputField name={'Amount'} inputName={'Type here...'}/>
            <InputField 
            name={'Payment Method'} 
            inputName={'**** **** 0582 5466'}
            iconName1={'inbox'}
            iconName2={'keyboard-arrow-down'}
            iconType2={'MaterialIcons'} 
            />
           

            <View style={styles.modalbutton}>
              <Button
                name={'Send Money'}
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
            <Text style={styles.modalRegularText}>Money sent successfully</Text>

            <View style={styles.modalbutton}>
              <Button name={'Continue'} onPress={() => {
                setSecondModalVisible(false)
                setTimeout(() => {
                  
                }, 1000);
              }} />
            </View>

          </View>
        </View>
      </Modal>


        </View>
    )
}


export default MoneyDonationDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    mainView: {
        paddingHorizontal: responsiveHeight(4),
        marginBottom: responsiveHeight(2)
    },
    startText: {
        fontSize: FontSizes.h5,
        fontFamily: Fonts.RobotoBold,
        marginVertical: responsiveHeight(1.5)
    },

    startText2: {
        fontSize: FontSizes.h5,
        fontFamily: Fonts.RobotoBold,
        marginTop: responsiveHeight(1),

    },

    buttonView: {
        marginTop: responsiveHeight()
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
      mainText: {
        fontSize: FontSizes.h4,
        fontFamily: Fonts.RobotoBold
      },
      textView:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:COLORS.primary,
        width:responsiveWidth('85%'),
        marginVertical:responsiveHeight(3),
        paddingVertical:responsiveHeight(3.5),
        paddingHorizontal:responsiveHeight(2),
        alignItems:'center',
        borderRadius:responsiveHeight(2)
      },
      mText1:{
        fontSize:FontSizes.medium,
        textAlign:'center',
        color:COLORS.white
      },
      mText2:{
        fontSize:FontSizes.h5,
        textAlign:'center',
        color:COLORS.white
      },
      modalRegularText: {
        fontSize: FontSizes.regular,
        width: responsiveWidth(90),
        textAlign: 'center'
      },
      modalbutton: {
        marginVertical: responsiveHeight(3)
      },
      imgView: {
        marginVertical: responsiveHeight(3)
      }


})