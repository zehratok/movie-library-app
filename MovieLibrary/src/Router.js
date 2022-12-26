import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from 'navigations/appStack';
import {Provider} from 'react-redux';
import store from 'redux/store';
import SplashScreen from 'react-native-splash-screen';

const Router = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};

export default Router;
