import { View, Text, StyleSheet,FlatList } from 'react-native'
import { COLORS,FontSizes,Fonts } from '../../../utilities'
import React from 'react'
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import { GoBack, NotificationComponent } from '../../../components'
import { Image } from 'react-native-animatable';
import { Icon } from '@rneui/base';
import { ScrollView } from 'react-native-gesture-handler';


const NotificationData = [
  {
    id: 1,
    borderTopLeftRadius:responsiveHeight(2),
    borderTopRightRadius:responsiveHeight(2),
    borderBottomWidth:1,
  },
  {
    id: 2,
    borderBottomWidth:1,
 
  },
  {
    id: 3,
    borderBottomWidth:1,
  

  },
  {
    id: 4,
    borderBottomRightRadius:responsiveHeight(2),
    borderBottomLeftRadius:responsiveHeight(2),
  },
]

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <GoBack name={'Notifications'}/>
      <View style={styles.mainContainer}>

      <Text style={styles.mainText}>Today</Text>
  
      <FlatList
            data={NotificationData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <NotificationComponent
              borderTopLeftRadius={item.borderTopLeftRadius}
              borderTopRightRadius={item.borderTopRightRadius}
              borderBottomLeftRadius={item.borderBottomLeftRadius}
              borderBottomRightRadius={item.borderBottomRightRadius}
              borderBottomWidth={item.borderBottomWidth}
             
              />
            )}
            showsVerticalScrollIndicator={false}
          />


<Text style={styles.mainText}>Yesterday</Text>
  
  <FlatList
        data={NotificationData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationComponent
          borderTopLeftRadius={item.borderTopLeftRadius}
          borderTopRightRadius={item.borderTopRightRadius}
          borderBottomLeftRadius={item.borderBottomLeftRadius}
          borderBottomRightRadius={item.borderBottomRightRadius}
          borderBottomWidth={item.borderBottomWidth}
         
          />
        )}
        showsVerticalScrollIndicator={false}
      />


      




      </View>
      </ScrollView>
    </View>
  )
}

export default NotificationScreen

const styles=StyleSheet.create({
  container: {
    flex: 1,
},
mainContainer:{
  paddingHorizontal:responsiveWidth(4)
},
mainText:{
 fontSize:FontSizes.h5,
 fontFamily:Fonts.RobotoMedium,
 marginVertical:responsiveHeight(2)
},
notificationView:{
  flexDirection:'row',
  width:responsiveWidth('93%'),
  justifyContent:'space-between',
  backgroundColor:COLORS.white,
  padding:responsiveWidth(2),
  //borderRadius:responsiveHeight(2),
  borderTopLeftRadius:responsiveHeight(2),
  borderTopRightRadius:responsiveHeight(2)
},
notificationView2:{
  flexDirection:'row',
  width:responsiveWidth('93%'),
  justifyContent:'space-between',
  backgroundColor:COLORS.white,
  padding:responsiveWidth(2),
  //borderRadius:responsiveHeight(2),
},
nText1:{
  fontSize:FontSizes.large,
  fontFamily:Fonts.RobotoMedium
},
nText2:{
  fontSize:FontSizes.small,
  fontFamily:Fonts.RobotoLight
},

})