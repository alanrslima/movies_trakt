import styled from 'styled-components/native';

export const Square = styled.TouchableOpacity.attrs(props => ({
  onPress: props.onPress
}))`
  height: 120px;
  width: 100px;
  background-color: #CCC;
  border-radius: 10px;
  overflow: hidden;  
`;

export const Image = styled.Image.attrs(props => ({
  source: { uri: props.uri }
}))`
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin: 5px;
  width: 105px;

`;

export const Title = styled.Text`
  color: #FFF;
  font-weight: 500;
  margin-top: 10px;
`;

export const Circle = styled.TouchableOpacity.attrs(props => ({
  onPress: props.onPress
}))`
  height: 100px;
  overflow: hidden;
  width: 100px;
  background-color: #CCC;
  border-radius: 60px;
`;