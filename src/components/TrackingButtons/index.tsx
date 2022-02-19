import React, { useEffect, useRef } from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import TrackPlayer, { usePlaybackState } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ButtonPlayPause, Container } from './styles';

type TrackingProps = TouchableOpacityProps & {
  onNext: object;
  onPrev: object;
};

const TrackingButtons = ({ onNext, onPrev }: TrackingProps) => {
  const playbackState = usePlaybackState();
  const isPlaying = useRef('paused');

  useEffect(() => {
    if (playbackState === 'playing' || playbackState === 3) {
      isPlaying.current = 'playing';
    } else if (playbackState === 'paused' || playbackState === 2) {
      isPlaying.current = 'paused';
    } else {
      isPlaying.current = 'loading';
    }
  }, [playbackState]);

  const returnPlayPauseButtom = () => {
    switch (isPlaying.current) {
      case 'paused':
        return <Icon name={'pause'} size={40} color={'white'} />;
      case 'playing':
        return <Icon name={'play'} size={40} color={'white'} />;
      default:
        return <ActivityIndicator size={25} color="white" />;
    }
  };

  const onPlayPause = () => {
    if (isPlaying.current === 'paused') {
      TrackPlayer.play();
    } else {
      if (isPlaying.current === 'playing') {
        TrackPlayer.pause();
      }
    }
  };

  return (
    <Container>
      <ButtonPlayPause onPress={() => onPlayPause()}>
        {returnPlayPauseButtom()}
      </ButtonPlayPause>
    </Container>
  );
};

export default TrackingButtons;
