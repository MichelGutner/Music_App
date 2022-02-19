import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ButtonPlayerAlbum from '../../components/ButtonPlayAlbum';
import { AlbumImage, Container, HeaderText } from './styles';

const imageAlbum = require('../../../assets/Albums/funkAlbum.jpg');

const Home = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      style={styles.linearGradient}
      colors={['#192f6a', '#4c669f', '#3b5998']}>
      <Container>
        <HeaderText>{'Albums'}</HeaderText>
        <AlbumImage source={imageAlbum}>
          <ButtonPlayerAlbum
            onPress={() => navigation.navigate('AlbumsList')}
            iconName="caretright"
            iconSize={25}
            iconColor="#FFF"
            titleButton="Tocar agora"
          />
        </AlbumImage>
      </Container>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
