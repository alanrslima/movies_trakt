import React from 'react';

import {
  Button,
  Album,
  Title,
  ContainerTitle
} from './styles';

export default function Single(props) {

  return (
    <Button
      onPress={props.onPress}
    >
      <Album
        uri={props.images.length ? `https://image.tmdb.org/t/p/w500/${props.images[0].file_path}` : ''}
      />
      <ContainerTitle>
        <Title>{props.movie.title}</Title>

      </ContainerTitle>
    </Button>
  );
}
