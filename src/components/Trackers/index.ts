import TrackPlayer, { Capability, State } from 'react-native-track-player';
import songs from '../../../services/Funk/FunkApi';

export const setupPlayer = async () => {
  await TrackPlayer.setupPlayer();
  await TrackPlayer.updateOptions({
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.PlayFromId,
    ],
  });
  await TrackPlayer.add(songs);
};

export const togglePlayBack = async playbackState => {
  const currentTrack = await TrackPlayer.getCurrentTrack();

  if (currentTrack !== null) {
    if (playbackState === State.Paused) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
};

export const SkipTo = async (trackId: number) => {
  TrackPlayer.skip(trackId);
};
