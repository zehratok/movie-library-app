import React from 'react';
import {StyleSheet} from 'react-native';
import {SIZES} from 'constants/theme';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <LottieView
      style={styles.container}
      source={require('assets/animations/loading.json')}
      autoPlay
    />
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZES.width,
    height: SIZES.height,
  },
});
