// import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #303030;
  padding-bottom: ${getBottomSpace()}px
`;