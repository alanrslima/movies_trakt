// import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #303030;
  padding-top: ${getStatusBarHeight()}px;
`;