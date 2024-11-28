// import React, {useCallback, useMemo, useRef} from 'react';
// import {View, Text, StyleSheet, Dimensions, Image, FlatList} from 'react-native';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import BottomSheet, {
//   BottomSheetFlashList,
//   BottomSheetTextInput,
//   BottomSheetView,
// } from '@gorhom/bottom-sheet';
// import {
//     widthPercentageToDP as responsiveWidth,
//     heightPercentageToDP as responsiveHeight,
//     responsiveFont,

// } from 'react-native-responsive-hook';
// // import {
// //   appStyles,
// // // } from '../../services';
// // import {EachCommentMessage, Labels, Lines} from '..';
// import { COLORS, Fonts } from '../../utilities';

// const BottomSheets = () => {
//   // ref
//   const bottomSheetRef = useRef(null);
//   const snapPoints = useMemo(() => [
//     responsiveHeight(10),
//     responsiveHeight(70),
//   ]);
//   // callbacks
//   const handleSheetChanges = useCallback(index => {
//     console.log('handleSheetChanges', index);
//   }, []);

//   // renders
//   return (
//     <BottomSheet
//       ref={bottomSheetRef}
//       index={0}
//       snapPoints={snapPoints}
//       //onChange={handleSheetChanges}
//       handleIndicatorStyle={styles.handleIndicatorStyle}
//       style={styles.MainBottomSheet}
//       //keyboardBehavior="interactive"
//       android_keyboardInputMode="adjustResize">
//       <BottomSheetView style={styles.contentContainer}>
//         <View>
//           <Text style={styles.title}>24 COMMENTS</Text>
//         </View>
//         {/* <Lines.Horizontal color={COLORS.grey} /> */}
//         <FlatList
//           data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15]}
//           //showsVerticalScrollIndicator={false}
//           ListFooterComponent={() => {
//             return (
//               <>
//                {/*  <Lines.Horizontal height={0.5} color={COLORS.grey} /> */}
                
//               </>
//             );
//           }}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={() => {
//             return <Text>hyhyhyhy</Text>;
//           }}
//         />
//         <View  style={styles.InputMainContainerStyles}>
//         <View
           
//             style={styles.InputBorderStyling}>
//             <BottomSheetTextInput
//               numberOfLines={1}
//               style={styles.InputContainerStyles}
//               placeholder="Message"
//             />
//             <Image source={require('../../assets/images/icon1.png')} style={styles.IconStyles} />
//             <Image source={require('../../assets/images/icon2.png')} style={styles.IconStyles} />
//           </View>
//         </View>
//       </BottomSheetView>
//     </BottomSheet>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'grey',
//   },
//   handleIndicatorStyle: {
//     backgroundColor: 'rgba(0, 0, 0, 0.25)',
//     width: responsiveWidth(13),
//   },
//   contentContainer: {
//     flex: 1,
//     //height: Dimensions.get('window').height,
//     backgroundColor:'red'
//   },
//   MainBottomSheet: {
//     marginHorizontal: responsiveHeight(1),
//     borderWidth: 1,
//     borderRadius: responsiveWidth(4),
//     borderColor: COLORS.grey,
//     shadowColor:COLORS.light
//   },
//   title: {
//     fontFamily:Fonts.RobotoBold,
//   },
//   InputContainerStyles: {
//     //backgroundColor: 'red',
//     height: responsiveHeight(2),
//     width: responsiveWidth(63),
//     paddingHorizontal: responsiveWidth(2),
//   },
//   InputBorderStyling: {
//     borderRadius: responsiveWidth(2),
//     overflow: 'hidden',
//     backgroundColor: '#F5F5F5',
//     alignItems:'center',
//     flexDirection:'row'
//   },
//   InputMainContainerStyles: {
//     height: responsiveHeight(10.6),
//     //alignItems: 'center',
//     paddingHorizontal:responsiveWidth(2),
//     justifyContent:'center'
//   },
//   IconStyles: {
//     //backgroundColor: 'blue',
//     height: responsiveHeight(4),
//     width: responsiveWidth(8),
//     resizeMode: 'contain',
//     marginHorizontal: responsiveWidth(1),
//   },
// });

// export default BottomSheets;