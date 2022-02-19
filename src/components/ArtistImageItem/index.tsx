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
import { Animated, View } from 'react-native';
import { setupPlayer } from '../Trackers';

type Props = {
  item: any;
  position: any;
  index: any;
  width: any;
};

const ArtistImageItem = ({ item, position, width, index }: Props) => {
  const { artwork } = item;
  return (
    <Animated.View
      style={{
        alignItems: 'center',
        width: width,
        transform: [
          {
            translateX: Animated.multiply(Animated.add(position, -index), -100),
          },
        ],
      }}>
      <Animated.Image
        source={artwork}
        resizeMode="stretch"
        style={{ width: 300, height: 300, borderRadius: 10 }}
      />
    </Animated.View>
  );
};

export default ArtistImageItem;
//   <Animated.View
//    style={{
//      alignItems: 'center',
//      width: width,
//      transform: [
//        {
//          translateX: Animated.multiply(Animated.add(position, -index), -100),
//        },
//      ],
//    }}>
//    <Animated.Image
//      source={image}
//      resizeMode="stretch"
//      style={{ width: 320, height: 364, borderRadius: 24 }}
//    />
//  </Animated.View>
