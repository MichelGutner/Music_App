import React from 'react';
import { Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { setupPlayer } from '../../components/Trackers';
import { AlbumImage, Container, HeaderText } from './styles';

const Home = () => {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={['#192f6a', '#4c669f', '#3b5998']}>
      <Container>
        <HeaderText>{'Albums'}</HeaderText>
        <AlbumImage source={require('../../../assets/Albums/funkAlbum.jpg')} />
        <Button onPress={() => setupPlayer()} title="always" />
      </Container>
    </LinearGradient>
  );
};

export default Home;
