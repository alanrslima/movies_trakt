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
      onPress={() => props.onPressAlbum(props)}
    >
      <Album
        uri={props.images.length ? `https://image.tmdb.org/t/p/w500/${props.images[0].file_path}` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwK9UbQp26PJJUjdwpj0hDniWeqY0MF3-SMqPUkt9VgwrjiNte'}
      />
      <ContainerTitle>
        <Title>{props.movie.title}</Title>

      </ContainerTitle>
    </Button>
  );
}
