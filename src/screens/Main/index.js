import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  ActivityIndicator,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';

import { getMovies } from '~/store/ducks/movies';

import List from '~/components/List';
import Detail from '~/screens/Detail';

import {
  Container
} from './styles';


export default function Main() {

  let dispatch = useDispatch();

  let popular = useSelector(state => state.movies.popular);
  let trendings = useSelector(state => state.movies.trendings);
  let updates = useSelector(state => state.movies.updates);
  let collected = useSelector(state => state.movies.collected);

  let cashLoad = useSelector(state => state.movies.cashLoad);

  const [showDetail, setShowDetail] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState([]);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  function onPressAlbum(movie) {
    setSelectedMovie(movie);
    setShowDetail(true);
  }

  function renderContent() {
    if (cashLoad !== 4) {
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
              type="circle"
              title="Mais assistidos"
              albuns={trendings}
            />
            <List
              horizontal
              onPressAlbum={onPressAlbum}
              type="square"
              title="Populares"
              albuns={popular}
            />
            <List
              horizontal
              type="square"
              onPressAlbum={onPressAlbum}
              title="Lançamentos"
              albuns={updates}
            />
            <List
              onPressAlbum={onPressAlbum}
              title="Mais procurados"
              albuns={collected}
            />
          </ScrollView>
        </Animatable.View>
      );
    }
  }

  return (
    <Container>
      {renderContent()}
      <Detail
        isVisible={showDetail}
        data={selectedMovie}
        onCancel={() => setShowDetail(false)}
      />
    </Container>
  );
}
