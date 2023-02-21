import {ScrollView, View} from 'react-native';
import {Poster} from '../../molecules/Poster';
import {CarouselProps} from './types';

export default function Carousel({section}: CarouselProps) {
  return (
    <View>
      <ScrollView bounces={false} pagingEnabled horizontal>
        {section.movies.map(movie => (
          <Poster size="large" key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
}
