import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Routes;
