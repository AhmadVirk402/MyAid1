import {
    widthPercentageToDP as responsiveWidth,
    heightPercentageToDP as responsiveHeight,
    responsiveFont,
  } from 'react-native-responsive-hook';

export const FontSizes = {
  h1: responsiveFont(42),
  h2: responsiveFont(38),
  h3: responsiveFont(32),
  h4: responsiveFont(28),
  h5: responsiveFont(24),
  h6: responsiveFont(20),
  input: responsiveFont(1.6),
  large: responsiveFont(18),
  medium: responsiveFont(16),
  regular: responsiveFont(14),
  small: responsiveFont(12),
  tiny: responsiveFont(10),
  xTiny: responsiveFont(6),
  xxTiny:responsiveFont(4)
}
