import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS,FontSizes,Fonts } from '../../utilities'
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const AmountComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainView}>
    <Text style={styles.mainText}>Bill Top up</Text>
    <View style={styles.innerView}>
      <Text style={styles.amount}>$56,763.20</Text>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('MoneyDonationDetails')}>
        <Text style={styles.buttonText}>Send Money</Text>
        <Icon name='arrow-forward'type='Ionicons' size={15}color={COLORS.white}/>
      </TouchableOpacity>
    </View>
  </View>
  )
}


const styles=StyleSheet.create({

mainView:{
    borderWidth:1,
    borderColor:COLORS.primary,
    borderRadius:responsiveHeight(2),
    padding:responsiveHeight(2),
    marginTop:responsiveHeight(1)
  },
  mainText:{
    fontSize:FontSizes.medium
  },
  innerView:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:responsiveWidth(1),
    marginVertical:responsiveHeight(2)
    
  },
  amount:{
    fontSize:FontSizes.h4,
    fontFamily:Fonts.RobotoMedium,
  },
  button:{
    flexDirection:'row',
    backgroundColor:COLORS.primary,
    borderRadius:responsiveHeight(2),
    alignItems:'center',
    padding:responsiveHeight(1)
  },
  buttonText:{
    color:COLORS.white,
    marginRight:responsiveWidth(2)
  },

})

export default AmountComponent