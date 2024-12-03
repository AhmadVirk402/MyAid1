import { View, Text, StyleSheet, FlatList, TouchableOpacity,Image } from 'react-native'
import { COLORS, FontSizes, Fonts } from '../../utilities'
import React, { useState } from 'react'
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';



const OrganizationCard = ({img1,name,buttonName}) => {
        return(
        <View style={styles.donateCard}>
        <Image source={img1} style={styles.cardImage} />
        <View style={styles.cardFooter}>
        <View style={{ padding: 10 }}>
          <Text style={styles.cardTitle}>{name}</Text>
        </View>
        
        
          <TouchableOpacity style={styles.donateButton}>
            <Text style={styles.donateText}>{buttonName}</Text>
          </TouchableOpacity>
        </View>
        </View>
      
  )
}

const styles=StyleSheet.create({
    donateCard: {
        backgroundColor: COLORS.white,
        borderRadius: responsiveHeight(1),
    
        marginVertical: responsiveWidth(2.5),
        shadowColor: COLORS.grey,
        borderColor: COLORS.grey,
        borderWidth: 0.5,
        shadowOpacity: 50,
        shadowOffset: 50,
      },
      cardImage: {
        width: '100%',
        height: responsiveHeight(13),
        borderTopLeftRadius: responsiveWidth(2.5),
        borderTopRightRadius: responsiveWidth(2.5),
      },
      cardTitle: {
        fontWeight: 'bold',
        fontSize: FontSizes.h5,
        marginTop: responsiveHeight(0.1)
      },
    
      cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:responsiveHeight(1)
      },
      donateButton: {
        backgroundColor:COLORS.primary,
         borderRadius: responsiveHeight(1),
          paddingVertical: responsiveHeight(1),
          paddingHorizontal: responsiveWidth(10)
         },
      donateText: {
         color: COLORS.white,
         fontSize:FontSizes.medium
    
         },
})

export default OrganizationCard