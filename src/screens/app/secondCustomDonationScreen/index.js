import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ImageBackground,Modal } from 'react-native'
import React,{useState} from 'react'
import { COLORS, FontSizes, Fonts } from '../../../utilities'
import {
    widthPercentageToDP as responsiveWidth,
    heightPercentageToDP as responsiveHeight,
    responsiveFont,
} from 'react-native-responsive-hook';
import { Icon } from '@rneui/themed';
import { Button, GoBack, InputField, ItemBox, MainItemBox } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../../../utilities/constant/index';



const SecondCustomDonationScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <GoBack name={'Earthquake'} />
            <View style={styles.mainView}>


                <ImageBackground 
                source={require('../../../assets/images/img9.png')}
                style={styles.imgView}>
                    <Image source={require('../../../assets/images/image.png')}/>
                </ImageBackground>

                
                <View style={styles.textView}>
                    <Text style={styles.uploadText1}>Orphanage</Text>
                </View>

                <View style={styles.line}>
                    </View>

                <View style={styles.textView}>
                    <Text style={styles.uploadText}>Items Required</Text>
                </View>

                <MainItemBox/>
                



                <View style={styles.buttonView} >
                    <Button name={'Create'} onPress={() => setModalVisible(true)}/>
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
            <Text style={styles.mainText}>Success</Text>
             <View style={styles.spacer}/>

            <View style={styles.imgView2}>

              <Image source={require('../../../assets/images/img5.png')} />
            </View>
            <Text style={styles.modalRegularText}>Donation created successfully</Text>

            <View style={styles.modalbutton}>
              <Button name={'Continue'} onPress={() => {
                setModalVisible(false)
                setTimeout(() => {
                    navigation.navigate('BottomTab', {screen: routes.needAndWant})
                }, 1000);
              }} />
            </View>

          </View>
        </View>
      </Modal>
        </View>
    )
}

export default SecondCustomDonationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    mainView: {
        alignContent: 'center',
        alignItems: 'center',
    },
    mainLogo: {
        marginVertical: responsiveHeight(2)
    },
    imgView:{
        width:responsiveWidth('85%'),
        height:responsiveHeight(15),
        justifyContent:'center',
        borderRadius:responsiveHeight(2),
        Radius:responsiveHeight(4),
        alignItems:'center',
        marginTop:responsiveHeight(2),
        overflow:'hidden'
    },
   

    uploadText1: {
        fontSize: FontSizes.h5,
        fontFamily: Fonts.RobotoMedium,

    },


    textView: {
        textAlign: 'left',
        width: responsiveWidth('80%'),
        marginVertical: responsiveHeight(1)
    },
    uploadText: {
        fontSize: FontSizes.h6,
        fontFamily: Fonts.RobotoMedium,

    },

    line:{
        width:responsiveHeight(40),
        borderBottomWidth:.2,
        borderColor:COLORS.gray,
        marginVertical:responsiveHeight(2)
    },

    buttonView: {
        marginTop:responsiveHeight(29)
    },
    imgView2:{
        marginVertical:responsiveHeight(2),
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