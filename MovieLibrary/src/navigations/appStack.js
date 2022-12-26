import React from 'react';
import {AppLayout, Details} from 'screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={AppLayout} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
export default AppStack;
