import React from 'react';
import {
  Container,
  Header,
  Title,
  Button,
  TextButton,
  Scroll,
} from './styles';
import Album from '../Album';


export default function List(props) {
  return (
    <Container>
      <Header>
        <Title>{props.title}</Title>
        <Button>
          <TextButton>Ver todos</TextButton>
        </Button>
      </Header>
      <Scroll horizontal>
        <Album />
        <Album />
        <Album />
        <Album />
      </Scroll>
    </Container>
  );
}
