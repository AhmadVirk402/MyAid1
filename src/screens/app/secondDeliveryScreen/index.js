import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FontSizes, Fonts } from '../../../utilities'
import {
    widthPercentageToDP as responsiveWidth,
    heightPercentageToDP as responsiveHeight,
    responsiveFont,

} from 'react-native-responsive-hook';
import { Icon } from '@rneui/themed';
import { Button, GoBack, MiniRadioButton, CustomRadioImg, InputField, MiniButtons } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps



const SecondDeliveryScreen = () => {
    const navigation = useNavigation();
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
                <View style={styles.riderMain} >

                    <View style={styles.riderPN}>
                        <View style={styles.riderIViews}>
                            <Image source={require('../../../assets/images/img6.png')} />
                            <Text style={styles.rName}>John Doe</Text>
                        </View>

                        <View style={styles.riderIViews}>
                            <TouchableOpacity style={styles.iconView}>
                                <Icon name='mail-outline' type='material' color={COLORS.white} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.imgView}>
                                <Image source={require('../../../assets/images/bike.png')} style={styles.img}/>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>



                <View>
                    <Text style={styles.startText}>Active Delivery</Text>
                    <View style={styles.mainTimeView}>
                        <Icon name='calendar-month' type='material' color={COLORS.primary}/>
                        <Text style={styles.timeText}>Feb 17-20|4 Days {'\n'} Estimateted 8:30pm - 9:15 pm 4 hours</Text>
                    </View>
                   </View>

                   <View style={styles.mainILView}>
                    <View style={styles.iLView}>
                        <Icon  name='calendar-month' type='material' color={COLORS.primary}/>
                    </View>
                    <View style={styles.line}></View>

                    <View style={styles.iLView}>
                        <Icon  name='inbox' type='material' color={COLORS.grey}/>
                    </View>
                    <View style={styles.line}></View>

                    <View style={styles.iLView}>
                        {/* <Icon  name='calendar-month' type='material' color={COLORS.primary}/> */}
                    </View>
                    <View style={styles.line}></View>

                    <View style={styles.iLView}>
                        <Icon  name='verified' type='material' color={COLORS.grey}/>
                    </View>

                   </View>

                   <View>
                    <Text style={styles.startText}>Delivery Amount</Text>
                   </View>
                   <View style={styles.priceView}>
                    <Text style={styles.timeText}>5 Items</Text>
                    <Text style={styles.price}>$20</Text>
                   </View>

               
               
                <MiniButtons 
      name1={'Cancel'}
      name2={'Accept'}
      onPress1={()=>navigation.goBack('')}
      onPress2={() => setModalVisible(true)}
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
            <Text style={styles.mainText}>Success</Text>
             <View style={styles.spacer}/>

            <View style={styles.imgView2}>

              <Image source={require('../../../assets/images/img5.png')} />
            </View>
            <Text style={styles.modalRegularText}>Your donation is ready for delivery</Text>

            <View style={styles.modalbutton}>
              <Button name={'Continue'} onPress={() => {
                setModalVisible(false)
                setTimeout(() => {
                    navigation.navigate('BottomTab')
                }, 1000);
              }} />
            </View>

          </View>
        </View>
      </Modal>



        </View>



    )
}

export default SecondDeliveryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignContent: 'center',
    },

    container2: {
        //   ...StyleSheet.absoluteFillObject,
        height: responsiveHeight(40),
        width: responsiveWidth('100%'),
        marginTop: responsiveHeight(),
        alignItems: 'center',
        //paddingHorizontal:responsiveHeight(4)
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
    riderMain: {
        backgroundColor: COLORS.primary,
        paddingVertical: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(5),
        borderTopLeftRadius: responsiveHeight(2.5),
        borderTopRightRadius: responsiveHeight(2.5)
    },
    riderPN: {
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingHorizontal: responsiveHeight(1.5),
        paddingVertical: responsiveHeight(1),
        borderRadius: responsiveHeight(2)
    },
    rName: {
        fontSize: FontSizes.large,
        fontFamily: Fonts.RobotoMedium,
        marginLeft: responsiveWidth(2),
    },
    iconView:{
        backgroundColor:COLORS.primary,
        padding:responsiveHeight(1),
        borderRadius:responsiveHeight(1),
        marginRight:responsiveHeight(1),
    },
    img:{
        height:responsiveHeight(2.5),
        width:responsiveWidth(6)
    },
    imgView:{
        padding:responsiveHeight(1),
        borderRadius:responsiveHeight(1),
        borderWidth:0.5,
        borderColor:COLORS.primary,
    },
    riderIViews:{
        flexDirection:'row',
        alignItems:'center'
    },

    timeText:{
        fontSize:FontSizes.large,
        color:COLORS.grey
    },
   mainTimeView:{
    flexDirection:'row',
    paddingHorizontal:responsiveHeight(3)
   },




    startText: {
        fontSize: FontSizes.h5,
        fontFamily: Fonts.RobotoBold,
        marginVertical: responsiveHeight(1.5),
        textAlign: 'left',
        marginLeft: responsiveHeight(3)
    },



    iLView:{
        marginHorizontal:responsiveHeight(3),
        marginVertical:responsiveHeight(2),
        width:responsiveWidth(6)
    },

    mainILView:{
        flexDirection:'row',
        alignItems:'center',
    },
    line:{
        width:responsiveWidth(9),
        borderWidth:1,
        borderStyle:'dashed'
        
    },
    priceView:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:responsiveHeight(3.5),
        marginBottom:responsiveHeight(2)
    },
    price:{
        fontSize:FontSizes.large,
        color:COLORS.primary,
        fontFamily:Fonts.RobotoBold
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
      imgView2:{
        marginTop:responsiveHeight(2)
      },
      modalRegularText: {
        fontSize: FontSizes.regular,
        width: responsiveWidth(90),
        marginTop: responsiveHeight(3),
        textAlign: 'center',
        fontFamily:Fonts.RobotoMedium
      },
      mainText: {
        fontSize: FontSizes.h4,
        fontFamily: Fonts.RobotoBold
      },
      modalbutton: {
        marginBottom: responsiveHeight(4)
      },




})