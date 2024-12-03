import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, FlatList, Modal, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FontSizes, Fonts } from '../../../utilities';
import { GoBack, MainHeader, ItemBox, MainItemBox, MiniButtons,RegisterInput,Button, ModalGoBack, InputField } from '../../../components';
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const CancelledScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView >
        {/* Header */}
        <GoBack name={'Cancelled'} />

        <View style={styles.mainItemView}>
          <View style={styles.riderPN}>
            <View style={styles.riderIViews}>
              <Image source={require('../../../assets/images/img6.png')} />
              <View>
                <Text style={styles.rName}>Cristopert Dastin</Text>
                <View style={{ flexDirection: 'row', marginLeft: responsiveWidth(1) }}>
                  <Image source={require('../../../assets/images/miniStar.png')} />
                  <Text style={{ fontFamily: Fonts.RobotoBlack }}>5.0</Text>
                </View>
              </View>
            </View>

            <View style={styles.riderIViews}>
              <TouchableOpacity style={styles.iconView} onPress={()=>navigation.navigate('ChatScreen')}>
                <Icon name='mail-outline' type='material' color={COLORS.white} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.imgView2}>
                <Image source={require('../../../assets/images/bike.png')} style={styles.img} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.line} />

        </View>


        <View style={styles.mainContainer}>
          <View style={styles.textView}>
            <Text style={styles.uploadText}>Items</Text>
          </View>

          <MainItemBox />

          <View style={styles.textView}>
            <Text style={styles.uploadText}>Order Status</Text>
          </View>

          <View style={styles.addressView}>
            <View >
              <Icon name='calendar-month' type='material' color={COLORS.primary} />
            </View>
            <View style={styles.textView2}>
              <Text style={styles.text1}>1213 Washington Blvd, Belpre, OH </Text>
              <Text style={styles.text2}>18 January 2022, 4:38 PM</Text>
            </View>
          </View>
          <View style={styles.line2}></View>
          <View style={styles.addressView}>
            <View >
              <Icon name='inbox' type='material' color={COLORS.primary} />
            </View>
            <View style={styles.textView2}>
              <Text style={styles.text1}>415 W Ervin Rd, Van Wert, OH </Text>
              <Text style={styles.text2}>18 January 2022</Text>
            </View>
          </View>
          <View style={styles.line2}></View>
          <View style={styles.addressView}>
            <View >
              <Icon name='mail' type='material' color={COLORS.primary} />
            </View>
            <View style={styles.textView2}>
              <Text style={styles.text1}>1110 Elida Ave, Delphos, OH  </Text>
              <Text style={styles.text2}>18 January 2022</Text>
            </View>
          </View>
          <View style={styles.line2}></View>
          <View style={styles.addressView}>
            <View >
              <Icon name='verified' type='material' color={COLORS.primary} />
            </View>
            <View style={styles.textView2}>
              <Text style={styles.text1}>121 Pike St, Marietta, OH  </Text>
              <Text style={styles.text2}>18 January 2022</Text>
            </View>
          </View>


          <View style={styles.textView}>
            <Text style={styles.uploadText}>Upload Item Images</Text>
          </View>

          <View>
            <View style={styles.itemImg}>
              <Image source={require('../../../assets/images/itemImg1.png')} style={styles.itemStyle} />
              <Image source={require('../../../assets/images/itemImg2.png')} style={styles.itemStyle} />
              <Image source={require('../../../assets/images/itemImg3.png')} style={styles.itemStyle} />
            </View>
            <View style={styles.spacer} />
            <View style={styles.itemImg}>
              <Image source={require('../../../assets/images/itemImg1.png')} style={styles.itemStyle} />
              <Image source={require('../../../assets/images/itemImg2.png')} style={styles.itemStyle} />
              <Image source={require('../../../assets/images/itemImg3.png')} style={styles.itemStyle} />
            </View>

          </View>

          



        </View>
      </ScrollView >
     
    </View >
  )
}
export default CancelledScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,

  },
  mainContainer: {
    paddingHorizontal: responsiveHeight(2),
    alignItems: 'center',
    marginBottom:responsiveHeight(1)
  },

  mainItemView: {
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(1),
    paddingHorizontal: responsiveHeight(2),

  },
  riderPN: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveHeight(1.5),
    paddingVertical: responsiveHeight(1),
    borderRadius: responsiveHeight(2)
  },
  rName: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.RobotoMedium,
    marginLeft: responsiveWidth(2.1),
  },
  iconView: {
    backgroundColor: COLORS.primary,
    padding: responsiveHeight(1),
    borderRadius: responsiveHeight(1),
    marginRight: responsiveHeight(1),
  },
  img: {
    height: responsiveHeight(2.5),
    width: responsiveWidth(6)
  },
  imgView2: {
    padding: responsiveHeight(1),
    borderRadius: responsiveHeight(1),
    borderWidth: 0.5,
    borderColor: COLORS.primary,
  },
  riderIViews: {
    flexDirection: 'row',
    alignItems: 'center'

  },
  line: {
    width: responsiveHeight(40),
    borderBottomWidth: .2,
    borderColor: COLORS.grey,
    marginVertical: responsiveHeight(2),
    marginLeft: responsiveWidth(3)
  },
  textView: {
    textAlign: 'left',
    width: responsiveWidth('80%'),
    marginVertical: responsiveHeight(1)
  },
  uploadText: {
    fontSize: FontSizes.h5,
    fontFamily: Fonts.RobotoMedium,

  },
  addressView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textView2: {
    textAlign: 'left',
    width: responsiveWidth('80%'),
    marginVertical: responsiveHeight(1),
    marginLeft: responsiveWidth(2)
  },
  text1: {
    fontSize: FontSizes.medium,
    fontFamily: Fonts.RobotoMedium
  },
  text2: {
    fontSize: FontSizes.regular,
    fontFamily: Fonts.RobotoMedium,
    color: COLORS.grey
  },
  line2: {
    height: responsiveHeight(3),
    borderLeftWidth: 1,
    borderStyle: 'dashed',
    width: responsiveWidth('82%'),
    borderColor: COLORS.primary

  },
  itemImg: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemStyle: {
    width: responsiveWidth(26),
  },
  itemImg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth('82%')
  },
  itemStyle: {
    width: responsiveWidth(26),
  },
  spacer: {
    marginVertical: responsiveHeight(1)
  },
 
})