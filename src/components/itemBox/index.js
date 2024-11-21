import { View, Text,Image,StyleSheet, TouchableOpacity, } from 'react-native'
import React from 'react'
import { COLORS,FontSizes,Fonts } from '../../utilities'
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import { Icon } from '@rneui/themed';



const ItemBox = ({name,number,img}) => {
  return (
    <View style={styles.itembox}>

    <View style={styles.itemImgView}>
        <Image source={img} style={styles.itemImg}/>
        <Text style={styles.itemText}>{name}</Text>
    </View>

   
    <View style={styles.itemCounting}>
        <TouchableOpacity style={styles.mp}>
      
      <Icon name="minus" type='material-community' size={20} color={COLORS.white} style={styles.mpsize}/>
      </TouchableOpacity>

      <Text style={styles.itemN}>{number}</Text>

      <TouchableOpacity style={styles.mp}>
      <Icon name="plus" type='material-community' size={20} color={COLORS.white} style={styles.mpsize}/>
      </TouchableOpacity>

    </View>

</View>

  )
}

export default ItemBox

const styles=StyleSheet.create({
    itembox:{
        borderWidth:0.5,
        borderColor:COLORS.grey,
        height:responsiveHeight(7),
        width:responsiveWidth('85%'),
        borderRadius:responsiveHeight(1),
        justifyContent:'center',
        paddingHorizontal:responsiveWidth(3),
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:responsiveHeight(1)
    },
    itemImgView:{
        flexDirection:'row',
        alignItems:'center',
        
        
    },
    itemImg:{
        height:responsiveHeight(3),
        width:responsiveWidth(6),
        tintColor:COLORS.dark
    },
    itemText:{
     fontSize:FontSizes.large,
     fontFamily:Fonts.RobotoMedium,
     marginLeft:responsiveWidth(2)
    },
    itemCounting:{
        flexDirection:'row',
        alignItems:'center',
        
    },
    mp:{
        height:responsiveHeight(3),
        width:responsiveHeight(3),
        backgroundColor:COLORS.primary,
        borderRadius:responsiveHeight(3/2),
        alignContent:'center',
        justifyContent:'center'
        
        
    },
    mpsize:{
        fontSize:FontSizes.large,
        color:COLORS.white,
        
    },
   
    itemN:{
        fontSize:FontSizes.medium,
        marginHorizontal:responsiveWidth(2)
       
       },
})