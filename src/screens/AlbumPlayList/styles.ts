import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const FlatListView = styled.View`
  top: 50px;
`;

export const TitleText = styled.Text`
  font-size: 28px;
  color: #fff;
`;
export const ArtistText = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const ArtistImageListMusics = styled.Image`
  width: 300px;
  height: 200px;
  border-radius: 30px;
`;

export const BackgroundPlayerTracking = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
`;
