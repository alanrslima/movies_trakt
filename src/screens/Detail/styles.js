import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Dimensions } from 'react-native';


export const Modal = styled.Modal.attrs(props => ({
  animationType: "slide",
  transparent: true,
  visible: props.visible,
}))`
  flex: 1;
  margin-bottom: ${getBottomSpace()}px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  margin-top: ${getBottomSpace() + 20}px;
  border-top-left-radius: 20px;
  border-top-right-radius : 20px;
  padding-bottom: ${getBottomSpace()}px;
`;

export const Scroll = styled.ScrollView`
`;

export const Header = styled.View`
  padding: 20px;
  width: 100%;
  position: absolute;
  z-index: 10;
`;

export const BtnClose = styled.TouchableOpacity`
  padding: 10px;
  width: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: rgba(255,255,255,0.5);
`;

export const TextBtnClose = styled.Text`
  color: #000;
  font-weight: 600;
`;

export const Image = styled.Image`
  height: ${Dimensions.get('window').width * 0.7}px;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(255,255,255,0.3);
`;

export const Title = styled.Text.attrs({
  allowFontScaling: false
})`
  font-size: 20px;
  color: #FFF;
  margin: 16px;
  font-weight: bold;
`;