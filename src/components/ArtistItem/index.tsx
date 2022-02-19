import React from 'react';
import {
  ArtistImage,
  ArtistText,
  BodyView,
  ButtonIcon,
  Container,
} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import { Themes } from '../../../themes/Themes';
import { View } from 'react-native';
import { setupPlayer } from '../Trackers';

type Props = {
  item: any;
};

const ArtistTrack = ({ item }: Props) => {
  const { artist, artwork, title } = item;
  return (
    <Container>
      <BodyView>
        <ArtistImage source={artwork} resizeMode="contain" />
        <View>
          <ArtistText>{artist}</ArtistText>
          <ArtistText>{title}</ArtistText>
        </View>
        <ButtonIcon onPress={() => setupPlayer()}>
          <Icon name="play" size={25} color={Themes.colors.white} />
        </ButtonIcon>
      </BodyView>
    </Container>
  );
};

export default ArtistTrack;
