import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { COLORS,FontSizes,Fonts } from '../../utilities';
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import {Icon} from '@rneui/base';
import {Image, Pressable, StyleSheet, View,Text,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../../utilities/constant';
const BottomTabStack = createBottomTabNavigator();

export default function CustomTabBar({props}) {
  const tabIconSize = responsiveFont(20);
  const Navigation = useNavigation()

  const WhichBtnIsSelected = props.state.index;


  // const HandleChangeRoutes = ({routes}) => {
  //   Navigation.navigate(routes)
  // };

  const HandleChangeRoutes = (routeName) => {
    props.navigation.navigate(routeName)
  };

  const EachIcon = ({
    IconName,
    IconType,
    IsSelected,
    CustomImage,
    TabName,
    onPress,
  }) => {
    return (
      <Pressable onPress={onPress}>
        <View
         
          style={[
            IsSelected
              ? styles.SelectedContainerStyle
              : styles.UnSelectedContainerStyle,
          ]}>
          {CustomImage ? (
            <Image
              source={CustomImage}
              style={[
                {
                  height: responsiveHeight(3),
                  width: responsiveWidth(6.5),
                },
                IsSelected && {tintColor: COLORS.white, opacity: 1},
              ]}
              resizeMode="contain"
            />
          ) : (
            <>
              <Icon
                name={IconName}
                type={IconType}
                size={responsiveWidth(7)}
                color={IsSelected && COLORS.primary}
              />
            </>
          )}
          {IsSelected && (
            <>
              <View style={styles.spacer}></View>
              <View>
                <Text style={styles.SelectedTextStyle}>{TabName}</Text>
              </View>
            </>
          )}
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <EachIcon
        CustomImage={require('../../assets/images/bottom1.png')}
        IsSelected={WhichBtnIsSelected === 0}
        TabName={'Home'}
        onPress={() => {
          HandleChangeRoutes(routes.home);
        }}
      />
      <EachIcon
        CustomImage={require('../../assets/images/bottom2.png')}
        IsSelected={WhichBtnIsSelected === 1}
        TabName={'Needs & Wants'}
        onPress={() => {
          HandleChangeRoutes(routes.needAndWant);
        }}
      />
      <EachIcon
        CustomImage={require('../../assets/images/bottom3.png')}
        IsSelected={WhichBtnIsSelected === 2}
        TabName={'Track Donations'}
        onPress={() => {
          HandleChangeRoutes(routes.trackDonations);
        }}
      />
      <EachIcon
        CustomImage={require('../../assets/images/bottom4.png')}
        IsSelected={WhichBtnIsSelected === 3}
        TabName={'Account'}
        onPress={() => {
          HandleChangeRoutes(routes.account);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-around',
    height:responsiveHeight(8),
    width: responsiveWidth(100),
    backgroundColor: COLORS.white,
    borderTopWidth: 0.3,
    borderTopColor: COLORS.grey,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 4,
  },
  spacer:{
    marginRight: responsiveFont(8),
  },
  UnSelectedContainerStyle: {
    height: responsiveHeight(5.5),
    width: responsiveWidth(11.5),
    borderRadius: responsiveWidth(11),
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },
  SelectedContainerStyle: {
    height: responsiveHeight(5),
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingHorizontal: responsiveWidth(4),
    borderRadius: responsiveWidth(30),
    
    flexDirection:'row'
  },
  SelectedTextStyle: {
    fontSize: responsiveFont(16),
    fontFamily:Fonts.RobotoRegular ,
    color: COLORS.white,
  },
  SelectedContainerStylesss: {
    borderRadius: responsiveWidth(30),
  },
});