import React from 'react';

import {
  Container,
  Icon,
  Title,
} from './styles';

export default function Button(props) {
  return (
    <Container
      onPress={props.onPress}
    >
      <Title>{props.title}</Title>
    </Container>
  );
}
