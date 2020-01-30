import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  ActivityIndicator,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '~/store/ducks/movies';

import {
  Container
} from './styles';
import * as Animatable from 'react-native-animatable'

import Header from '~/components/Header';
import List from '~/components/List';
import Single from '~/components/Single';

export default function Main() {

  let dispatch = useDispatch();
  let popular = useSelector(state => state.movies.popular);
  let trendings = useSelector(state => state.movies.trendings);
  let updates = useSelector(state => state.movies.updates);

  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    dispatch(getMovies());
  }, []);

  function onPressAlbum(album) {

  }


  function renderContent() {
    if (isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator color='#FFF' size="large" />
        </View>
      );
    } else {
      return (
        <Animatable.View
          style={{ flex: 1 }}
          animation="fadeInUp"
          iterationCount={1}
          useNativeDriver={true}
        >
          <ScrollView style={{ flex: 1 }}>
            <List
              horizontal
              onPressAlbum={onPressAlbum}
              type="square"
              title="Populares"
              albuns={popular}
            />
            <List
              horizontal
              type="circle"
              title="Mais assistidos"
              albuns={trendings}
            />
            <List
              title="Lançamentos"
              albuns={updates}
            />
          </ScrollView>
        </Animatable.View>
      );
    }
  }

  return (
    <Container>
      <Header />
      {renderContent()}
    </Container>
  );
}
