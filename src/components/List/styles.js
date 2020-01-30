import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 15px 0px;
  flex: 1;
`;

export const Header = styled.View`
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

export const Tab = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  padding-left: 11px;
`;