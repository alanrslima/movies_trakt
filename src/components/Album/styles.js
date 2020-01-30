import styled from 'styled-components/native';

export const Square = styled.TouchableOpacity`
  height: 120px;
  width: 90px;
  background-color: #CCC;
  border-radius: 10px;
  overflow: hidden;
`;

export const Image = styled.Image.attrs(props => ({
  source: { uri: props.uri }
}))`
  width: 100%;
  height: 100%;
`;

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin: 5px;
  width: 120px;
`;

export const Title = styled.Text`
  color: #FFF;
  font-weight: 500;
  margin-top: 10px;
`;

export const Circle = styled.TouchableOpacity`
  height: 120px;
  overflow: hidden;
  width: 120px;
  background-color: #CCC;
  border-radius: 60px;
`;