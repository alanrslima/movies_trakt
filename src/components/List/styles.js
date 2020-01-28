import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 30px;
`;

export const Header = styled.View`
  /* flex: 1; */
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 16px;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px;
`;

export const TextButton = styled.Text`
  color: #FFF;
  font-size: 12px;
`;

export const Scroll = styled.ScrollView`
  padding-left: 16px;
`;