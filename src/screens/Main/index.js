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
              onPressAlbum={onPressAlbum}
              type="square"
              title="Populares"
              albuns={popular}
            />
            <List
              type="circle"
              title="Mais assistidos"
              albuns={trendings}
            />
            <List
              type="square"
              title="Lançamentos"
              albuns={[1, 2, 3, 4, 5]}
            />
            {/* <Single />
            <Single />
            <Single />
            <List
              type="square"
              title="Lançamentos"
              albuns={[1, 2, 3, 4, 5]}
            /> */}
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
