import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 300px;
  height: 60px;
  justify-content: space-between;
`;

export const ArtistText = styled.Text`
  color: #fff;
  font-size: 16px;
  left: 10px;
`;

export const ArtistImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 20px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  top: 10px;
`;

export const BodyView = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`;
