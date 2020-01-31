import React from 'react';

import {
  Container,
  Header,
  Icon,
  Username,
  Text,
} from './styles';

export default function Comment(props) {
  return (
    <Container>
      <Header>
        <Icon />
        <Username>{props.username}</Username>
      </Header>
      <Text>{props.comment}</Text>
    </Container>
  );
}
