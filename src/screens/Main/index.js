import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../store/ducks/movies';

import {
  Container
} from './styles';
import * as Animatable from 'react-native-animatable'

import List from '../../components/List';

export default function Main() {

  let dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  function renderContent() {
    if (isLoading) {
      return null;
    } else {
      return (
        <Animatable.View
          style={{ flex: 1 }}
          animation="fadeInUp"
          iterationCount={1}
          useNativeDriver={true}
        >
          <ScrollView>

            <List
              title="Populares"
            />
            <List
              title="Mais assistidos"
            />
            <List
              title="Lançamentos"
            />
          </ScrollView>
        </Animatable.View>
      );
    }
  }


  return (
    <Container>
      {renderContent()}
    </Container>
  );
}
