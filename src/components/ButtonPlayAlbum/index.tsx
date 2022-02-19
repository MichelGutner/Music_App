import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { ButtonAlbumView, TextPlayNow } from './styles';

type Props = TouchableOpacityProps & {
  iconName: string;
  iconSize: number;
  iconColor: string;
  titleButton: string;
  onPress: () => void;
};

const ButtonPlayerAlbum = ({
  iconName,
  iconSize,
  iconColor,
  titleButton,
  onPress,
}: Props) => {
  return (
    <ButtonAlbumView onPress={onPress} activeOpacity={0.6}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
      <TextPlayNow>{titleButton}</TextPlayNow>
    </ButtonAlbumView>
  );
};

export default ButtonPlayerAlbum;
