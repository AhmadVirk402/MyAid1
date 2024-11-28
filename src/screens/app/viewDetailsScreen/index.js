import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList,ScrollView } from 'react-native'
import React from 'react'
import { COLORS, FontSizes, Fonts } from '../../../utilities'
import {
    widthPercentageToDP as responsiveWidth,
    heightPercentageToDP as responsiveHeight,
    responsiveFont,

} from 'react-native-responsive-hook';
import { Icon } from '@rneui/themed';
import { Button, GoBack, MainItemBox, Radiobutton, InputField,BottomSheets } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CameraRoll } from 'react-native';



const ViewDetailsScreen = () => {
    const navigation = useNavigation();
    
    return (
        
        <View style={styles.container}>
            <GoBack name={'Orphanage'} />
            <ScrollView >
            <View style={styles.mainView}>

                <Image source={require('../../../assets/images/img9.png')} style={styles.img} />

                <View>
                    <Text style={styles.startText}>Items Required</Text>
                    <MainItemBox />
                </View>


                <View>
                    <Text style={styles.startText}>Orphanage</Text>
                    <Text style={styles.regularText}>Donation Status</Text>
                    <Text style={styles.regularText2}>Progress</Text>
                </View>
                <View style={styles.mainPT}>
                    <View>
                        <Text style={styles.complete}>45% to complete</Text>
                    </View>
                    <View style={styles.timeView}>
                        <Icon name='clock' type='octicon' size={20} color={COLORS.grey}/>
                        <View style={styles.spacer}/>
                        <Text style={styles.regularText2}>39min</Text>
                    </View>

                    
                </View>

                <View style={styles.meterView}>
                 <View style={styles.fillMeter}></View>
                    </View>
                    <View style={styles.corner}/>
                    <View style={styles.clothView}>
                        <Text style={styles.cloth}>Clothes</Text>
                    </View>
                   <View style={styles.spacer1}/>
                <View style={styles.border}/>

                <Text style={styles.startText}>Participants</Text>

                <View style={styles.cardpics}>
                        <Text style={styles.people}>5 People Donated</Text>
                        <View style={styles.addView}>
                            <Image source={require('../../../assets/images/plus.png')} style={styles.add} />
                        </View>
                        <Image source={require('../../../assets/images/cardpic3.png')} style={styles.cardpic2} />
                        <Image source={require('../../../assets/images/cardpic2.png')} style={styles.cardpic2} />
                        <Image source={require('../../../assets/images/cardpic1.png')} style={styles.cardpic1} />

                    </View>







            </View>
            </ScrollView>
             {/* <BottomSheets /> */}
        </View>
       
    )
}

export default ViewDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    mainView: {
        paddingHorizontal: responsiveHeight(3.5),
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
    img: {
        width: responsiveWidth(85),
        borderRadius: responsiveHeight(2),
        marginVertical: responsiveHeight(2),
    },
    regularText: {
        fontSize: FontSizes.large,
        fontFamily: Fonts.RobotoRegular,
        color: COLORS.dark,
    },
    regularText2: {
        fontSize: FontSizes.regular,
        fontFamily: Fonts.RobotoRegular,
        color: COLORS.dark,
        marginVertical: responsiveHeight(1)
    },
    complete: {
        color: COLORS.primary,
        fontSize: FontSizes.large
    },
    timeView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    spacer: {
        marginHorizontal: responsiveHeight(0.3)
    },
    spacer1: {
        marginVertical: responsiveHeight(0.5)
    },
    mainPT: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',


    },
    meterView:{
        width:responsiveWidth('85%'),
        height:responsiveHeight(1.5),
        backgroundColor:COLORS.light,
        borderRadius:responsiveHeight(2)
    },
    fillMeter:{
        width:responsiveWidth('40%'),
        height:responsiveHeight(1.5),
        borderRadius:responsiveHeight(2),
        backgroundColor:COLORS.primary,
    },
    corner:{
        backgroundColor:COLORS.primary,
        width:responsiveWidth(5),
        height:responsiveHeight(2),
        transform: [{ rotate: '45deg' }],
        marginTop:responsiveHeight(1),
        marginLeft:responsiveWidth('37%'),
        
    },
    clothView:{
        height:responsiveHeight(4),
        width:responsiveWidth(18),
        backgroundColor:COLORS.primary,
        justifyContent:'center',
        padding:responsiveHeight(1),
        borderRadius:responsiveHeight(1.5),
        alignItems:'center',
        marginLeft:responsiveWidth('30.5%'),
        marginTop:responsiveHeight(-2)
    },
    cloth:{
        fontSize:FontSizes.regular,
        fontFamily:Fonts.RobotoMedium,
        color:COLORS.white

    },
    border:{
        border:responsiveWidth('85%'),
        height:.5,
        backgroundColor:COLORS.grey
    },

    cardpics: {
        flexDirection: 'row-reverse',
        marginVertical: responsiveHeight(1),
        width: responsiveWidth(55),
        alignItems:'center'
    },
    cardpic1: {

    },
    cardpic2: {
        marginLeft: -10,
    },
    addView:{
        backgroundColor:COLORS.primary,
        padding:responsiveHeight(1),
        width:responsiveWidth(7),
        alignItems:'center',
        borderRadius:responsiveHeight(3.5),
        marginLeft:-10
       },
       add:{
        height:responsiveHeight(1.5),
        width:responsiveWidth(4)
       },
       people:{ 
        fontSize:FontSizes.medium,
        fontFamily:Fonts.RobotoMedium,
        textAlign:'center',
        marginLeft:responsiveHeight(1)
       },
   




})