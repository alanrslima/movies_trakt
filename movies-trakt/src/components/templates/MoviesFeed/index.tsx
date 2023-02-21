import {ScrollView} from 'react-native';
import Carousel from '../../organisms/Carousel';
import {Section} from '../../organisms/Section';
import {MoviesFeedProps} from './types';

export function MoviesFeed({sections}: MoviesFeedProps) {
  return (
    <ScrollView bounces={false}>
      <Carousel section={sections[0]} />
      {sections.map(section => (
        <Section key={section.title} section={section} />
      ))}
    </ScrollView>
  );
}
