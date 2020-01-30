import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export const Container = styled.View`
  padding-top: ${getStatusBarHeight()}px;
  height: ${Platform.OS === 'ios' ? getStatusBarHeight() + 50 : 50}px;
  background-color: rgba(100, 100, 100, 0.8);
`;