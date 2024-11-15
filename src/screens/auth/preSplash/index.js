import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../../../utilities'

const PreSplash = () => {
  return (
    <View style={styles.container}>
      
    </View>
  )
}

export default PreSplash

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:COLORS.primary
    }
})