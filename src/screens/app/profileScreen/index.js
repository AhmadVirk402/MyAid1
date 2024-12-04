import { View, Text, StyleSheet,FlatList, TouchableOpacity } from 'react-native'
import { COLORS,FontSizes,Fonts } from '../../../utilities'
import React from 'react'
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import { GoBack, NotificationComponent, ProfileItemComponent } from '../../../components'
import { Image } from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';

const ProfileScreen = () => {
    const navigation = useNavigation();
const personData = [
    { id: "1", name: "Manage Address", iconName:'arrow-forward',img:require('../../../assets/images/home.png'),iBGColor:COLORS.bg1, onPress:()=>navigation.navigate('ManageAddress') },
    { id: "2", name: "Change Password", iconName:'arrow-forward',img:require('../../../assets/images/locks.png'),iBGColor:COLORS.bg2,onPress:()=>navigation.navigate('ChangePasswordScreen') },
    { id: "3", name: "Payment Method", iconName:'arrow-forward',img:require('../../../assets/images/cards.png'),iBGColor:COLORS.bg3 ,onPress:()=>navigation.navigate('PaymentMethod') },
    { id: "4", name: "Support", iconName:'arrow-forward',img:require('../../../assets/images/handFree.png'),iBGColor:COLORS.bg4  },
    { id: "5", name: "Privacy Policy", iconName:'arrow-forward',img:require('../../../assets/images/verify.png'),iBGColor:COLORS.bg5  },
    { id: "6", name: "Terms & Conditions", iconName:'arrow-forward',img:require('../../../assets/images/notes.png'),iBGColor:COLORS.bg6  },
    { id: "7", name: "Logout", date: "19/03/2024",img:require('../../../assets/images/door.png'),iBGColor:COLORS.bg7  },
  ];


  return (
    <View style={styles.container}>
    <GoBack name={'Profile'}/>
    <View style={styles.mainContainer}>
      <View style={styles.profileView}>
        <View style={styles.pNView}>
        <Image source={require('../../../assets/images/profileImage.png')}/>
        <View style={styles.nNView}> 
            <Text style={styles.name}>John K</Text>
            <Text style={styles.num}>+91 1234567890</Text>
        </View>
        </View>
        <TouchableOpacity style={styles.iconView} onPress={()=>navigation.navigate('EditProfile')}>
            <Image source={require('../../../assets/images/Pencil.png')} style={{tintColor:COLORS.white}}/>
        </TouchableOpacity>


      </View>
      <View style={styles.line}/>


     <View style={styles.border}>

      <FlatList
              data={personData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
              <ProfileItemComponent
              name={item.name}
              iconName={item.iconName}
              img={item.img}
              iBGColor={item.iBGColor}
              onpress={item.onPress}
              />
              )}

            />

      </View>



      </View>
    </View>
  )
}

export default ProfileScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
    },
    mainContainer:{
        marginHorizontal:responsiveWidth(4)
    },
    profileView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:responsiveHeight(2.5)
    },
    pNView:{
        flexDirection:'row'
    },
    nNView:{
        marginLeft:responsiveHeight(1)
    },
    name:{
        fontSize:FontSizes.h5,
        fontFamily:Fonts.RobotoMedium
        
    },
    num:{
        fontSize:FontSizes.regular,
        fontFamily:Fonts.RobotoMedium,
        marginTop:responsiveHeight(1)
    },
    iconView:{
        backgroundColor:COLORS.primary,
        padding:responsiveHeight(1),
        borderRadius:responsiveHeight(2.5),
    },
    line:{
        width:responsiveWidth('100%'),
        borderBottomWidth:0.5,
        borderBottomColor:COLORS.grey,
        marginLeft:responsiveWidth(-4)

    },



    border:{
        borderWidth:.5,
        borderColor:COLORS.grey,
        borderRadius:responsiveHeight(2),
        marginTop:responsiveHeight(2),
        paddingHorizontal:responsiveWidth(2)
    },

})