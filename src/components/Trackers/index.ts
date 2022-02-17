import TrackPlayer, { Capability } from 'react-native-track-player';
import songs from '../../../services/MusicsApi';

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
