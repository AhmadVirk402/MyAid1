import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FontSizes, Fonts } from '../../../utilities'
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,

} from 'react-native-responsive-hook';
import { Icon } from '@rneui/themed';
import { Button, GoBack, MiniRadioButton, CustomRadioImg, InputField, MiniButtons,ModalGoBack, MiniInputField } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


const DeliveryScreen = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState('');
  const [secondModalVisible, setSecondModalVisible] = useState(false);

  
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <GoBack name={'Delivery'} />
      <View style={styles.container2}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>


      <View style={styles.mainView}>
        <View >

          <View style={styles.spacerH} />
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: responsiveWidth(4) }}>

            <Image source={require('../../../assets/images/box1.png')} style={styles.img} />
            <Text style={styles.startText}>Donation Delivery</Text>
          </View>

          <View style={styles.spacerV} />

          <CustomRadioImg />
          <View>
            <Text style={styles.startText2}>Billing</Text>
            <MiniRadioButton />
          </View>
          <View style={styles.inputView}>
            <InputField
              name={'Delivery Company'}
              inputName={'FedEx'}
              iconName1={'van-utility'}
              iconType1={'material-community'}
              iconName2={'keyboard-arrow-down'}
              iconType2={'MaterialIcons'}
            />
            <InputField
              name={'Payment Method'}
              inputName={'**** **** 0582 5466'}
              iconName1={'creditcard'}
              iconType1={'antdesign'}
              iconName2={'keyboard-arrow-down'}
              iconType2={'MaterialIcons'}
            />
          </View>
        </View>
        
      <MiniButtons 
      name1={'Schedule Delivery'}
      name2={'Find Rider'}
      onPress2={()=>navigation.navigate('SecondDeliveryScreen')}
      onPress1={ () => setModalVisible(true)}
      />





      </View>



      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
          <ModalGoBack name={'Schedule Booking'} onPress={() => setModalVisible(false)} />
             
            
          <Calendar
            style={{
              marginHorizontal: responsiveWidth(5),
              height: responsiveHeight(40),
              width:responsiveWidth(86),
              borderWidth: 1,
              borderRadius: responsiveWidth(5),
              borderColor:COLORS.grey,
            }}
            onDayPress={day => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
              },
            }}
            // Customizing text size and making it bold
            theme={{
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
              textDayFontWeight: 'bold',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: 'bold',
              selectedDayBackgroundColor:COLORS.primary,
              selectedDayTextColor: '#ffffff',
              dayTextColor: '#4A5660',
              todayTextColor: '#4A5660',
              arrowColor: COLORS.grey, // Set color for arrow icons
            }}
            // Customizing arrow icons
            renderArrow={direction => (
              <Icon
                name={
                  direction === 'left' ? 'arrow-back-ios' : 'arrow-forward-ios'
                }
                size={18} // Set the size of the icon
                color={COLORS.grey} // Set the color of the icon
              />
            )}
          />
           


          <Text style={styles.modalRegularText}>Add Delivery Time Slots</Text>
          <View style={styles.MiniInputs}>
          <MiniInputField name={'From'} inputName={'09:00Am'}/>
          <MiniInputField name={'Till'} inputName={'11:00Am'}/>
          </View>

            <View style={styles.modalbutton}>
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
            <Text style={styles.modalRegularText2}>Your delivery is scheduled successfully</Text>

            <View style={styles.modalbutton}>
              <Button name={'Continue'} onPress={() => {
                setSecondModalVisible(false)
                setTimeout(() => {
                  navigation.navigate('DeliveryScreen')
                }, 1000);
              }} />
            </View>

          </View>
        </View>
      </Modal>



      
    </View>
  )
}

export default DeliveryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignContent: 'center',
  },

  container2: {
    //   ...StyleSheet.absoluteFillObject,
    height: responsiveHeight(22),
    width: responsiveWidth('100%'),
    marginTop: responsiveHeight(),
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mainView: {
    borderTopLeftRadius: responsiveHeight(2.5),
    borderTopRightRadius: responsiveHeight(2.5),
    marginTop: responsiveHeight(-1),
    backgroundColor: COLORS.white,


  },
  startText: {
    fontSize: FontSizes.h5,
    fontFamily: Fonts.RobotoBold,
    marginVertical: responsiveHeight(1.5),
    textAlign: 'left',
    marginLeft: responsiveHeight(2)
  },
  startText2: {
    fontSize: FontSizes.h5,
    fontFamily: Fonts.RobotoBold,
    marginVertical: responsiveHeight(1.5),
    textAlign: 'left',
    marginLeft: responsiveHeight(4)
  },
  spacerV: {
    marginVertical: responsiveHeight(0.8)
  },
  spacerH: {
    marginVertical: responsiveHeight(1)
  },
  img: {
    marginLeft: responsiveHeight(2)
  },
  inputView: {
    width: responsiveWidth('100%'),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:responsiveHeight(1.5)
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
    padding: responsiveHeight(1),
    alignItems: 'center',
  },
  modalRegularText: {
    fontSize: FontSizes.large,
    width: responsiveWidth(90),
    marginTop: responsiveHeight(3),
    textAlign: 'center',
    fontFamily:Fonts.RobotoMedium
  },
  modalRegularText2: {
    fontSize: FontSizes.regular,
    width: responsiveWidth(90),
    marginTop: responsiveHeight(3),
    textAlign: 'center',
    fontFamily:Fonts.RobotoMedium
  },
  mainText: {
    fontSize: FontSizes.h4,
    fontFamily: Fonts.RobotoBold,
    marginBottom:responsiveHeight(3)
  },
  MiniInputs:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:responsiveWidth(90)
  },
  modalbutton: {
    marginBottom: responsiveHeight(4)
  },

 



})