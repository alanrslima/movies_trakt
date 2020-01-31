import React from 'react';
import {
  Modal,
  Container,
  BtnClose,
  Header,
  Image,
  TextBtnClose,
  Title,
  Scroll
} from './styles';
import Comment from '~/components/Comment';


export default function Detail(props) {

  const { images, movie, comments } = props.data;

  function getImageUri() {
    try {
      return `https://image.tmdb.org/t/p/w500/${images[0].file_path}`;
    } catch (error) {
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLjM8VoYMLkdsK_ttKvuYd71UQfXIjAzVZcFPSscPiCc8R-pVW';
    }
  }

  if (props.data) {
    return (
      <Modal
        visible={props.isVisible}
      >
        <Container>
          <Scroll>
            <Header>
              <BtnClose
                onPress={props.onCancel}
              >
                <TextBtnClose>Voltar</TextBtnClose>
              </BtnClose>
            </Header>
            {images &&
              <Image
                source={{ uri: getImageUri() }}
              />
            }
            <Title>{movie && movie.title}</Title>
            {comments &&
              <>
                <Title>Comments</Title>
                {comments.map((item, i) => (
                  <Comment
                    username={item.user.username}
                    comment={item.comment}
                    key={i}
                  />
                ))}
              </>
            }
          </Scroll>
        </Container>
      </Modal>
    );
  } else return null;
}
