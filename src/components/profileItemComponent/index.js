import { View, Text, StyleSheet,FlatList, TouchableOpacity } from 'react-native'
import { COLORS,FontSizes,Fonts } from '../../utilities'
import React from 'react'
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import { Image } from 'react-native-animatable';
import { Icon } from '@rneui/base';

const ProfileItemComponent = ({name,img,iconName,onpress,iBGColor}) => {
  return (
    <TouchableOpacity style={styles.iNIView}onPress={onpress}>
        <View style={styles.iNView}>
        <View style={[styles.iView,{backgroundColor:iBGColor}]}>
            <Image source={img}/>
        </View>
        <Text style={styles.text}>{name}</Text>
        </View>
        <Icon name={iconName} size={25} color={COLORS.dark} />
      </TouchableOpacity>
  )
}

export default ProfileItemComponent


const styles=StyleSheet.create({


    iNIView:{
        flexDirection:'row',
        alignItems:'center',
        width:responsiveWidth('85%'),
        justifyContent:'space-between',
        marginVertical:responsiveHeight(2)
    },
    iNView:{
        flexDirection:'row',
        alignItems:'center',
    },
    iView:{
        backgroundColor:COLORS.bg1,
        padding:responsiveHeight(1),
        borderRadius:responsiveHeight(2.5),
    },
    text:{
        fontSize:FontSizes.large,
        fontFamily:Fonts.RobotoMedium,
        marginLeft:responsiveWidth(3)
    },
    border:{
        borderWidth:.5,
        borderColor:COLORS.grey,
        borderRadius:responsiveHeight(2),
        marginTop:responsiveHeight(2),
        paddingHorizontal:responsiveWidth(2)
    },

})