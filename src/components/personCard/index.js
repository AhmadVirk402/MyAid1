import { View, Text, StyleSheet, FlatList, TouchableOpacity,Image } from 'react-native'
import { COLORS, FontSizes, Fonts } from '../../utilities'
import React, { useState } from 'react'
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';



const PersonCard = ({name,date,price}) => {
        return(
            <View style={styles.listItem}>
            <Image source={require('../../assets/images/flower.png')} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.date}>{date}</Text>
            </View>
            <Text style={styles.price}>{price}</Text>
          </View>
      
  )
}

const styles=StyleSheet.create({
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: responsiveHeight(1.4),
      },
      image: {
        marginRight: responsiveHeight(1.5),
      },
      textContainer: {
        flex: 1,
      },
      name: {
        fontSize: FontSizes.large,
        fontFamily: Fonts.RobotoBlack,
      },
      date: {
        fontSize: FontSizes.medium,
        color: COLORS.dark,
      },
      price: {
        fontSize: FontSizes.large,
        fontFamily: Fonts.RobotoBlack,
        color: COLORS.primary,
      },
        
})

export default PersonCard