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
    alignSelf: 'center',
    width: SIZES.width * 0.5,
    height: SIZES.height * 0.5,
  },
});
