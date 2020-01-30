import styled from 'styled-components/native';


export const Button = styled.TouchableOpacity`
    margin: 10px 16px;
    overflow: hidden;
`;

export const Album = styled.Image.attrs(props => ({
  source: { uri: props.uri }
}))`
  border-radius: 10px;
  height: 170px;
  width: 100%;
  background-color: #CCC;
`;

export const ContainerTitle = styled.View`
  position: absolute;
  background-color: rgba(0,0,0,0.4);
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px;
`;

export const Title = styled.Text`
  color: #FFF;
  font-weight: 500;
  font-size: 14px;
  text-align: right;
  font-size: 14px;
`;


