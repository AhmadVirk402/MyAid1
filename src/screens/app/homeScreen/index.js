import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, FlatList, Modal, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, Fonts, FontSizes } from '../../../utilities';
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import { ItemComponent, MainHeader, DonationCard, RegisterInput, Button, ModalGoBack, ModalItem } from '../../../components';
import { useNavigation } from '@react-navigation/native';



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
    name: 'Money For Old Home',
    img: require('../../../assets/images/img7.png'),
    raisedOf: '$5000',
    raiseGoal: '$1000',
  },
  {
    id: '2',
    name: 'Old Age Home',
    img: require('../../../assets/images/img7.png'),
    raisedOf: '85%',
    raiseGoal: 'Cloths & Food',
  },
  {
    id: '3',
    name: 'Orphanage',
    img: require('../../../assets/images/img9.png'),
    raisedOf: '85%',
    raiseGoal: 'Cloths',
  },
  {
    id: '4',
    name: 'Earthquake',
    img: require('../../../assets/images/img10.png'),
    raisedOf: '85%',
    raiseGoal: 'Food & First Aid',
  },

];


const HomeScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    
    <View>
      <ScrollView >
        {/* Header */}
        <MainHeader />
        <View style={styles.container}>
          {/* Search Bar */}

          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#888" />
            <TextInput placeholder='Search' />
          </View>


          {/* Categories */}
          <Text style={styles.mainText}>Categories</Text>
          <View style={styles.categoryContainer}>


            <ItemComponent
              name={'Clothes'}
              img={require('../../../assets/images/item1.png')}
              onPress={() => {
                setModalVisible(true);
              }}
            />
            <TouchableOpacity>
              <ItemComponent
                name={'Food'}
                img={require('../../../assets/images/item2.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <ItemComponent
                name={'medicines'}
                img={require('../../../assets/images/item3.png')}
              />
            </TouchableOpacity>


            <TouchableOpacity style={styles.category}>
              <View style={styles.categoryimg}>
                <Image source={require('../../../assets/images/plus.png')} />
              </View>
              <Text style={styles.itemText}>Clothes</Text>
            </TouchableOpacity>


          </View>

          {/* Donate Section */}

          <Text style={styles.mainText}>Donate</Text>




          <FlatList
            data={cardData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <DonationCard
                name={item.name}
                img1={item.img}
                raisedOf={item.raisedOf}
                raisedGoal={item.raiseGoal}
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
            <ModalGoBack name={'Choose Cloths'} onPress={() => setModalVisible(false)} />

            <FlatList
              data={itemData}
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
                name="Add For Donation"
                onPress={() => {
                  setModalVisible(false)
                  setTimeout(() => {
                    navigation.navigate('MyDonationScreen')
                  }, 1000);
                }}
              />
              <TouchableOpacity onPress={() => { }}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Send Monetary Donations</Text>
                </View>
              </TouchableOpacity>
            </View>

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

  searchContainer: {
    flexDirection: 'row',
    borderRadius: responsiveHeight(2),
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(3.5),
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(1.5),
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.grey
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(1.5)
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
  mainText: {
    fontSize: FontSizes.h5,
    fontFamily: Fonts.RobotoBlack
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
  },


  button: {
    width: responsiveWidth('85%'),
    height: responsiveHeight(6.5),
    backgroundColor: COLORS.bgColor2,
    borderRadius: responsiveWidth(2.5),
    justifyContent: 'center',
    marginTop: responsiveHeight(2.5),
    borderColor: COLORS.primary,
    borderWidth: 1
  },
  buttonText: {
    fontSize: FontSizes.h6,
    color: COLORS.dark,
    fontFamily: Fonts.RobotoRegular,
    textAlign: 'center',
  },

});

export default HomeScreen;
