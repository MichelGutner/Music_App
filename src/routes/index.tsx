import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import AlbumsPlayList from '../screens/AlbumPlayList';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AlbumsList" component={AlbumsPlayList} />
    </Stack.Navigator>
  );
};

export default Routes;
