import { View, Text, Image, StyleSheet, TouchableOpacity,Modal ,FlatList, ScrollView } from 'react-native'
import React,{useState}from 'react'
import { COLORS, FontSizes, Fonts } from '../../../utilities'
import {
    widthPercentageToDP as responsiveWidth,
    heightPercentageToDP as responsiveHeight,
    responsiveFont,

} from 'react-native-responsive-hook';
import { Icon } from '@rneui/themed';
import { Button, GoBack, MainItemBox, Radiobutton, InputField } from '../../../components';
import { useNavigation } from '@react-navigation/native';




const DonationConfirmScreen = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    return (

        <View style={styles.container}>
            <ScrollView>
                <GoBack name={'Donation Confirmation'} />
                <View style={styles.mainView}>

                    <View>
                        <View style={styles.topView}>
                            <Text style={styles.startText}>Items</Text>
                            <TouchableOpacity>
                                <Image source={require('../../../assets/images/Pencil.png')} style={styles.icons} />
                            </TouchableOpacity>
                        </View>
                        <MainItemBox />
                    </View>


                    <View>
                        <View style={styles.topView}>
                            <Text style={styles.startText}>Donate to</Text>
                            <TouchableOpacity>
                                <Image source={require('../../../assets/images/Pencil.png')} style={styles.icons} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.sender}>
                            <Icon name='person-outline' type='material' size={24} />
                            <Text style={styles.john}>John Doe</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.startText}>Location</Text>
                        <View style={styles.locView}>
                            <View style={styles.locViewIn}>
                                <Icon name='location-pin' type='material' />
                                <View>
                                    <Text style={styles.locText}>Pick up</Text>
                                    <Text style={styles.locTextin}>Plot no.209, Hills, Georgia, 500033 {'\n'}Ph: +91234567890</Text>
                                </View>
                                <TouchableOpacity>
                                    <Image source={require('../../../assets/images/Pencil.png')} style={styles.icons} />
                                </TouchableOpacity>
                            </View>





                        </View>

                        <View style={styles.spacer} />

                        <View style={styles.locView}>
                            <View style={styles.locViewIn}>
                                <Icon name='location-pin' type='material' />
                                <View>
                                    <Text style={styles.locText}>Pick up</Text>
                                    <Text style={styles.locTextin}>Plot no.209, Hills, Georgia, 500033 {'\n'}Ph: +91234567890</Text>
                                </View>
                                <TouchableOpacity>
                                    <Image source={require('../../../assets/images/Pencil.png')} style={styles.icons} />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>


                    <View style={styles.topView}>
                        <Text style={styles.startText}>Donate to</Text>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/images/Pencil.png')} style={styles.icons} />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View style={styles.itemImg}>
                            <Image source={require('../../../assets/images/itemImg1.png')}style={styles.itemStyle}/>
                            <Image source={require('../../../assets/images/itemImg2.png')}style={styles.itemStyle}/>
                            <Image source={require('../../../assets/images/itemImg3.png')}style={styles.itemStyle}/>
                        </View>
                         <View style={styles.spacer}/>
                        <View style={styles.itemImg}>
                            <Image source={require('../../../assets/images/itemImg1.png')}style={styles.itemStyle}/>
                            <Image source={require('../../../assets/images/itemImg2.png')}style={styles.itemStyle}/>
                            <Image source={require('../../../assets/images/itemImg3.png')}style={styles.itemStyle}/>
                        </View>

                    </View>









                </View>
            </ScrollView>
            <View style={styles.buttonView} >
                <Button name={'Confirm Donation'} onPress={() => setModalVisible(true)} />
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

            <View style={styles.imgView}>

              <Image source={require('../../../assets/images/img5.png')} />
            </View>
            <Text style={styles.modalRegularText}>Donation confirmed and select rider for delivery</Text>

            <View style={styles.modalbutton}>
              <Button name={'Continue'} onPress={() => {
                setModalVisible(false)
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

export default DonationConfirmScreen

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: COLORS.white,
        paddingBottom:responsiveHeight(13)
        
    },
    topView: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    icons: {
        marginHorizontal: responsiveWidth(-5)
    },
    mainView: {
        paddingHorizontal: responsiveHeight(4),

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
    sender: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.4,
        borderColor: COLORS.dark,
        borderRadius: responsiveHeight(1.5),
        height: responsiveHeight(6.5),
        padding: responsiveHeight(1)
    },
    john: {
        fontSize: FontSizes.medium,
        fontFamily: Fonts.RobotoMedium,
        marginLeft: responsiveWidth(2)
    },
    locView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        // width:responsiveWidth('80%'),
        borderWidth: 0.4,
        padding: responsiveHeight(2.9),
        borderRadius: responsiveWidth(3),


    },
    spacer: {
        marginVertical: responsiveHeight(1)
    },
    locViewIn: {
        flexDirection: 'row'
    },
    locText: {
        marginLeft: responsiveWidth(2),
        fontSize: FontSizes.medium,
        fontFamily: Fonts.RobotoBlack,
        width: responsiveWidth('68%')
    },
    locTextin: {
        marginLeft: responsiveWidth(2),
        fontSize: FontSizes.medium,
        color: COLORS.dark

    },
    itemImg:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    itemStyle:{
        width:responsiveWidth(26),
    },

    buttonView: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        width: responsiveWidth('100%'),
        height: responsiveHeight(3),
        backgroundColor: COLORS.white,
        marginTop: responsiveHeight('90%'),
        justifyContent: 'center'
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