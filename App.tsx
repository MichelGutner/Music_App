import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import Routes from './src/routes';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
