import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import TrackPlayer, {
  Event,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import funkSongs from '../../../services/Funk/FunkApi';
import ArtistImageItem from '../../components/ArtistImageItem';
import ArtistTrack from '../../components/ArtistItem';
import PlayPauseButton from '../../components/PlayPauseButton';
import ProgressBar from '../../components/Slider';
import { SkipTo } from '../../components/Trackers';
import {
  ArtistImageListMusics,
  ArtistText,
  BackgroundPlayerTracking,
  Container,
  FlatListView,
  TitleText,
} from './styles';

const { width } = Dimensions.get('window');
const newSongs = [...funkSongs];

const AlbumsPlayList = () => {
  const ScrollX = useRef(new Animated.Value(0)).current;
  const slider = useRef(null);
  const progress = useProgress();
  const TrackplayerInformation = newSongs[0];
  const [songs, setSongs] = useState(0);
  const [trackTitle, setTrackTitle] = useState();
  const [trackImages, setTrackImages] = useState();
  const [trackMembers, setTrackMembers] = useState();

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack !== null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const { title, artwork, artist } = track;
      setTrackImages(artwork);
      setTrackTitle(title);
      setTrackMembers(artist);
    }
  });

  useEffect(() => {
    ScrollX.addListener(({ value }) => {
      const index = Math.round(value / width);
      SkipTo(index);
      setSongs(index);
    });
  }, [ScrollX]);

  const position = useRef(Animated.divide(ScrollX, width)).current;

  const renderItem = ({ index, item }) => (
    <ArtistImageItem
      index={index}
      position={position}
      width={width}
      item={item}
    />
  );

  const renderTrack = ({ item }) => <ArtistTrack item={item} />;

  return (
    <LinearGradient
      style={styles.linearGradient}
      colors={['#192f6a', '#4c669f', '#3b5998']}>
      <Container>
        <SafeAreaView style={{ height: 352 }}>
          <Animated.FlatList
            ref={slider}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            data={newSongs}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: ScrollX } } }],
              { useNativeDriver: true }
            )}
          />
        </SafeAreaView>
        <TitleText>{trackTitle}</TitleText>
        <ArtistText>{trackMembers}</ArtistText>
        <ProgressBar
          trackLength={progress.duration}
          currentPosition={progress.position}
          onSeek={async (value: number) => {
            await TrackPlayer.seekTo(value);
          }}
          onSlidingStart={0}
        />
        <BackgroundPlayerTracking>
          <PlayPauseButton onNext={undefined} onPrev={undefined} />
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
