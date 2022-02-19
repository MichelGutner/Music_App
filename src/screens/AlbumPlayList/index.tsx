import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import funkSongs from '../../../services/Funk/FunkApi';
import ArtistTrack from '../../components/ArtistItem';
import ProgressBar from '../../components/Slider';
import TrackingButtons from '../../components/TrackingButtons';
import {
  ArtistImageListMusics,
  ArtistText,
  BackgroundPlayerTracking,
  Container,
  FlatListView,
  TitleText,
} from './styles';

const newSongs = [...funkSongs];

const AlbumsPlayList = () => {
  const TrackplayerInformation = newSongs[0];
  useEffect(() => {}, []);

  const renderTrack = ({ item }) => <ArtistTrack item={item} />;

  return (
    <LinearGradient
      style={styles.linearGradient}
      colors={['#192f6a', '#4c669f', '#3b5998']}>
      <Container>
        <ArtistImageListMusics source={TrackplayerInformation.artwork} />
        <TitleText>{TrackplayerInformation.title}</TitleText>
        <ArtistText>{}</ArtistText>
        <ProgressBar
          trackLength={TrackplayerInformation.duration}
          currentPosition={0}
          onSeek={0}
          onSlidingStart={0}
        />
        <BackgroundPlayerTracking>
          <TrackingButtons onNext={undefined} onPrev={undefined} />
        </BackgroundPlayerTracking>
        <FlatListView>
          <FlatList
            data={funkSongs}
            keyExtractor={track => track.id}
            renderItem={renderTrack}
          />
        </FlatListView>
      </Container>
    </LinearGradient>
  );
};

export default AlbumsPlayList;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
  },
});
