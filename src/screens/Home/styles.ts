import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const HeaderText = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: #fff
  top: 30px;
  left: 10px;
`;

export const AlbumImage = styled.ImageBackground`
  width: 310px;
  height: 400px;
  left: 20px;
  top: 50px;
  border-radius: 30px;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonAlbumView = styled.View`
  flex-direction: row;
  width: 150px;
  height: 60px;
  background-color: #00bfff;
  border-radius: 20px;
  bottom: 20px;
  align-items: center;
  justify-content: center;
`;
