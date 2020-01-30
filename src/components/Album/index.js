import React from 'react';

import {
  Circle,
  Square,
  Image,
  Container,
  Title,
} from './styles';

export default function Album(props) {

  function renderContent() {
    if (props.type === 'circle') {
      return (
        <Circle>
          <Image
            uri={props.images.length ? `https://image.tmdb.org/t/p/w500/${props.images[0].file_path}` : ''}
          />
        </Circle>
      )
    } else if (props.type === 'square') {
      return (
        <Square >
          <Image
            uri={props.images.length ? `https://image.tmdb.org/t/p/w500/${props.images[0].file_path}` : ''}
          />
        </Square>
      );
    }
  }

  return (
    <Container>
      {renderContent()}
      <Title numberOfLines={1}>{props.movie.title}</Title>
    </Container>
  )


}
