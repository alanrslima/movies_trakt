import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 10px 0px;
  display: flex;
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
  margin-bottom: 10px;
`;

export const Tab = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 11 }
})`
`;