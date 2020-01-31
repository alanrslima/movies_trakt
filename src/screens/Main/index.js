import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  View,
  StatusBar,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';

import { getMovies, getMovieDetail } from '~/store/ducks/movies';

import List from '~/components/List';
import Detail from '~/screens/Detail';

import {
  Container,
  Scroll,
} from './styles';


export default function Main() {

  const dispatch = useDispatch();

  let popular = useSelector(state => state.movies.popular);
  let trendings = useSelector(state => state.movies.trendings);
  let updates = useSelector(state => state.movies.updates);
  let collected = useSelector(state => state.movies.collected);

  let cashLoadMovies = useSelector(state => state.movies.cashLoadMovies);

  const [showDetail, setShowDetail] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState([]);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  function onPressMovie(item) {
    dispatch(getMovieDetail(item.movie.id));
    setSelectedMovie(item);
    setShowDetail(true);
  }

  function renderContent() {
    if (cashLoadMovies !== 4) {
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
          <Scroll>
            <List
              horizontal
              onPressMovie={onPressMovie}
              type="circle"
              title="Mais assistidos"
              albuns={trendings}
            />
            <List
              horizontal
              onPressMovie={onPressMovie}
              type="square"
              title="Populares"
              albuns={popular}
            />
            <List
              horizontal
              type="square"
              onPressMovie={onPressMovie}
              title="Lançamentos"
              albuns={updates}
            />
            <List
              onPressMovie={onPressMovie}
              title="Mais procurados"
              albuns={collected}
            />
          </Scroll>
        </Animatable.View>
      );
    }
  }

  return (
    <Container>
      <StatusBar backgroundColor="#303030" barStyle="light-content" />
      {renderContent()}
      <Detail
        isVisible={showDetail}
        data={selectedMovie}
        onCancel={() => setShowDetail(false)}
      />
    </Container>
  );
}
