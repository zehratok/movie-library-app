import React from 'react';
import {StatusBar} from 'react-native';
import {COLORS} from 'constants/theme';

const Statusbar = () => {
  return <StatusBar backgroundColor={COLORS.black} barStyle="light-content" />;
};
export default Statusbar;
