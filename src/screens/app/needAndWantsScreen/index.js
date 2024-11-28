import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, FlatList, Modal, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, Fonts, FontSizes } from '../../../utilities';
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import { ItemComponent, MainHeader, SecondDonationCard, RegisterInput, Button, ModalGoBack, ModalItem } from '../../../components';
import { useNavigation } from '@react-navigation/native';


const categories = [
  {
    id: '1',
    name: 'Clothes',
    img: require('../../../assets/images/item1.png'),
  },
  {
    id: '2',
    name: 'Food',
    img: require('../../../assets/images/item2.png'),
  },
  {
    id: '3',
    name: 'Medicines',
    img: require('../../../assets/images/item3.png'),
  },
  {
    id: '4',
    name: 'Custom',
    img: require('../../../assets/images/plus.png'),
  },
]
const itemData = [
  {
    id: '1',
    name: 'Shirt',
    img: require('../../../assets/images/item1.png'),
  },
  {
    id: '2',
    name: 'jeans',
    img: require('../../../assets/images/item4.png'),
  },
  {
    id: '3',
    name: 'dress',
    img: require('../../../assets/images/item5.png'),
  },
  {
    id: '4',
    name: 'Sweater',
    img: require('../../../assets/images/item6.png'),
  },
]

const itemData2 = [
  {
    id: '1',
    name: 'Suit',
    img: require('../../../assets/images/item7.png'),
  },
  {
    id: '2',
    name: 'Shoes',
    img: require('../../../assets/images/item8.png'),
  },
  {
    id: '3',
    name: 'Accessories',
    img: require('../../../assets/images/item9.png'),
  },
  {
    id: '4',
    name: 'Custom',
    img: require('../../../assets/images/item10.png'),
  },


];


const cardData = [
  {
    id: '1',
    name: 'Orphanage',
    img: require('../../../assets/images/img9.png'),
    raisedOf: '85%',
    raiseGoal: 'Cloths',
  },
  {
    id: '2',
    name: 'Myself',
    img: require('../../../assets/images/img7.png'),
    raisedOf: '85%',
    raiseGoal: '30000$',
  },
  {
    id: '3',
    name: 'Orphanage',
    img: require('../../../assets/images/img10.png'),
    raisedOf: '85%',
    raiseGoal: 'Food',
  },

];


