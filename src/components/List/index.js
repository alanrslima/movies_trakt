import React from 'react';
import {
  Container,
  Header,
  Title,
  Tab,
} from './styles';
import Album from '../Album';
import Single from '../Single';


export default function List(props) {

  if (!props.albuns.length) return null;

  function renderContent() {
    if (props.horizontal) {
      return (
        <Tab>
          {props.albuns.map((album, i) => (
            <Album
              {...album}
              key={i}
              onPress={props.onPressAlbum}
              type={props.type}
            />
          ))}

        </Tab>
      )
    } else {
      return props.albuns.map((album, i) => (
        <Single
          {...album}
          onPress={props.onPressAlbum}
          key={i}
        />
      ));
    }
  }

  return (
    <Container>
      <Header>
        <Title>{props.title}</Title>
      </Header>
      {renderContent()}
    </Container>
  );
}
