import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import Home from './src/screens/Home';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Home />
    </NavigationContainer>
  );
};

export default App;