export default function NeedAndWantsScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleView = () => {
    setIsVisible(v => !v); // Toggle the visibility
  };

  return (

    <View>
      <ScrollView >
        {/* Header */}
        <MainHeader />
        <View style={styles.container}>


          {/* Donate Section */}
          <View style={styles.selfView}>
            <Text style={styles.mainText}>Self Donations</Text>

            <TouchableOpacity style={styles.addView} onPress={() => {
              setModalVisible(true);
            }}>
              <Image source={require('../../../assets/images/plus.png')} style={styles.add} />
            </TouchableOpacity>
          </View>



          <FlatList
            data={cardData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <SecondDonationCard
                name={item.name}
                img1={item.img}
                raisedOf={item.raisedOf}
                raisedGoal={item.raiseGoal}
                onPress={() => navigation.navigate('ViewDetailsScreen')}
              />
            )}
            showsVerticalScrollIndicator={false}
          />

        </View>





      </ScrollView>



      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <ModalGoBack name={'Choose Self Categories'} onPress={() => setModalVisible(false)} />

            <Text style={styles.mainText2}>Categories</Text>
            <View style={styles.categoryContainer}>

              {
                categories.map((item, index) => {
                  if (item.name === 'Custom')
                    return (
                      <TouchableOpacity style={styles.category} onPress={()=>navigation.navigate('CustomDonationScreen')}>
                        <View style={styles.categoryimg}>
                          <Image source={require('../../../assets/images/plus.png')} />
                        </View>
                        <Text style={styles.itemText}>Custom</Text>
                      </TouchableOpacity>)
                  else
                    return (
                      <ItemComponent
                        name={item.name}
                        img={item.img}
                        onPress={() => {
                          setSelectedCategory(pv=>{
                            const nv=pv===item.name?null:item.name
                            return nv
                          })
                        }}
                        isPressed={selectedCategory === item.name}
                      />
                    )
                })
              }
              {/* <ItemComponent
                name={'Clothes'}
                img={require('../../../assets/images/item1.png')}
                onPress={()=>{
                  setSelectedCategory('Clothes')
                }}
                isPressed={selectedCategory==='Clothes'}
              />
                <ItemComponent
                  name={'Food'}
                  img={require('../../../assets/images/item2.png')}
                  onPress={()=>{
                    setSelectedCategory('Food')
                  }}
                  isPressed={selectedCategory==='Food'}
                />
                <ItemComponent
                  name={'Medicines'}
                  img={require('../../../assets/images/item3.png')}
                  onPress={()=>{
                    setSelectedCategory('Medicines')
                  }}
                  isPressed={selectedCategory==='Medicines'}
                />


              <TouchableOpacity style={styles.category}>
                <View style={styles.categoryimg}>
                  <Image source={require('../../../assets/images/plus.png')} />
                </View>
                <Text style={styles.itemText}>Clothes</Text>
              </TouchableOpacity> */}

            </View>
            {selectedCategory && (
              <View style={styles.modalContainer}>
                <Text style={styles.mainText2}>Clothes</Text>
                <FlatList
                  data={selectedCategory === 'Clothes' ? itemData : itemData}
                  keyExtractor={(item) => item.id}
                  horizontal
                  renderItem={({ item }) => (
                    <ModalItem
                      name={item.name}
                      img={item.img}
                    />
                  )}
                  showsVerticalScrollIndicator={false}
                />
                <FlatList
                  data={itemData2}
                  keyExtractor={(item) => item.id}
                  horizontal
                  renderItem={({ item }) => (
                    <ModalItem
                      name={item.name}
                      img={item.img}
                    />
                  )}
                  showsVerticalScrollIndicator={false}
                />


                <View style={styles.modalButton}>
                  <Button
                    name="Next"
                    onPress={() => {
                      setModalVisible(false)
                      setTimeout(() => {
                        navigation.navigate('ClothesDonationScreen')
                      }, 1000);
                    }}
                  />

                </View>

              </View>
            )}

          </View>
        </View>

      </Modal>


    </View>


  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,

  },


  mainText: {
    fontSize: FontSizes.h5,
    fontFamily: Fonts.RobotoBlack,

  },
  selfView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: responsiveHeight(1.5),
    paddingRight: responsiveHeight(0.1)

  },
  addView: {
    backgroundColor: COLORS.primary,
    padding: responsiveHeight(1),
    width: responsiveWidth(7.5),
    alignItems: 'center',
    borderRadius: responsiveHeight(3),

  },
  add: {
    height: responsiveHeight(1.5),
    width: responsiveWidth(5)
  },

  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(1.5),
    width: responsiveWidth('87%')
  },
  category: {
    alignItems: 'center',
    marginBottom: responsiveHeight(3),
    borderRadius: responsiveHeight(5)
  },
  categoryimg: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    width: responsiveWidth(20),
    height: responsiveHeight(10),
    borderRadius: responsiveHeight(5),

  },
  itemText: {
    fontSize: FontSizes.regular,
    fontFamily: Fonts.RobotoMedium
  },
  mainText2: {
    fontSize: FontSizes.h5,
    fontFamily: Fonts.RobotoBlack,
    width: responsiveWidth('85%'),
    marginVertical: responsiveHeight(1)
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalContainer: {
    width: responsiveWidth('100%'),
    backgroundColor: COLORS.white,
    borderTopRightRadius: responsiveWidth(7),
    borderTopLeftRadius: responsiveWidth(7),
    padding: responsiveHeight(2),
    alignItems: 'center',
  },
  modalRegularText: {
    fontSize: FontSizes.regular,
    width: responsiveWidth(90),
    marginTop: responsiveHeight(3),
    textAlign: 'center'
  },
  modalButton: {
    marginBottom: responsiveHeight(4)
  }, modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalContainer: {
    width: responsiveWidth('100%'),
    backgroundColor: COLORS.white,
    borderTopRightRadius: responsiveWidth(7),
    borderTopLeftRadius: responsiveWidth(7),
    padding: responsiveHeight(2),
    alignItems: 'center',
  },
  modalRegularText: {
    fontSize: FontSizes.regular,
    width: responsiveWidth(90),
    marginTop: responsiveHeight(3),
    textAlign: 'center'
  },
  modalButton: {
    marginBottom: responsiveHeight(4)
  },



});


