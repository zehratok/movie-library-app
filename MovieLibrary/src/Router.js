import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'components';
import {Provider} from 'react-redux';
import AppStack from 'navigations/appStack';
import SplashScreen from 'react-native-splash-screen';
import store from 'redux/store';

const Router = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar />
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};

export default Router;
