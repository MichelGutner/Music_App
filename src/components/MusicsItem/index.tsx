import { View, Text } from 'react-native';
import React from 'react';

const MusicsItem = ({ track }) => {
  const { title, artist, genre, artwork, duration } = track;
  return (
    <View>
      <Text>{title}</Text>
      <Text>{artist}</Text>
    </View>
  );
};

export default MusicsItem;

/* id: '1',
    url: require('../assets/Mp3/Funk/Hoje_eu_vou_ganhar.mp3'),
    title: 'Hoje eu vou buscar',
    artist: 'MC Hariel',
    album: 'Funk',
    genre: 'Funk',
    artwork: require('../assets/Artwork/hoje_eu_vou_ganhar.jpg'),
    duration: 193,*/
