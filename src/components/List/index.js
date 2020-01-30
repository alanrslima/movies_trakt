import React from 'react';
import {
  Container,
  Header,
  Title,
  Button,
  TextButton,
  Tab,
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
      <Tab>
        {props.albuns.map((album, i) => (
          <Album
            key={i}
            type={props.type}
          />
        ))}

      </Tab>
    </Container>
  );
}
