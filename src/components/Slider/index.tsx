import Slider from '@react-native-community/slider';
import React from 'react';
import { View } from 'react-native';
import { Themes } from '../../../themes/Themes';
import { Container, StopWatch } from './styles';

type Props = {
  trackLength: any;
  currentPosition: any;
  onSeek: any;
  onSlidingStart: any;
};

const ProgressBar = ({
  trackLength,
  currentPosition,
  onSeek,
  onSlidingStart,
}: Props) => {
  const formatTime = (secs: number) => {
    let minutes = Math.floor(secs / 60);
    let seconds = Math.ceil(secs - minutes * 60);

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  };
  return (
    <Container>
      <View style={{ flexDirection: 'row' }}>
        <StopWatch style={{ color: Themes.colors.white }}>
          {formatTime(currentPosition)}
        </StopWatch>
        <StopWatch>{formatTime(trackLength)}</StopWatch>
      </View>
      <Slider
        maximumTrackTintColor="white"
        maximumValue={Math.max(trackLength, 1, currentPosition)}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSeek}
        value={currentPosition}
      />
    </Container>
  );
};

export default ProgressBar;
