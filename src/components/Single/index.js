import React from 'react';

import {
  Container,
  Button,
  Title,
  Album,
  Description,
} from './styles';

export default function Single(props) {
  return (
    <Container>
      <Button 
        onPress={props.onPress}
      >
        <Title>Titulo</Title>
        <Album />
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis tellus nec quam molestie, a venenatis tellus aliquam. Fusce in mauris in leo sodales imperdiet vel in arcu</Description>
      </Button>
    </Container>
  );
}
