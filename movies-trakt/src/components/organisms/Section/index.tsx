import {ScrollView, View} from 'react-native';
import Text from '../../atoms/Text';
import {Poster} from '../../molecules/Poster';
import {SectionProps} from './types';

export function Section({section}: SectionProps) {
  return (
    <View>
      <Text>{section.title}</Text>
      <ScrollView horizontal>
        {section.movies.map(movie => (
          <Poster key={movie.title} size="small" movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
}
