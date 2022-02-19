import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { State, usePlaybackState } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { togglePlayBack } from '../Trackers';
import { ButtonPlayPause, Container } from './styles';

type TrackingProps = TouchableOpacityProps & {
  onNext: object;
  onPrev: object;
};

const PlayPauseButton = ({ onNext, onPrev }: TrackingProps) => {
  const playbackState = usePlaybackState();

  return (
    <Container>
      <ButtonPlayPause onPress={() => togglePlayBack(playbackState)}>
        <Icon
          name={playbackState === State.Playing ? 'pause' : 'play'}
          size={40}
          color={'white'}
        />
      </ButtonPlayPause>
    </Container>
  );
};

export default PlayPauseButton;
