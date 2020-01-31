import React from 'react';
import { Linking } from 'react-native';
import {
  Modal,
  Container,
  BtnClose,
  Header,
  Image,
  TextBtnClose,
  Title,
  Scroll,
  Description,
} from './styles';
import { useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';

import Comment from '~/components/Comment';
import Button from '~/components/Button';


export default function Detail(props) {

  const { images } = props.data;
  let details = useSelector(state => state.movies.details);

  function getImageUri() {
    try {
      return `https://image.tmdb.org/t/p/w500/${images[0].file_path}`;
    } catch (error) {
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLjM8VoYMLkdsK_ttKvuYd71UQfXIjAzVZcFPSscPiCc8R-pVW';
    }
  }

  function onPressTrailler() {
    Linking.openURL(details.about.trailer).catch();
  }

  function onPressHomepage() {
    Linking.openURL(details.about.homepage).catch();
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
            {details &&
              <Animatable.View
                animation="fadeInUp"
                iterationCount={1}
                useNativeDriver={true}
              >
                <Title>{details.about.title}</Title>
                <Description>{details.about.overview}</Description>
                <Button
                  title="Watch trailler"
                  onPress={onPressTrailler}
                />
                <Button
                  title="Homepage"
                  onPress={onPressHomepage}
                />
                <Title>Comments</Title>
                {details.comments.map((item, i) => (
                  <Comment
                    username={item.user.username}
                    comment={item.comment}
                    key={i}
                  />
                ))}
              </Animatable.View>
            }
          </Scroll>
        </Container>
      </Modal>
    );
  } else return null;
}
